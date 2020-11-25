import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Context from '../../Context';

export default function StarshipListItem({ ship }) {
  const { orientation } = useContext(Context);
  const [hover, setHover] = useState(false);
  let navigation = useNavigation();
  let { name, manufacturer, images } = ship;
  let image = Image.resolveAssetSource(images[0]);
  let styles = getStyles(orientation);

  return (
    <TouchableOpacity style={[styles.brief, hover && {opacity:.8}]} 
      onMouseEnter={(e) => setHover(true) }
      onMouseLeave={(e) => setHover(false) }
      onPress={() => navigation.navigate('Detail', { ship: ship })}
    > 
      <Image source={image} style={styles.image}/> 
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
      <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode='tail'>{manufacturer}</Text>
    </TouchableOpacity>
  )
};

const getStyles = (orientation) => {
  if (orientation === 'PORTRAIT') {
    return StyleSheet.create({
      brief: {
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
      title: {
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
      brief: {
        backgroundColor: '#333333',
        alignItems: "center",
        marginBottom: 55,
        borderRadius: 10,
    
        flex: 1,
        minWidth: 335,
        minHeight: 250,
        maxWidth: 335,
        maxHeight: 250
      },
      image: {
        width: 335,
        height: 187.5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      },
      title: {
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
