import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import Pergunta from './pages/Pergunta/Perguntas';
import PassoDois from './components/pagina_dois/PassoDois';
import PassoUm from './components/pagina_dois/PassoUm';
import Dashboard from './pages/Dashboard/Dashboard'

export default function App() {
//   PR #pergunta
// 		<ScrollView>
// 			<Pergunta />
// 		</ScrollView>
// 	);
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <PassoDois></PassoDois> */}
      {/* <PassoUm></PassoUm> */}
      <Dashboard/>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
});



