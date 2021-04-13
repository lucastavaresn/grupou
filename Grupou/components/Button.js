import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function ButtonCustom({text, filled=false, press}) {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={filled ? styles.btnFilled : styles.btnEmpty } onPress={press}>
                <Text style={filled ? styles.textBtn : styles.textmagent}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    btnFilled: {
      marginHorizontal: 10,
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 40,
      paddingVertical: 13,
      borderRadius:5,
      backgroundColor: '#A51966',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnEmpty:{
      marginHorizontal: 10,
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 40,
      paddingVertical: 13,
      borderRadius:5,
      borderColor: "#A51966",
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textmagent: {
        color: "#A51966",
        fontWeight: 'bold'
    }
  });
  