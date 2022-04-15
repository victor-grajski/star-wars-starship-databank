# How to Run
## Online
##### Requires Expo Go app
[Expo Go](https://expo.dev/@vgrajski/star-wars-starship-databank)

## Locally
##### Requires XCode and Android Studio
1. Clone repo
1. `yarn install`
1. `yarn start` (Works in Android and iOS)

# Test User Flow
1. Scroll through list on home page
2. Open hamburger menu
3. Filter by Episode V: The Empire Strikes Back
4. Tap on Slave 1
5. Add as a favorite
6. Go back to home page
7. Filter favorites

# Key Code Samples
## [`App.js`](https://github.com/victor-grajski/star-wars-starship-databank/blob/main/App.js)
```
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

  const [drawerActive, setDrawerActive] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const loadFonts = () => {
    return loadAsync({
      'Helvetica Neue': require('./assets/fonts/HelveticaNeue.ttf'),
      'Star Wars': require('./assets/fonts/Starjedi.ttf'),
    })
  }

  const orientation = useOrientation();
  const Stack = createStackNavigator();

  const closeControlPanel = () => {
    _drawer.close();
    setDrawerActive(!drawerActive);
  };
  
  const openControlPanel = () => {
    _drawer.open();
    setDrawerActive(!drawerActive);
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
      title: title,
      favoritesToggle: false,
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
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Context.Provider
        value={{
          ...state,
          orientation: orientation,
          drawerActive: drawerActive,
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
            onCloseStart={() => setDrawerActive(false)}
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
                        active={drawerActive} 
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
            onCloseStart={() => setDrawerActive(false)}
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
                        active={drawerActive} 
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
```
  
## [`components/HomeScreen/HomeScreen.js`](https://github.com/victor-grajski/star-wars-starship-databank/blob/main/components/HomeScreen/HomeScreen.js)
```
export default function HomeScreen() {
  const { orientation, starships, title } = useContext(Context);
  let styles = getStyles(orientation);

  return (
    <View style={styles.main}>
      <Starfield />
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
        backgroundColor: '#000',
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
      },
    });
  } else {
    return StyleSheet.create({
        main: {
          flex: 1,
          backgroundColor: '#000',
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
        },
    });
  }
} 
```
  
## [`components/StarshipDetail/StarshipDetail.js`](https://github.com/victor-grajski/star-wars-starship-databank/blob/main/components/StarshipDetail/StarshipDetail.js)
```
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
```
