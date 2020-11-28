import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Context from '../../Context';

export default function HeartButton() {
    const { favoritesToggle, toggleFavorites } = useContext(Context);
    // const [hover, setHover] = useState(false);
    // let styles = getStyles(orientation);
    
    return (
        <View>
            {!favoritesToggle ? (
                <Icon
                    name="favorite-border"
                    color='#fff'
                    onPress={() => {
                        toggleFavorites();
                    }}
                />
            ) : (
                <Icon
                    name="favorite"
                    color="#fff"
                    onPress={() => {
                        toggleFavorites();
                    }}
                />
            )}
        </View>
    );
};