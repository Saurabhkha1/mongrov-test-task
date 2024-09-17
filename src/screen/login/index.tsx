import React, { useEffect, useState } from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    withDelay,
} from 'react-native-reanimated';
import { Formik } from 'formik';

import images from '../../assets/images';
import styles from './styles';
import { FontSize } from '../../constants/fonts';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/Input';
import PressableText from '../../components/PressableText';
import { Strings } from '../../constants/text';
import { LoginValidation } from '../../validation/login';

const { width, height } = Dimensions.get('window');

export default function Login() {
    const [Loading, setLoading] = useState<boolean>(false)

    const imageWidth = 100;
    const imageHeight = 100;

    const posX = useSharedValue(0);
    const posY = useSharedValue(0);
    const containerOpacity = useSharedValue(0);
    const textOpacity = useSharedValue(0);
    const textTranslateY = useSharedValue(-30);

    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: posX.value },
                { translateY: posY.value },
            ],
        };
    });

    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            opacity: containerOpacity.value,
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: textOpacity.value,
            transform: [{ translateY: textTranslateY.value }],
        };
    });

    useEffect(() => {
        posX.value = withTiming((width / 2 - imageWidth / 2) * -1.1, {
            duration: 1200,
            easing: Easing.out(Easing.ease),
        });
        posY.value = withTiming((height / 2 - imageHeight / 2) * -1, {
            duration: 1200,
            easing: Easing.out(Easing.ease),
        });

        containerOpacity.value = withTiming(1, {
            duration: 1200,
            easing: Easing.out(Easing.ease),
        });

        textOpacity.value = withDelay(1000, withTiming(1, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
        }));
        textTranslateY.value = withDelay(1000, withTiming(-10, {
            duration: 1200,
            easing: Easing.out(Easing.ease),
        }));
    }, []);

    const onLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }

    const initialValues = { password: '', email: '' }
    return (
        <Animated.View style={[styles.container, animatedContainerStyle]} pointerEvents={Loading ? 'none' : 'auto'}>
            <Animated.Image
                source={images.splash}
                style={[styles.image, animatedImageStyle]}
                resizeMode="contain"
            />
            <Animated.View style={[styles.textContainer, animatedTextStyle]}>
                <Text style={[styles.text, { fontWeight: '600', fontSize: FontSize.S_28 }]}>{Strings.WelcomeBack}</Text>
                <Text style={styles.text}>{Strings.LogInToContinue}</Text>
            </Animated.View>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidation}
                onSubmit={(values,) => {
                    onLogin()
                    console.log(values);
                }}>
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <>
                        <InputComponent
                            placeholder={Strings.Email}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            error={touched.email && errors.email}
                            keyboardType='email-address'
                        />
                        <InputComponent
                            placeholder={Strings.Password}
                            secureTextEntry
                            value={values.password}
                            onChangeText={handleChange('password')}
                            error={touched.password && errors.password}
                            keyboardType='default'
                        />
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotText}>{Strings.ForgotPassword}</Text>
                        </TouchableOpacity>
                        <View style={styles.footer}>
                            <ButtonComponent
                                title={Strings.Login}
                                onPress={() => handleSubmit()}
                                isLoading={Loading}
                            />
                            <Text style={styles.newUser}>{Strings.NewUser} <PressableText title={Strings.SignUp} style={styles.signUp} /></Text>
                        </View>
                    </>
                )}
            </Formik>

        </Animated.View>
    );
}