import React from 'react';
import { Text, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import styles from './styles';
import Loader from '../Loader';

interface ButtonComponentProps {
    title: string;
    titleStyle?: TextStyle;
    style?: ViewStyle;
    onPress: () => void;
    isLoading?: boolean
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ title = "Login", titleStyle, style, onPress, isLoading }) => {
    return (
        <TouchableOpacity style={[{backgroundColor: isLoading ? Colors.Grey : Colors.Green}, styles.button, style]} onPress={onPress} disabled={isLoading}>
            {isLoading ?
                <Loader /> :
                <Text style={[styles.title, titleStyle]}>{title}</Text>
            }
        </TouchableOpacity>
    );
};

export default ButtonComponent;
