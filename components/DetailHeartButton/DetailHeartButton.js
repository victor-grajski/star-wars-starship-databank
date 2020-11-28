import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Context from '../../Context';

export default function DetailHeartButton({ ship }) {
    const { favorites, addFavorite, removeFavorite } = useContext(Context);
    // const [hover, setHover] = useState(false);
    // let styles = getStyles(orientation);
    
    return (
        <View>
            {!favorites.includes(ship) ? (
                <Icon
                    name="favorite-border"
                    color='#fff'
                    style={{ paddingRight: 20 }}
                    onPress={() => {
                        addFavorite(ship);
                    }}
                />
            ) : (
                <Icon
                    name="favorite"
                    color="#fff"
                    style={{ paddingRight: 20 }}
                    onPress={() => {
                        removeFavorite(ship);
                    }}
                />
            )}
        </View>
    );
};