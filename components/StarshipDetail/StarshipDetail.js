import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Context from '../../Context';

export default function StarshipDetail({ route }) {
    let ship = route.params.ship;
    
    return (
        <View>
            <Text>This is {ship.name}'s meep</Text>
        </View>
    );
};