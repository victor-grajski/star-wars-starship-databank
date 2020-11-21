import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Dimensions, Text, View } from 'react-native';
import Context from './Context';
import { useOrientation } from './utils/useOrientation';

import starships from './data/starships';
import pilots from './data/pilots';
import films from './data/films';

import StarshipListItem from './components/StarshipList/StarshipListItem';

export default function App() {
  const [state, setState] = useState({
    starships: starships,
    pilots: pilots,
    films: films,
    favorites: [],
  });

  const orientation = useOrientation();

  return (
    <Context.Provider
      value={{
        ...state,
        orientation: orientation,
      }}
    >
      {orientation === 'PORTRAIT' ? (
        <ScrollView 
          style={styles.container}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: "flex-start"
          }}
        >
          { starships.map((ship) => <StarshipListItem key={ship.name} ship={ship} /> )}
        </ScrollView>
      ) : (
        <ScrollView 
          style={styles.container}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: "flex-start"
          }}
        >
          { starships.map((ship) => <StarshipListItem key={ship.name} ship={ship} /> )}
        </ScrollView>
      )}
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
