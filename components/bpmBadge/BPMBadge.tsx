import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import bpm from '../../assets/bpm.png';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../utils/Colors'

interface IProps {
    beatsPerMinute: number;
}

/**
 * @param {{ 
 * beatsPerMinute: number
 * }} props 
 * @returns
 */

/**
 * BPMBadge creates a circular badge that receives beatsPerMinute 
 * as a number prop to display the beatsPerMinute of a patient 
 */
const BPMBadge = (props: IProps) => {
    const { beatsPerMinute } = props;

    //Converts number prop to string for use in Text component
    const bpmString = String(beatsPerMinute)

    //Changes the color gradient for the outer circle
    //1st color is the start/top tone
    //2nd color is the end/bottom tone
    const badgeColor = [Colors.bpmRed, Colors.bpmPink]

    return (
        <View style={styles.container}>
            <LinearGradient style={{ ...styles.beatsContainer, shadowColor: badgeColor[0]}} colors={badgeColor.map(color => color)}>
                <ImageBackground style={styles.bpm} source={bpm}>
                    <Text style={styles.bpmText}>{bpmString}</Text>
                </ImageBackground>
            </LinearGradient>
            <Text numberOfLines={1} style={styles.title}>BPMs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    beatsContainer: {
        height: 80,
        width: 80,
        borderRadius: 100,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bpm: {
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },

    bpmText: {
        display: "flex",
        fontSize: 13,
        width: '100%',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 2
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 105,
        width: 90,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    title: {
        display: "flex",
        fontSize: 14,
        width: '100%',
        fontWeight: 'bold',
        color: '#6f6f6f',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
    },
});

export default BPMBadge;