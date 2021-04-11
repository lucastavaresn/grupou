import { Avatar, Badge, Divider, Button } from "react-native-elements";

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";
import PercentageBar from "./PercentageBar";
import BlueSkill from "./BlueSkill";

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
            size="xlarge"
            height={90}
            width={90}
            rounded
          >
            <Badge
              badgeStyle={{ width: 20, height: 20, borderRadius: 10 }}
              status="success"
              containerStyle={{
                position: "absolute",
                bottom: -1,
                right: -1,
                width: 20,
                height: 20,
              }}
            />
          </Avatar>
        </View>
        <View style={styles.viewTitles}>
          <Title>Kelwin</Title>
          <Subtitle>
            Está no grupo de desenvolvimento de aplicações móveis
          </Subtitle>
        </View>
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.skill}>Hard Skill</Text>
      <View>
        {hardskill.map((item, index) => (
          <PercentageBar key={index} {...item} />
        ))}
      </View>
      <Text style={styles.skill}>Soft Skill</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {softskill.map((item, index) => (
          <BlueSkill key={index} {...item} />
        ))}
      </View>
      <View style={{alignItems: "center", justifyContent: "flex-end"}}>
        <TouchableOpacity
          style={{
            fontWeight: "bold",
            width: 150,
            flexDirection: "row",
            backgroundColor: "#A51966",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderRadius: 5,
            width: 200,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#FFF",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Fechar
          </Text>
        </TouchableOpacity>
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
    width: 360
    // backgroundColor: "#987",
  },
  viewAvatar: {
    marginRight: 15,
  },
  viewTitles: {
    width: 200,
  },
  divider: {
    backgroundColor: "#000",
    marginVertical: 30,
  },
  skill: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
});
