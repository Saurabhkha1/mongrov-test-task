import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/colors';
import styles from './styles';

interface PressableTextProps {
    title: string;
    titleStyle?: TextStyle;
    style?: ViewStyle;
    onPress?: () => void
}

const PressableText: React.FC<PressableTextProps> = ({ title="Sign Up", titleStyle, style, onPress }) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={[{color: Colors.Green, fontWeight: '500'}, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default PressableText;
