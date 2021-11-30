import React from 'react';
import {View, Text, StyleSheet, useState} from 'react-native';


function Usuario(props){
    return (
        <View>
            <Text>Nome: {props.nome}</Text>
            <Text>Cargo: {props.cargo}</Text>
        </View>
    );
}