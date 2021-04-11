import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Subtitle(props) {
    return (
        <View>
            <Text style={styles.subtitle}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({ subtitle: {
    color: "#999CAE",
    fontSize: 13
}})
