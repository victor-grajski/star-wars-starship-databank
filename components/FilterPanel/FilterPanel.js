import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function StarshipDetail() {
    const { orientation, filterResults } = useContext(Context);
    const [hover, setHover] = useState(false);
    let styles = getStyles(orientation);
    
    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(0) }}
            > 
                <Text style={styles.mainTitle} numberOfLines={1} ellipsizeMode='tail'>All Films</Text>
            </TouchableOpacity>
            

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(4) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode I</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>The Phantom Menace</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(5) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode II</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>Attack of the Clones</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(6) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode III</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>Revenge of the Sith</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(1) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode IV</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>A New Hope</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(2) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode V</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>The Empire Strikes Back</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.item, hover && {opacity:.8}]} 
                onMouseEnter={(e) => setHover(true) }
                onMouseLeave={(e) => setHover(false) }
                onPress={(e) => { filterResults(3) }}
            > 
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Episode VI</Text>
                <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>Return of the Jedi</Text>
            </TouchableOpacity>
        </View>
    );
};

const getStyles = (orientation) => {
    if (orientation === 'PORTRAIT') {
      return StyleSheet.create({
        container: {
          backgroundColor: '#333333',
          height: "100%",
          paddingTop: "20%",
          paddingLeft: 50,
        },
        mainTitle: {
            paddingTop: 50,
            paddingLeft: 10,
            fontSize: 24,
            fontWeight: "500",
            color: '#fff',
            alignSelf: "flex-start",
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
          },
        title: {
          paddingTop: 50,
          paddingLeft: 10,
          fontSize: 24,
          fontWeight: "500",
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
        subtitle: {
          paddingTop: 3,
          paddingLeft: 10,
          fontSize: 14,
          fontWeight: "500",
          color: '#1BBCEA',
          alignSelf: "flex-start",
          textTransform: "uppercase",
          fontFamily: "Helvetica Neue",
        },
      });
    } else {
      return StyleSheet.create({
        container: {
            backgroundColor: '#333333',
            height: "100%",
            paddingTop: "20%",
            paddingLeft: 50,
          },
          mainTitle: {
              paddingTop: 50,
              paddingLeft: 10,
              fontSize: 24,
              fontWeight: "500",
              color: '#fff',
              alignSelf: "flex-start",
              textTransform: "uppercase",
              fontFamily: "Helvetica Neue",
            },
          title: {
            paddingTop: 50,
            paddingLeft: 10,
            fontSize: 24,
            fontWeight: "500",
            color: '#1BBCEA',
            alignSelf: "flex-start",
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
          },
          subtitle: {
            paddingTop: 3,
            paddingLeft: 10,
            fontSize: 14,
            fontWeight: "500",
            color: '#1BBCEA',
            alignSelf: "flex-start",
            textTransform: "uppercase",
            fontFamily: "Helvetica Neue",
          },
      });
    }
  } 
  