import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Context from '../../Context';
import StarshipListItem from '../StarshipList/StarshipListItem';

export default function HomeScreen() {
  const { orientation, starships, title } = useContext(Context);
  let styles = getStyles(orientation);

  return (
    <View style={styles.main}>
      <Text style={styles.film} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
      >
        
        { starships.map((ship) => <StarshipListItem key={ship.name} ship={ship} /> )}
      </ScrollView>
    </View>
  )
};

const getStyles = (orientation) => {
  if (orientation === 'PORTRAIT') {
    return StyleSheet.create({
      main: {
        flex: 1,
      },
      container: {
        backgroundColor: '#222',
      },
      contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: "center"
      },
      film: {
        paddingLeft: 20,
        paddingTop: 50,
        paddingBottom: 20,
        fontSize: 24,
        fontWeight: "500",
        color: '#fff',
        textTransform: "uppercase",
        fontFamily: "Helvetica Neue",
        backgroundColor: '#222',
      },
    });
  } else {
    return StyleSheet.create({
        main: {
          flex: 1
        },
        container: {
            backgroundColor: '#222',
        },
        contentContainer: {
            flexGrow: 1,
            justifyContent: 'space-around',
            alignItems: "center",
            alignContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
        },
        film: {
          paddingLeft: 20,
          paddingTop: 50,
          paddingBottom: 20,
          fontSize: 24,
          fontWeight: "500",
          color: '#fff',
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          backgroundColor: '#222',
        },
    });
  }
} 
