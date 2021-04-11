import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title(props) {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({ title: { fontWeight: "bold", fontSize: 18 } });
