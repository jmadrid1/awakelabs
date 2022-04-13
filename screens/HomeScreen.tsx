import React, { useState, useEffect } from 'react';
import { StatusBar, View, StyleSheet, BackHandler, FlatList } from 'react-native';
import PatientCard from '../components/patientCard/PatientCard';
import { Account } from '../types/Account';
import data from '../datasource/data.json'
import Colors from '../utils/Colors'

interface IProps {
    navigation: any;
    route: any;
}

/**
 * @param {{ 
 * navigation: any,
 * route: any
 * }} props 
 * @returns
 */

/**
 * HomeScreen is the 1st screen that a user interacts with. This screen's main feature is
 * displaying patient's wellness information on cards. This screen is passed React's navigation
 * & route as props for navigating between screens and passing data.
*/
export const HomeScreen = (props: IProps) => {
    const { navigation } = props;
    const [accounts, setAccounts] = useState<Account[]>([]);

    useEffect(() => {
        setAccounts(data)
        const onBackPress = () => {
            BackHandler.exitApp()
            return true
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress)
    }, [])

    const renderItem = ({item}) => {
        return (
            <PatientCard key={item._id.$oid} account={item} navigation={navigation} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                data={accounts}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: StatusBar.currentHeight
    },
})

export default HomeScreen;