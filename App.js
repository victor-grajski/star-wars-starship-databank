import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text } from 'react-native';
import Context from './Context';
import { useOrientation } from './utils/useOrientation';
import Drawer from 'react-native-drawer';

import starships from './data/starships';
import pilots from './data/pilots';
import films from './data/films';

import HomeScreen from './components/HomeScreen/HomeScreen';
import StarshipDetail from './components/StarshipDetail/StarshipDetail';
import FilterPanel from './components/FilterPanel/FilterPanel';

// TODO: header buttons
// TODO: status title
export default function App() {
  const [state, setState] = useState({
    starships: starships,
    pilots: pilots,
    films: films,
    title: 'All Films',
    favorites: [],
  });

  const [isLoaded] = useFonts({
    'Helvetica Neue': require('./assets/fonts/HelveticaNeue.ttf'),
    'Star Wars': require('./assets/fonts/Starjedi.ttf'),
  });

  const orientation = useOrientation();
  const Stack = createStackNavigator();

  const closeControlPanel = () => {
    _drawer.close()
  };
  
  const openControlPanel = () => {
    _drawer.open();
  };

  const filterResults = id => {
    let title;
    let filteredStarships;

    if (id === 0) {
      title = "All Films";
      filteredStarships = starships;
    } else {
      let film = films.filter(film => film.id === id)[0];
      title = film.title;
      filteredStarships = starships.filter(ship => ship.films.includes(id));
    }

    setState({
      ...state,
      starships: filteredStarships,
      title: title
    })
    closeControlPanel();
  };


  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Context.Provider
        value={{
          ...state,
          orientation: orientation,
          filterResults: filterResults,
        }}
      >
        {orientation === 'PORTRAIT' ? (
          <Drawer
            ref={(ref) => _drawer = ref}
            content={<FilterPanel />}
            tapToClose={true}
            openDrawerOffset={(viewport) => viewport.width - 300}
            captureGestures={true}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerStyle: {
                    backgroundColor: '#222',
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                  headerTitle: props => <HeaderTitle {...props} />,
                  headerLeft: () => (
                    <Button
                      title="meep"
                      color="#fff"
                      onPress={() => {
                        openControlPanel();
                      }}
                    />
                  )
                }}
              />
              
              <Stack.Screen 
                name="Detail" 
                component={StarshipDetail} 
                options={{
                  headerTitle: "",
                  headerBackTitleVisible: false,
                  headerStyle: {
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#fff',
                  headerTransparent: true,
                }}
              />
            </Stack.Navigator>
          </Drawer>
        ) : (
          <Drawer
            ref={(ref) => _drawer = ref}
            content={<FilterPanel />}
            tapToClose={true}
            openDrawerOffset={(viewport) => viewport.width - 300}
            captureGestures={true}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerStyle: {
                    backgroundColor: '#222',
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                  },
                  headerTitle: props => <HeaderTitle {...props} />,
                  headerLeft: () => (
                    <Button
                      title="meep"
                      color="#fff"
                      onPress={() => {
                        openControlPanel();
                      }}
                    />
                  )
                }}
              />
              <Stack.Screen 
                name="Detail" 
                component={StarshipDetail} 
                options={{
                  headerTitle: "",
                  headerBackTitleVisible: false,
                  headerStyle: {
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#fff',
                  headerTransparent: true,
                }}
              />
            </Stack.Navigator>
          </Drawer>
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
