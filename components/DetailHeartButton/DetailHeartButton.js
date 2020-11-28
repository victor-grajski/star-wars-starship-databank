import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function DetailHeartButton({ ship }) {
    const { favorites, addFavorite, removeFavorite } = useContext(Context);
    // const [hover, setHover] = useState(false);
    // let styles = getStyles(orientation);
    
    return (
        <View>
            {!favorites.includes(ship) ? (
                <Button
                    title="outlined heart"
                    color="#fff"
                    onPress={() => {
                        addFavorite(ship);
                    }}
                />
            ) : (
                <Button
                    title="full heart"
                    color="#fff"
                    onPress={() => {
                        removeFavorite(ship);
                    }}
                />
            )}
        </View>
    );
};