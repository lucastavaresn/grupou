import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { InputText } from "../../components/InputText";
import { ButtonCustom } from "../../components/Button";

export default function Login() {
  function pressButton() {
    console.log("pressionado");
  }
  const [tab, setTab] = useState({
    selected: "aluno",
  });

  const changeTab = (role) => {
    setTab({ selected: role });
  };
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/login_backgroud.png")}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />

        <View style={styles.textBox}>
          <Text style={styles.text}>Problemas para formar</Text>
          <Text style={styles.text}>um grupo de trabalho?</Text>
          <Text style={styles.text}>
            O <Text style={styles.textBold}>Grupou!</Text> resolve!
          </Text>
        </View>

        <View style={styles.formBox}>
          <View style={styles.tab}>
            <TouchableOpacity
              style={styles.tabItems}
              onPress={() => changeTab("aluno")}
            >
              <Text
                style={
                  tab.selected == "aluno" ? styles.tabTextHover : styles.tabText
                }
              >
                Aluno
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabItems}
              onPress={() => changeTab("professor")}
            >
              <Text
                style={
                  tab.selected == "professor"
                    ? styles.tabTextHover
                    : styles.tabText
                }
              >
                Professor
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerForm}>
            <InputText
              placeholder="bernardo.oliveira@gmail.com"
              label="E-mail"
            />
            <InputText placeholder="senha" label="Senha" secure={true} />
            <View style={styles.container}>
              <TouchableOpacity>
                <Text style={styles.link}>Esqueci minha Senha</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerRow}>
              <ButtonCustom text="Cadastre-se" press={pressButton} />
              <ButtonCustom text="Entrar" filled={true} press={pressButton} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    flex: 1,
    width: "60%",
    marginTop: 15,
    resizeMode: "contain",
    alignSelf: "center",
  },
  textBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
  },
  text: {
    color: "#ffffff",
    fontSize: 18,
  },
  textBold: {
    fontWeight: "bold",
  },
  formBox: {
    flex: 2,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    margin: 10,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  tabItems: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  tabText: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: "#999CAE",
  },
  tabTextHover: {
    width: "85%",
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color: "#2A314C",
    borderBottomColor: "#A51966",
    borderBottomWidth: 4,
  },
  containerForm: {
    flex: 4,
    flexDirection: "column",
    alignContent: "center",
  },
  link: {
    color: "#A51966",
    fontSize: 12,
    alignSelf: "flex-end",
    marginRight: 25,
    marginTop: 5,
  },
});
