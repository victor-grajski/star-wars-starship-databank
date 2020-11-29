import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import Context from './Context';
import { useOrientation } from './utils/useOrientation';
import Drawer from 'react-native-drawer';
import Hamburger from 'react-native-animated-hamburger';

import starships from './data/starships';
import pilots from './data/pilots';
import films from './data/films';

import HomeScreen from './components/HomeScreen/HomeScreen';
import StarshipDetail from './components/StarshipDetail/StarshipDetail';
import FilterPanel from './components/FilterPanel/FilterPanel';
import HeartButton from './components/HeartButton/HeartButton';

// TODO: hamburger animation timing
// TODO: landscape grid
export default function App() {
  const [state, setState] = useState({
    starships: starships,
    pilots: pilots,
    films: films,
    title: 'All Films',
    favoritesToggle: false,
    favorites: [],
    drawerActive: false
  });

  useEffect(() => {
    // console.log(state.drawerActive);
  })

  const [isLoaded] = useFonts({
    'Helvetica Neue': require('./assets/fonts/HelveticaNeue.ttf'),
    'Star Wars': require('./assets/fonts/Starjedi.ttf'),
  });

  const orientation = useOrientation();
  const Stack = createStackNavigator();

  const closeControlPanel = () => {
    _drawer.close();
    // setDrawerActive(false);
  };
  
  const openControlPanel = () => {
    _drawer.open();
    setState({
      ...state,
      drawerActive: !state.drawerActive
    })
    console.log("Asdf")
    // setDrawerActive(!drawerActive);
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

  const toggleFavorites = () => {
    if (!state.favoritesToggle) {
      setState({
        ...state,
        title: "Favorites",
        favoritesToggle: true,
        starships: state.favorites
      })
    } else {
      setState({
        ...state,
        title: "All Films",
        favoritesToggle: false,
        starships: starships
      })
    }
  }

  const addFavorite = ship => {
    state.favorites.push(ship);
    setState({
      ...state,
      favorites: state.favorites
    })
  };

  const removeFavorite = ship => {
    let index = state.favorites.indexOf(ship)
    state.favorites.splice(index, 1);
    setState({
      ...state,
      favorites: state.favorites
    })
  };


  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Context.Provider
        value={{
          ...state,
          orientation: orientation,
          filterResults: filterResults,
          toggleFavorites: toggleFavorites,
          addFavorite: addFavorite,
          removeFavorite: removeFavorite,
        }}
      >
        {orientation === 'PORTRAIT' ? (
          <Drawer
            ref={(ref) => _drawer = ref}
            content={<FilterPanel />}
            tapToClose={true}
            openDrawerOffset={(viewport) => viewport.width - 300}
            captureGestures={true}
            onCloseStart={() => setState({
              ...state,
              drawerActive: false
            })}
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
                    <View style={{ paddingLeft: 20 }}>
                      <Hamburger
                        type="spinCross" 
                        active={state.drawerActive} 
                        underlayColor="transparent"
                        color="white"
                        onPress={() => {
                          openControlPanel();
                        }}
                      />
                    </View>
                  ),
                  headerRight: () => (
                    <HeartButton/>
                  ),
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
            onCloseStart={() => setState({
              ...state,
              drawerActive: false
            })}
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
                    <View style={{ paddingLeft: 20 }}>
                      <Hamburger
                        type="spinCross" 
                        active={state.drawerActive} 
                        underlayColor="transparent"
                        color="white"
                        onPress={() => {
                          openControlPanel();
                        }}
                      />
                    </View>
                  ),
                  headerRight: () => (
                    <HeartButton/>
                  ),
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
