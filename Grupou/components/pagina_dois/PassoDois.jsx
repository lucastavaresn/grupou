import React from "react";
import { StyleSheet,ScrollView, View, TextInput, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import MyButton from "../pagina_cinco/MyButton";
export default function PassoDois() {
  return (
    <View style={{ flex: 1, width: 340,  }}>
      <ScrollView style={{flex: 1}}>
        <View style={{ justifyContent: "flex-end", paddingTop: 30 }}>
          <Button
            icon={{
              name: "times",
              type: "font-awesome-5",
              size: 20,
              color: "#999CAE",
            }}
            buttonStyle={{ backgroundColor: "none" }}
            containerStyle={{ alignSelf: "flex-end" }}
          />

          <View
            style={{
              backgroundColor: "#7AF",
              borderRadius: 200,
              height: 120,
              width: 120,
              justifyContent: "center",
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            <Icon name="user" type="font-awesome-5" color="#FFF" size={50} />
          </View>

          <MyButton button={[styles.button, {width: 200, alignSelf: "center"}]} textButton={styles.textButton}>
            Carregar sua foto
          </MyButton>
        </View>
        <View style={styles.forms}>
          <View>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput keyboardType="default" style={styles.input}></TextInput>
          </View>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={[styles.input, { fontSize: 20 }]}
            ></TextInput>
          </View>
          <View>
            <Text style={styles.label}>Confirme a Senha</Text>
            <TextInput
              secureTextEntry={true}
              style={[styles.input, { fontSize: 20 }]}
            ></TextInput>
          </View>
        </View>
        <View style={styles.containerButton}>
          <View>
            
          </View>
          <MyButton
            button={[styles.button, { marginRight: 5 }]}
            textButton={styles.textButton}
          >
            Voltar
          </MyButton>
          <MyButton
            button={[
              styles.button,
              { marginLeft: 5, backgroundColor: "#A51966" },
            ]}
            textButton={[styles.textButton, { color: "#FFF" }]}
          >
            Concluir
          </MyButton>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    fontWeight: "bold",
    borderColor: "#A519669F",
    borderWidth: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
    width: 150,
  },
  textButton: {
    textAlign: "center",
    color: "#A51966",
    fontSize: 12,
    fontWeight: "bold",
  },
  forms: {
    marginTop: 30,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#999CAE",
  },
  input: {
    borderColor: "#999CAE7F",
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    color: "#999CAE",
  },
  containerButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 10
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
    height: 60
  },
  textButton: {
    textAlign: "center",
    color: "#A51966",
    fontSize: 14,
    fontWeight: "bold",
  },
});
