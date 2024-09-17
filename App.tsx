import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import SplashScreen from './src/screen/splashScreen';
import LoginScreen from './src/screen/login';
import { Colors } from './src/constants/colors';


function App(): React.JSX.Element {
  const [isSplashVisible, setSplashVisible] = useState(true);

  return (
    <SafeAreaView style={{flex:1}} >
       <View style={styles.container}>
      {isSplashVisible ? (
        <SplashScreen onAnimationComplete={() => setSplashVisible(false)} />
      ) : (
        <LoginScreen />
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
});

export default App;
