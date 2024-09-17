import React from 'react';
import { TextStyle, TextInput, StyleProp, Text, KeyboardTypeOptions } from 'react-native';
import styles from './styles';

interface InputComponentProps {
    placeholder: string;
    inputStyle?: StyleProp<TextStyle>;
    secureTextEntry?: boolean;
    value?: string;
    onChangeText: (val: string) => void;
    error?: string | false | undefined;
    keyboardType?: KeyboardTypeOptions
}

const InputComponent: React.FC<InputComponentProps> = ({
    placeholder = "Enter here",
    inputStyle,
    secureTextEntry,
    value,
    onChangeText,
    error,
    keyboardType,
    ...rest
}) => {
    return (
        <>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                {...rest}
            />
            {error ?
                <Text style={styles.error}>*{error}</Text>
                : null
            }
        </>
    );
};

export default InputComponent;
