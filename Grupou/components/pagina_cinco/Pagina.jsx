import { Avatar, Badge, Divider } from "react-native-elements";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";
import PercentageBar from "./PercentageBar";
import BlueSkill from "./BlueSkill";
import MyButton from "./MyButton";

export default function Pagina() {
  const hardskill = [
    {
      name: "HTML",
      percentage: 92,
    },
    {
      name: "Prototipação",
      percentage: 88,
    },
    {
      name: "HTML",
      percentage: 92,
    },
    {
      name: "Prototipação",
      percentage: 88,
    },
  ];

  const softskill = [
    { name: "Liderança" },
    { name: "Empatia" },
    { name: "Gestão de conflitos" },
    { name: "Comunicação" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewAvatar}>
          <Avatar
            source={{
              uri:
                "https://media-exp1.licdn.com/dms/image/C4D03AQFaaD3sxM3Vqg/profile-displayphoto-shrink_200_200/0/1530308861887?e=1623283200&v=beta&t=1Kgq3Zv7Z22n58QVA00Pl6PLrb6_fJzvN_BMWBwrbIY",
            }}
            size={125}
            rounded
          >
            <Badge
              badgeStyle={{ height: 20, width: 20, borderRadius: 50 }}
              status="success"
              containerStyle={{
                position: "absolute",
                bottom: 5,
                right: 5,
              }}
              size={100}
            />
          </Avatar>
        </View>
        <View style={styles.viewTitles}>
          <Title styles={{textAlign: "auto"}}>Kelwin</Title>
          <Subtitle>
            Está no grupo de desenvolvimento de aplicações móveis
          </Subtitle>
        </View>
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.skill}>Hard Skill</Text>
      <View style={styles.viewHardSkill}>
        {hardskill.map((item, index) => (
          <PercentageBar key={index} {...item} />
        ))}
      </View>
      <Text style={styles.skill}>Soft Skill</Text>
      <View style={styles.viewSoftSkill}>
        {softskill.map((item, index) => (
          <BlueSkill key={index} {...item} />
        ))}
      </View>
      <View style={styles.viewButtonLilas}>
        <MyButton button={styles.buttonLilas} textButton={styles.buttonLilasText}>Fechar</MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    // backgroundColor: "#987",
  },
  viewAvatar: {
    marginRight: 15,
  },
  viewTitles: {
    width: 200,
  },
  divider: {
    backgroundColor: "#999CAE50",
    marginVertical: 30,
    height: 1,
  },
  skill: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  viewHardSkill: {
    marginBottom: 20,
  },
  viewSoftSkill: { flexDirection: "row", flexWrap: "wrap" },
  viewButtonLilas: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 5,
  },
  buttonLilas: {
    fontWeight: "bold",
    width: 150,
    // flexDirection: "row",
    backgroundColor: "#A51966",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 5,
    width: 240,
  },
  buttonLilasText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
