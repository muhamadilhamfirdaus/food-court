import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { enableScreens } from 'react-native-screens';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import AppNavigation from './navigation/Navigation';

enableScreens();
const fetchFonts = () => {
  return Font.loadAsync({
    'openSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/fonts/OpenSans-Semibold.ttf')
  });
}

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  if (!assetsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => { setAssetsLoaded(true) }} onError={(message) => console.log(message)} />
  }
  
  return <AppNavigation />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
