import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Context from '../../Context';

export default function HeartButton() {
    const { drawerActive, favoritesToggle, toggleFavorites } = useContext(Context);
    // const [hover, setHover] = useState(false);
    // let styles = getStyles(orientation);

    const renderContent = () => {
        if (!favoritesToggle) {
            if (!drawerActive) {
                return <Icon
                    name="favorite-border"
                    color='#fff'
                    onPress={() => {
                        toggleFavorites();
                    }}
                />
            } else {
                return <></>
            }
        } else {
            if (!drawerActive) {
                return <Icon
                    name="favorite"
                    color='#fff'
                    onPress={() => {
                        toggleFavorites();
                    }}
                />
            } else {
                return <></>
            }
        }
    }
    
    return (
        <View style={{ paddingRight: 20 }}>
            {renderContent()}
        </View>
    );
};