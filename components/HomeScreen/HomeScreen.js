import React, { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Context from '../../Context';
import StarshipListItem from '../StarshipList/StarshipListItem';

import starships from '../../data/starships';

export default function HomeScreen() {
  const { orientation } = useContext(Context);
  let styles = getStyles(orientation);

  return (
    <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
    >
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
