import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function StarshipListItem(props) {
  const { orientation } = useContext(Context);
  const [hover,setHover] = useState(false);
  let { ship } = props;
  let { name, manufacturer, images } = ship;
  let image = Image.resolveAssetSource(images[0]);
  let styles = getStyles(orientation);
  console.log(orientation)

  return (
    <TouchableOpacity style={[styles.brief, hover && {opacity:.8}]} 
      onMouseEnter={(e) => setHover(true) }
      onMouseLeave={(e) => setHover(false) }
      onPress={()=>{}}
    > 
      <Image source={image} style={styles.image}/> 
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{manufacturer}</Text>
    </TouchableOpacity>
  )
};

const getStyles = (orientation) => {
  if (orientation === 'PORTRAIT') {
    return StyleSheet.create({
      brief: {
        backgroundColor: '#333333',
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        height: 270,
    
        flex: 1,
        minWidth: 200,
        maxWidth: 300,
        maxHeight: 300
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
      },
      text: {
        fontSize: 28,
        color: '#ffffff',
        padding: 12,
        paddingBottom: 2
      }
    });
  } else {
    return StyleSheet.create({
      brief: {
        backgroundColor: '#bbb',
        alignItems: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        height: 270,
    
        flex: 1,
        minWidth: 200,
        maxWidth: 300,
        maxHeight: 300
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 100,
      },
      text: {
        fontSize: 28,
        color: '#ffffff',
        padding: 12,
        paddingBottom: 2
      }
    });
  }
} 
