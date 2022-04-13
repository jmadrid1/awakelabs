import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../utils/Colors'

interface IProps {
    anxietyState: string
    patientInitials: string;
}

/**
 * @param {{ 
 * anxietyState: string,
 * patientInitials: string
 * }} props 
 * @returns
 */

/**
 * PatientBadge creates a circular badge that receives anxietyState 
 * as a string prop change the color/status of a patient's anxiety along 
 * with receiving patientInitials as a string prop
*/
const PatientBadge = (props: IProps) => {
    const { anxietyState, patientInitials } = props;
    //Title can change to 'Anxiety State' or be blank
    //for utilization of badge  component in other components 
    //or screens
    let title;

    //Depending on the anxietyState string prop that is passed
    //Changes the color gradient for the outer circle
    //1st color is the start/top tone
    //2nd color is the end/bottom tone
    let badgeColor: string[];

    //Depending on the anxietyState string prop that is 
    //passed, the status/color of the patient badge will
    //reflect the wellness of the patient.
    //This badge can also be repurposed for displaying the 
    //initials of the patient
    switch (anxietyState) {
        case "LOW":
            badgeColor = [Colors.badgePurple, Colors.gray];
            title = 'Anxiety State';
            break;
        case "NORMAL":
            badgeColor = [Colors.badgeGreen, Colors.badgePurple];
            title = 'Anxiety State';
            break;
        case "MEDIUM":
            badgeColor = [Colors.badgeOrange, Colors.badgeGreen];
            title = 'Anxiety State';
            break;
        case "HIGH":
            badgeColor = [Colors.badgeRed, Colors.badgeYellow];
            title = 'Anxiety State';
            break;
        default:
            badgeColor = [Colors.awakeGreen, Colors.awakeLightGreen];
            title = '';
    }

    return (
        <View style={styles.container}>
            <LinearGradient style={{...styles.circleContainer, shadowColor: badgeColor[0]}} colors={badgeColor.map(color => color)} >
                <View style={styles.innerCircleContainer}>
                    <Text style={styles.patientInitials}>{patientInitials}</Text>
                </View>
            </LinearGradient>
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 170,
        width: 130,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    circleContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 120,
        width: 120,
        elevation: 16,
        shadowRadius: 30,
        borderRadius: 300,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    innerCircleContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 110,
        width: 110,
        elevation: 12,
        borderRadius: 300,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    patientInitials: {
        display: "flex",
        fontSize: 60,
        width: 90,
        height: 90,
        color: '#3c3838',
        textAlign: 'center',
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

export default PatientBadge;