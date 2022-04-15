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
3. Select Episode V: The Empire Strikes Back
4. Tap on Slave 1
5. Add as a favorite
6. Go back to home page
7. Filter favorites

# Key Code Samples
## `App.js`
```
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
  ```
  
  ## `components/HomeScreen.js`
  ```
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
