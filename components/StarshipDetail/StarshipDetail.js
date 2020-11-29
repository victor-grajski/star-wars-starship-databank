import React, { useContext } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image } from 'react-native';
import Context from '../../Context';
// import films from '../../data/films';

import DetailHeartButton from '../DetailHeartButton/DetailHeartButton';
import Pilots from './Pilots/Pilots';
import Stats from './Stats/Stats';
import Films from './Films/Films';

export default function StarshipDetail({ route, navigation }) {
    const { orientation } = useContext(Context);
    let ship = route.params.ship;
    let { name, manufacturer, images } = ship;
    let image = Image.resolveAssetSource(images[0]);
    let styles = getStyles(orientation);

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <DetailHeartButton ship={ship} />
        ),
      });
    }, [navigation]);
    
    return (
        <View style={styles.main}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            <Image source={image} style={styles.image}/> 
            <Text style={styles.title}>{ship.name}</Text>
            <Text style={styles.subtitle}>{ship.manufacturer}</Text>
            <Text style={styles.subtitle}>{ship.starship_class}</Text>
            <Text style={styles.description}>{ship.description}</Text>

            <Stats ship={ship} />
            <Pilots ship={ship} />
            <Films ship={ship} />
          </ScrollView>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        main: {
          flex: 1
        },
        container: {
          backgroundColor: '#222',
          height: '100%',
          width: '100%'
        },
        contentContainer: {
          alignItems: "center",
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: "center",

        },
        image: {
          width: '100%',
          height: 300
        },
        title: {
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 36,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 14,
          fontWeight: '500',
          color: '#fff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
        },
        description: {
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 18,
          color: '#fff',
          alignSelf: "flex-start",
          fontFamily: "Helvetica Neue",
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%'
        },
        image: {
          width: '100%',
          height: 300
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
  