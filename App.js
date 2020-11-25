import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import Context from './Context';
import { useOrientation } from './utils/useOrientation';

import starships from './data/starships';
import pilots from './data/pilots';
import films from './data/films';

import HomeScreen from './components/HomeScreen/HomeScreen';
import StarshipDetail from './components/StarshipDetail/StarshipDetail';

// TODO: header button
export default function App() {
  const [state, setState] = useState({
    starships: starships,
    pilots: pilots,
    films: films,
    favorites: [],
  });

  const [isLoaded] = useFonts({
    'Helvetica Neue': require('./assets/fonts/HelveticaNeue.ttf'),
    'Star Wars': require('./assets/fonts/Starjedi.ttf'),
  });

  const orientation = useOrientation();
  const Stack = createStackNavigator();

  let styles = getStyles(orientation);

  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Context.Provider
        value={{
          ...state,
          orientation: orientation,
        }}
      >
        {orientation === 'PORTRAIT' ? (
          <Stack.Navigator
            screenOptions={styles}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: props => <HeaderTitle {...props} />
              }}
            />
            <Stack.Screen 
              name="Detail" 
              component={StarshipDetail} 
              options={{
                headerTitle: ""
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
          screenOptions={styles}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: props => <HeaderTitle {...props} />
              }}
            />
            <Stack.Screen 
              name="Detail" 
              component={StarshipDetail} 
              options={{
                headerTitle: ""
              }}
            />
          </Stack.Navigator>
        )}
      </Context.Provider>
    </NavigationContainer>
  );
}

const HeaderTitle = () => {
  return (
    <Text
      style={{
        fontFamily: "Star Wars",
        fontSize: 24,
        color: '#fff',
        textTransform: "uppercase",
        textAlign: "center"
      }}
    >
      Star Wars
    </Text>
  )
}

const getStyles = (orientation) => {
  if (orientation === 'PORTRAIT') {
    return {
      headerStyle: {
        backgroundColor: '#222',
        shadowColor: 'transparent'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
      },
    };
  } else {
    return {
      headerStyle: {
        backgroundColor: '#222',
        shadowColor: 'transparent'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
      },
    };
  }
} 
