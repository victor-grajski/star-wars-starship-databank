import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Context from '../../../Context';

export default function Films({ ship }) {
    const { orientation } = useContext(Context);
    let { pilots, images } = ship;
    let image = Image.resolveAssetSource(images[0]);
    let styles = getStyles(orientation);
    
    return (
        <View
          style={styles.container}
        >
            <Text style={styles.title}>Films</Text>
            <View style={styles.pilots}>
              <View style={styles.card}>
                <Image source={image} style={styles.image}/> 
                <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>Film Name</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>Film Year</Text>
              </View>
              
              <View style={styles.card}>
                <Image source={image} style={styles.image}/> 
                <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>Film Name</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>Film Year</Text>
              </View>
            </View>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%',
          paddingTop: 30,
        },
        title: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        card: {
          marginTop: 20,
          backgroundColor: '#333333',
          alignItems: "center",
          margin: 10,
          borderRadius: 10,
          height: 250,
      
          flex: 1,
          minWidth: 200,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        cardTitle: {
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
    } else {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        title: {
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        statsContainer: {
            paddingTop: 20,
            paddingLeft: 20,
            flex: 1,
            flexDirection: "row",
            overflow: "scroll",
        },
        statsItem: {
            flex: 1,
            marginRight: 50,
            alignItems: "center",
        },
        statsItemTitle: {
            fontSize: 18,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
        statsItemNumber: {
          paddingTop: 10,
          fontSize: 48,
          color: '#fff',

          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        unit: {
            paddingTop: 10,
            fontSize: 12,
            color: '#fff',
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
        },
      });
    }
  } 
  