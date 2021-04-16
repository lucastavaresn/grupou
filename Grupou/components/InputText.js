import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export function InputText({label, placeholder, secure=false}) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{label}</Text>
            <TextInput style={styles.textInput} placeholder={placeholder} secureTextEntry={secure} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    textInput: {
      // width: "96%",
      marginHorizontal: 20,
      padding: 10,
      borderColor: "#999CAE",
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10

    },
    textLabel: {
      marginHorizontal: 20,
      color: "#999CAE",
      marginBottom: 10
    },
    
  });
  