import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PassoDois from './components/pagina_dois/PassoDois';
import PassoUm from './components/pagina_dois/PassoUm';

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PassoDois></PassoDois>
      {/* <PassoUm></PassoUm> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
});
