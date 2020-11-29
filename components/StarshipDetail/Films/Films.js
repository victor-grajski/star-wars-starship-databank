import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import Context from '../../../Context';
import filmsData from '../../../data/films';
import moment from 'moment';

export default function Films({ ship }) {
    const { orientation } = useContext(Context);
    let { films } = ship;
    let styles = getStyles(orientation);

    let filmsList = filmsData.filter(film => films.includes(film.id));
    
    return (
      <View
        style={styles.container}
      >
        {filmsList.length === 1 ? (
          <Text style={styles.title}>Film</Text>
        ) : (
          <Text style={styles.title}>Films</Text>
        )}
          
        {orientation === "PORTRAIT" ? (
          <View style={styles.films}>
            {filmsList.map((film) => 
              <View style={styles.card} key={film.id}>
                <Image source={film.images[0]} style={styles.image}/> 
                <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{film.title}</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{moment(film.release_date).format('MMMM D, YYYY')}</Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.films}>
            <ScrollView horizontal={true}>
              {filmsList.map((film) => 
                <View style={styles.card} key={film.id}>
                  <Image source={film.images[0]} style={styles.image}/> 
                  <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode='tail'>{film.title}</Text>
                  <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{moment(film.release_date).format('MMMM D, YYYY')}</Text>
                </View>
              )}
            </ScrollView>
          </View>
        )}
        
      </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          alignItems: "center",
          flex: 1,
          height: '100%',
          width: '100%',
          paddingTop: 30,
        },
        title: {
          paddingLeft: 20,
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        card: {
          marginTop: 20,
          backgroundColor: '#333333',
          alignItems: "center",
          margin: 10,
          borderRadius: 10,
          height: 250,
      
          flex: 1,
          minWidth: 200,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        cardTitle: {
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: 18,
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 40,
          width: 315
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
          width: 315
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          alignItems: "flex-start",
          flex: 1,
          height: '100%',
          width: '100%',
          paddingTop: 30,
        },
        films: {
          flex: 1
        },
        title: {
          paddingRight: 20,
          fontSize: 24,
          fontWeight: '500',
          color: '#ffffff',
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        card: {
          marginTop: 20,
          backgroundColor: '#333333',
          borderRadius: 10,
          height: 250,
          marginRight: 20,
      
          flex: 1,
          minWidth: 200,
          maxWidth: 335,
          maxHeight: 250
        },
        image: {
          width: 335,
          height: 187.5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        cardTitle: {
          paddingTop: 10,
          paddingLeft: 10,
          fontSize: 18,
          color: '#ffffff',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 40,
          width: 315
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
          maxHeight: 30,
          width: 315
        },
      });
    }
  } 
  