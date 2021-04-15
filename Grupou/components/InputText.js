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
        flex: 1,
        flexDirection: "column"
    },
    textInput: {
      width: "96%",
      padding: 10,
      borderColor: "#999CAE",
      borderWidth: 1,
      borderRadius: 5,

    },
    textLabel: {
      color: "#999CAE",
      marginBottom: 10
    },
    
  });
  