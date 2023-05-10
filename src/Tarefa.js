import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({ data, deleteItem }){
    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name="trash" size={20} color="#FF3F4B" />
            </TouchableOpacity>
            
            <Text style={styles.text}>{data.item}</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#22272e',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
    },
    button:{
        marginRight: 8,
    },
    text:{
        color: '#3fffa3',
        fontWeight: 'bold',
        fontSize: 15
    }
})