import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, runOnJS } from 'react-native-reanimated';

import styles from "./styles";
import images from "../../assets/images";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {

  const greenHeight = useSharedValue<number>(0);
  const imageSize = useSharedValue(500);
  const imageRotation = useSharedValue(270);
  const backgroundSize = useSharedValue(0);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    greenHeight.value = withTiming(50, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }, (isFinished) => {
      if (isFinished) {
        runOnJS(setShowImage)(true);
      }
    });
  }, [greenHeight]);

  useEffect(() => {
    if (showImage) {
      imageSize.value = withTiming(100, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });

      imageRotation.value = withTiming(360, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });

      backgroundSize.value = withTiming(1000, {
        duration: 700,
        easing: Easing.inOut(Easing.ease),
      }, () => {
        runOnJS(onAnimationComplete)()
      })
    }
  }, [showImage, imageSize, imageRotation, backgroundSize]);

  const topGreenStyle = useAnimatedStyle(() => {
    return {
      height: `${greenHeight.value}%`,
    };
  });

  const bottomGreenStyle = useAnimatedStyle(() => {
    return {
      height: `${greenHeight.value}%`,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: imageSize.value,
      height: imageSize.value,
      transform: [
        { rotate: `${imageRotation.value}deg` }
      ],
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      width: backgroundSize.value,
      height: backgroundSize.value,
      borderRadius: backgroundSize.value / 2,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.green, styles.topGreen, topGreenStyle]} />
      <View style={styles.whiteScreen} />
      <Animated.View style={[styles.green, styles.bottomGreen, bottomGreenStyle]} />
      {showImage && (
        <Animated.View style={[styles.backgroundCircle, backgroundStyle]} />
      )}
      {showImage && (
        <Animated.Image
          source={images.splash}
          style={[styles.image, imageStyle]}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default SplashScreen;