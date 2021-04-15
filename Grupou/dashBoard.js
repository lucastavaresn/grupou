import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { } from './styles'

const produtos = 
[
    {
        id: '01',
        desc: ['mouse', ' 10.00']
    },
    {
        id: '02',
        desc: ['teclado', ' 20.00']
    },
    {
        id: '03',
        desc: ['monitor', ' 30.00']
    },
    {
        id: '04',
        desc: ['teclado', ' 20.00']
    },
    {
        id: '05',
        desc: ['monitor', ' 30.00']
    },
]

export default function dashBoard()
{
    return(
        <View>
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                
                renderItem={({ item }) =>
                <View style={estilos.item}> 
                    <Text style={estilos.prod}>
                        Desc: { item.desc }
                    </Text>
                </View>}
            />
        </View>
    )
}

const estilos = StyleSheet.create
({
    item:
    {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 40,
        marginVertical: 8,
        marginVertical: 16,
    },
    prod:
    {
        fontSize: 30,
        color: '#999CAE'
    }

})