import React, { useContext } from 'react';
import { View, ScrollView, Text, Button, StyleSheet, Image } from 'react-native';
import Context from '../../Context';

import DetailHeartButton from '../DetailHeartButton/DetailHeartButton';
import Pilots from './Pilots/Pilots';
import Stats from './Stats/Stats';
import Films from './Films/Films';

// TODO: cargo capacity
export default function StarshipDetail({ route, navigation }) {
    const { orientation } = useContext(Context);
    let ship = route.params.ship;
    let { images, pilots } = ship;
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
          {orientation === "PORTRAIT" ? (
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}
            >
              <Image source={image} style={styles.image}/> 
              <Text style={styles.title}>{ship.name}</Text>
              <Text style={styles.subtitle}>{ship.manufacturer}</Text>
              <Text style={styles.subtitle}>{ship.starship_class}</Text>

              {ship.description ? (
                <Text style={styles.description}>{ship.description}</Text>
              ) : (
                <></>
              )}
              

              <Stats ship={ship} />

              {pilots.length >= 1 ? (
                <Pilots ship={ship} />
              ) : (
                <></>
              )}
              
              <Films ship={ship} />
            </ScrollView>
          ) : (
            <View style={styles.container}>
              <View style={styles.containerLeft}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.description}>{ship.description}</Text>
              </View>
              <ScrollView
                style={styles.containerRight}
                contentContainerStyle={styles.contentContainer}
              >
                <Text style={styles.title}>{ship.name}</Text>
                <Text style={styles.subtitle}>{ship.manufacturer}</Text>
                <Text style={styles.subtitle}>{ship.starship_class}</Text> 

                <Stats ship={ship} />
                
                {pilots.length >= 1 ? (
                  <Pilots ship={ship} />
                ) : (
                  <></>
                )}

                <Films ship={ship} />
              </ScrollView>
            </View>
          )}
          
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
        main: {
          flex: 1
        },
        container: {
          backgroundColor: '#222',
          height: '100%',
          width: '100%',
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 100,
        },
        containerLeft: {
          flex: 1,
          alignItems: "center",
        },
        containerRight: {
          flex: 1,
        },
        contentContainer: {
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: "center",
          justifyContent: "center",
        },
        image: {
          width: 500,
          height: 400,
          borderRadius: 10,
        },
        title: {
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
          fontSize: 18,
          color: '#fff',
          fontFamily: "Helvetica Neue",
          width: 500,
        },
      });
    }
  } 
  