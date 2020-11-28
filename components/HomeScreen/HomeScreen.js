import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Context from '../../Context';
import StarshipListItem from '../StarshipList/StarshipListItem';

export default function HomeScreen() {
  const { orientation, starships, title } = useContext(Context);
  let styles = getStyles(orientation);

  return (
    <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.film} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      
      { starships.map((ship) => <StarshipListItem key={ship.name} ship={ship} /> )}
    </ScrollView>
  )
};

const getStyles = (orientation) => {
  if (orientation === 'PORTRAIT') {
    return StyleSheet.create({
      container: {
        backgroundColor: '#222',
      },
      contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: "center"
      },
      film: {
        paddingTop: 50,
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: "500",
        color: '#fff',
        alignSelf: "flex-start",
        textTransform: "uppercase",
        fontFamily: "Helvetica Neue",
      },
    });
  } else {
    return StyleSheet.create({
        container: {
            backgroundColor: '#222',
        },
        contentContainer: {
            flexGrow: 1,
            justifyContent: 'space-around',
            alignItems: "center",
            alignContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap"
        },
    });
  }
} 
