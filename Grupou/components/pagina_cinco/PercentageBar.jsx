import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";

export default function PercentageBar(props) {
  return (
    <View style={styles.hardSkills}>
      <Text>{props.name}</Text>
      <View style={styles.percentageBar}>
        <Divider
          style={{
            backgroundColor: "#A51966",
            width: 310 * (props.percentage / 100),
            marginRight: 20,
            padding: 5,
            borderRadius: 10,
          }}
        ></Divider>
        <Text style={{color: "#A51966", fontWeight: "bold"}}>{props.percentage / 10}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hardSkills: {},
  percentageBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
