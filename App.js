import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { useCallback } from "react";
import Start from "./Components/Start/Start";
import * as Device from 'expo-device';

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFProText-Light": require("./assets/fonts/.otf/SF-Pro-Text-Light.otf"),
    "SFProText-Medium": require("./assets/fonts/.otf/SF-Pro-Text-Medium.otf"),
    "SFProText-Regular": require("./assets/fonts/.otf/SF-Pro-Text-Regular.otf"),
    "SFProText-Semibold": require("./assets/fonts/.otf/SF-Pro-Text-Semibold.otf")
    // Aggiungi altre varianti 
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView} >
      <Start />
      <Text>
        {Device.manufacturer}: {Device.modelName}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707', 
    width: '100%',
  },
});
