import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import gauge from '../../assets/gauge.png';
import bpm from '../../assets/heartbeat.png';
import watch from '../../assets/watch.png';
import health from '../../assets/health.png';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../utils/Colors'

const { width } = Dimensions.get('screen')

interface IProps {
    stat: string;
    title: string;
    primaryValue: string;
    secondaryValue: string;
}

/**
 * @param {{ 
 * stat: string;
 * title: string,
 * primaryValue: string,
 * secondaryValue: string
 * }} props 
 * @returns
 */

/**
 * StatContainer creates a row component for displaying a badge, the 
 * primaryStatValue & secondaryValue for the stat depending on the stat string prop 
 * that is passed to the component. If a stat does not have a secondaryValue, an empty
 * string can be passed
 */
const StatContainer = (props: IProps) => {
    const { primaryValue, secondaryValue, stat, title } = props;

    //Depending on the stat string prop that is passed
    //statIcon will be assigned to change the icon for the
    //respective stat 
    let statIcon;

    //Depending on the stat string prop that is passed,
    //it changes the color gradient for the stat background
    //1st color is the start/top tone
    //2nd color is the end/bottom tone
    let statColor: string[];

    //Depending on the stat string prop that is 
    //passed, the stat/color of the stat background gradient will
    //change along with the icon for the stat
    switch (stat) {
        case "Care":
            statIcon = health;
            statColor = [Colors.statPurple, Colors.statLightPurple];
            break;
        case "Anxiety":
            statIcon = gauge;
            statColor = [Colors.statLightPurple, Colors.blue];
            break;

        case "BPM":
            statIcon = bpm;
            statColor = [Colors.blue, Colors.statRed];
            break;
        case "Watch":
            statIcon = watch;
            statColor = [Colors.statRed, Colors.statYellow];
            break;
    }

    return (
        <View style={{ ...styles.container, borderRightColor: statColor[1], shadowColor: statColor[1] }}>
            <LinearGradient style={styles.box} colors={statColor.map(color => color)}>
                <Image style={styles.statIcon} source={statIcon} />
            </LinearGradient>
            <View style={styles.statInnerContainer}>
                <Text style={styles.statName}>{title}</Text>
                <View style={styles.statInnerDetailsContainer}>
                    <ScrollView horizontal={true} style={styles.scrollView}>
                        <Text style={styles.statPrimaryValue}>{primaryValue}</Text>
                    </ScrollView>
                    <ScrollView>
                        <Text style={styles.statSecondaryValue}>{secondaryValue}</Text>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        height: 100,
        width: 100,
        elevation: 16,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        width: width - 15,
        borderBottomLeftRadius: 21,
        borderTopLeftRadius: 21,
        borderRightWidth: 5,
        backgroundColor: Colors.white,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 16
    },

    scrollView: {
        height: 5,
        width: '100%',
    },

    statIcon: {
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },

    statInnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: 21,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    statInnerDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 45,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    statName: {
        display: "flex",
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
        marginLeft: 15
    },

    statPrimaryValue: {
        display: "flex",
        fontSize: 11,
        width: '100%',
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'left',
        marginLeft: 15,
    },

    statSecondaryValue: {
        display: "flex",
        fontSize: 11,
        width: '100%',
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'left',
        marginLeft: 15
    },
});

export default StatContainer;