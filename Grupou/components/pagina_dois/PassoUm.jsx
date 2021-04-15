import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image, Button } from "react-native-elements";
import logo from "../../assets/logo.png";
import MyButton from "../pagina_cinco/MyButton";
import Title from "../pagina_cinco/Title";

export default function PassoUm() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={{ width: 200, height: 100, resizeMode: "contain" }}
        />
        <Button
          icon={{
            name: "times",
            type: "font-awesome-5",
            size: 20,
            color: "#999CAE",
          }}
          buttonStyle={{ backgroundColor: "none" }}
          containerStyle={styles.times}
        />
      </View>
      <View style={styles.main}>
        <Title styles={styles.title}>Você é aluno ou professor?</Title>
        <View style={styles.containerButton}>
          <MyButton button={styles.button} textButton={styles.textButton}>
            Aluno
          </MyButton>
          <MyButton button={styles.button} textButton={styles.textButton}>
            Professor
          </MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 340, flex: 1 },
  header: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 340,
    height: 100,
  },
  times: {
    alignSelf: "center",
    position: "absolute",
    right: 0,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    width: 170,
    paddingBottom: 20,
  },
  containerButton: {
    flexDirection: "row",
  },
  button: {
    fontWeight: "bold",
    borderColor: "#A519669F",
    borderWidth: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
  textButton: {
    textAlign: "center",
    color: "#A51966",
    fontSize: 14,
    fontWeight: "bold",
  },
});
