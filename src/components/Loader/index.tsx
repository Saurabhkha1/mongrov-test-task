import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/colors';

interface LoaderProps {
    size?: number | "small" | "large";
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size="small", color=Colors.White }) => {
    return (
        <ActivityIndicator size={size} color={color} />
    );
};

export default Loader;
