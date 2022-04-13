import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import back from '../../assets/ic_back.png'

interface IProps {
    onPress: () => void;
}

/**
 * @param {{ 
 * onPress: () => void;
 * }} props 
 * @returns
 */

/**
 * This is a BackButton component that can be repurposed in different 
 * areas of the application. The button receives a void function upon
 * onPress()
 */
export const BackButton = (props: IProps) => {
    const { onPress } = props;
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <Image style={styles.backIcon} source={back} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 15,
    },

    backIcon: {
        flexGrow: 1,
        height: 35,
        width: 35,
        tintColor: 'white',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0
    },
});

export default BackButton;