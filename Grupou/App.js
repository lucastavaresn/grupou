import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, StatusBar } from "react-native";
import Pergunta from "./pages/Pergunta/Perguntas";
import PassoDois from "./components/pagina_dois/PassoDois";
import PassoUm from "./components/pagina_dois/PassoUm";
import Dashboard from "./pages/Dashboard/Dashboard";
import Pagina from "../Grupou/components/pagina_cinco/Pagina"
import Login from "./pages/Login/Login";

export default function App() {
    // PR #pergunta
  		// <ScrollView>
   		// 	<Pergunta />
   		// </ScrollView>
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <PassoDois></PassoDois> */}
      {/* <PassoUm></PassoUm> */}
      {/* <Pergunta/> */}
      {/* <Dashboard/> */}
      <Login></Login>
      {/* <Pagina></Pagina> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
