import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BlueSkill(props) {
  return (
    <View>
      <Text style={styles.blueSkill}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blueSkill: {
    backgroundColor: "#269CD9",
    color: "#FFF",
    fontWeight: "bold",
    marginRight: 10,
    padding: 12.5,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 5
  },
});
