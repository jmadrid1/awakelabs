import React, { useEffect } from 'react';
import { View, StatusBar, Text, StyleSheet, BackHandler, Dimensions } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Account } from '../types/Account';
import StatContainer from '../components/statContainer/StatContainer';
import BackButton from '../components/backButton/BackButton';
import PatientBadge from '../components/patientBadge/PatientBadge';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../utils/Colors'

const { height } = Dimensions.get('screen')

interface IProps {
    navigation: any;
    route: any;
    selectedAccount?: Account;
}

/**
 * @param {{ 
 * navigation: any,
 * route: any,
 * selectedAccount?: Account
 * }} props 
 * @returns
 */

/**
 * DetailScreen is the 2nd screen that is navigated to from HomeScreen. This screen's feature 
 * focuses on summarizing details about a patient's wellness. This screen is passed the selected 
 * Account from HomeScreen object along React's navigation & route as props for navigating between the screens and unpacking data.
*/
const DetailScreen = (props: IProps) => {
    const { navigation } = props;
    const { selectedAccount } = props.route.params
    const popAction = StackActions.pop(1);
    const bannerColor = [Colors.badgeGreen, Colors.white];

    useEffect(() => {
        const onBackPress = () => {
            navigation.dispatch(popAction)
            return true
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <BackButton onPress={() => navigation.dispatch(popAction)}/>
            </View>
            <LinearGradient style={styles.banner} colors={bannerColor.map(color => color)}>
                <PatientBadge anxietyState={''} patientInitials={'JD'} />
                <View style={styles.participantContainer}>
                    <Text numberOfLines={1} style={styles.patientName}>John Doe</Text>
                    <Text numberOfLines={1} style={styles.participantId}>Participant: {selectedAccount.participantId}</Text>
                </View>
            </LinearGradient>
            <View style={styles.statsWrapper}>
                <StatContainer stat='Care' title='Care' primaryValue={"Org: " + selectedAccount.organizationId} secondaryValue={"Care: " + selectedAccount.careTeamId} />
                <StatContainer stat='Anxiety' title='Anxiety Level' primaryValue={"State: " + selectedAccount.anxietyState} secondaryValue={"Level: " + selectedAccount.anxietyLevel} />
                <StatContainer stat='BPM' title='Current BPM' primaryValue={"BPM: " + selectedAccount.currentBpm} secondaryValue={"Baseline: " + selectedAccount.baselineProgress}/>
                <StatContainer stat='Watch' title='Wearable' primaryValue={`ID: ${selectedAccount.wearableId}`} secondaryValue={"Battery: " + selectedAccount.state.batteryLevel} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    banner: {
        display: 'flex',
        flexDirection: 'column',
        height: height / 3.1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: -10
    },

    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 170,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: StatusBar.currentHeight
    },

    header: {
        display: "flex",
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: Colors.badgeGreen,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    participantContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    participantId: {
        display: "flex",
        fontSize: 10,
        height: 20,
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'center',
        marginLeft: 15,
    },

    patientName: {
        display: "flex",
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
    },

    statsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    updatedText: {
        display: "flex",
        fontSize: 10,
        height: 20,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        marginRight: 15,
    }
});

export default DetailScreen;