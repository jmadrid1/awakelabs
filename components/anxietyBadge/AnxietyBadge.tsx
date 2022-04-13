import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../utils/Colors'

interface IProps {
    anxietyLevel: number;
}

/**
 * @param {{ 
 * anxietyLevel: number;
 * }} props 
 * @returns
 */

/**
 * AnxietyBadge creates a circular badge that receives anxietyLevel 
 * as number prop to display the anxiety level of a patient  
 */
const AnxietyBadge = (props: IProps) => {
    const { anxietyLevel } = props;
    //Converts number prop to string for use in Text component
    const anxietyLevelString = String(anxietyLevel)

    //Changes the color gradient for the outer circle
    //1st color is the start/top tone
    //2nd color is the end/bottom tone
    const badgeColor = [Colors.statPurple, Colors.statLightPurple];

    return (
        <View style={styles.container}>
            <LinearGradient style={{...styles.anxietyContainer, shadowColor: badgeColor[0]}} colors={badgeColor.map(color => color)}>
                <View style={styles.anxietyInnerCircleContainer}>
                    <Text style={styles.anxietyLevelsText}>{anxietyLevelString}</Text>
                </View>
            </LinearGradient>
            <Text numberOfLines={2} style={styles.title}>Anxiety Levels</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    anxietyContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        width: 80,
        borderRadius: 100,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    anxietyInnerCircleContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 70,
        width: 70,
        elevation: 0,
        borderRadius: 300,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },

    anxietyLevelsText: {
        display: "flex",
        fontSize: 13,
        width: 40,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 2
    },

    container: {
        display: 'flex',
        height: 130,
        flexDirection: 'column',
        width: 90,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 23
    },

    title: {
        display: "flex",
        fontSize: 14,
        width: '100%',
        height: 60,
        fontWeight: 'bold',
        color: Colors.darkGray,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
    },
});

export default AnxietyBadge;