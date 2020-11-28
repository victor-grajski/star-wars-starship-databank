import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function StarshipDetail() {
    const { orientation, filterResults } = useContext(Context);
    const [hover, setHover] = useState(false);
    let styles = getStyles(orientation);
    
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.mainTitle} numberOfLines={1} ellipsizeMode='tail'>All Films</Text>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(5) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode I</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>The Phantom Menace</Text>
            </TouchableOpacity>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          height: "100%",
          paddingTop: "20%",
          paddingLeft: 50,
        },
        mainTitle: {
            paddingTop: 50,
            paddingLeft: 10,
            fontSize: 24,
            fontWeight: "500",
            color: '#fff',
            alignSelf: "flex-start",
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
          },
        title: {
          paddingTop: 50,
          paddingLeft: 10,
          fontSize: 24,
          fontWeight: "500",
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          fontWeight: "500",
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",

        },
      });
    } else {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          alignItems: "center",
          marginBottom: 55,
          borderRadius: 10,
      
          flex: 1,
          minWidth: 335,
          minHeight: 250,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        title: {
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: 18,
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 40,
          width: 315
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
          width: 315
        },
      });
    }
  } 
  