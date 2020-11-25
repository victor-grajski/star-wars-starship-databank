import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet, Dimensions, Text, View } from 'react-native';
import Context from './Context';
import { useOrientation } from './utils/useOrientation';

import starships from './data/starships';
import pilots from './data/pilots';
import films from './data/films';

import StarshipListItem from './components/StarshipList/StarshipListItem';
import HomeScreen from './components/HomeScreen/HomeScreen';
import StarshipDetail from './components/StarshipDetail/StarshipDetail';

// TODO: android helvetica
export default function App() {
  const [state, setState] = useState({
    starships: starships,
    pilots: pilots,
    films: films,
    favorites: [],
  });

  const orientation = useOrientation();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Context.Provider
        value={{
          ...state,
          orientation: orientation,
        }}
      >
        {orientation === 'PORTRAIT' ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen name="Detail" component={StarshipDetail} />
          </Stack.Navigator>
        ) : (
          <ScrollView 
            style={styles.container}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-around',
              alignItems: "center",
              alignContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            { starships.map((ship) => <StarshipListItem key={ship.name} ship={ship} /> )}
          </ScrollView>
        )}
      </Context.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
  },
});
