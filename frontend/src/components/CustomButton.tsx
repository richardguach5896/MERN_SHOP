import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface CustomButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color = '#00ADB5' }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        margin: 10,
        padding: 7,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#EEEEEE',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default CustomButton;
