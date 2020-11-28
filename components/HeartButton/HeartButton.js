import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function HeartButton() {
    const { favoritesToggle, toggleFavorites } = useContext(Context);
    // const [hover, setHover] = useState(false);
    // let styles = getStyles(orientation);
    
    return (
        <View>
            {!favoritesToggle ? (
                <Button
                        title="outlined heart"
                        color="#fff"
                        onPress={() => {
                            toggleFavorites();
                        }}
                        />
            ) : (
                <Button
                        title="full heart"
                        color="#fff"
                        onPress={() => {
                            toggleFavorites();
                        }}
                        />
            )}
        </View>
    );
};