import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function MyButton(props) {
    return (
        <TouchableOpacity style={props.button}>
          <Text style={props.textButton}>{ props.children }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
