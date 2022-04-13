import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Account } from '../../types/Account';
import drill from '../../assets/ic_drill.png';
import BPMBadge from '../bpmBadge/BPMBadge';
import AnxietyBadge from '../anxietyBadge/AnxietyBadge';
import PatientBadge from '../patientBadge/PatientBadge';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../utils/Colors'

interface IProps {
    account: Account;
    navigation: any;
}

/**
 * @param {{ 
 * account: Account,
 * navigation: any
 * }} props 
 * @returns
 */

/**
 * PatientCard is the rendered FlatList item component that is passed an Account
 * prop for displaying the patient's information.
 */ 
const PatientCard = (props: IProps) => {
    const { account } = props;
    const { navigation } = props;

    //Gradient colors for the patientDetailsContainer component
    //1st color is the start/top tone
    //2nd color is the end/bottom tone
    const detailsBarColor = [Colors.awakeGreen, Colors.awakeLightGreen];

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.header} onPress={() => navigation.push('Details', { selectedAccount: account })}>
                <Image style={styles.drillArrow} source={drill} />
            </TouchableOpacity>
            <View style={styles.badgesContainer}>
                <BPMBadge beatsPerMinute={account.currentBpm} />
                <PatientBadge anxietyState={account.anxietyState} patientInitials={'JD'} />
                <AnxietyBadge anxietyLevel={account.anxietyLevel} />
            </View>
            <View style={styles.patientNameContainer}>
                <Text numberOfLines={1} style={styles.patientName}>John Doe</Text>
                <Text numberOfLines={1} style={styles.participantId}>Participant: {account.participantId}</Text>
            </View>
            <LinearGradient style={{ ...styles.patientDetailsContainer, shadowColor: detailsBarColor[0]}} colors={detailsBarColor.map(color => color)}>
                <Text numberOfLines={1} style={styles.participantDetails}>Care Team:        {account.careTeamId}</Text>
                <Text numberOfLines={1} style={styles.participantDetails}>Organization:     {account.organizationId}</Text>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    badgesContainer: {
        display: "flex",
        flexDirection: 'row',
        height: 110,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 40,
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 320,
        width: '100%',
        elevation: 6,
        marginTop: 10,
        borderRadius:20,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },

    drillArrow: {
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center',
        tintColor: "#b5b6b6",
        marginRight: 15
    },

    header: {
        display: "flex",
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#e9e7e2',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    patientDetailsContainer: {
        display: "flex",
        flexDirection: 'column',
        height: 60,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 6,
    },

    patientNameContainer: {
        display: "flex",
        flexDirection: 'column',
        height: 45,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    patientName: {
        display: "flex",
        fontSize: 18,
        width: 90,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    participantId: {
        display: "flex",
        fontSize: 10,
        height: 20,
        fontWeight: 'bold',
        color: '#6f6f6f',
        textAlign: 'center',
        marginLeft: 15,
    },

    participantDetails: {
        display: "flex",
        fontSize: 11,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginLeft: 25,
        marginTop: 3
    },
});

export default PatientCard;