import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Context from '../../Context';

export default function StarshipListItem(props) {
  // const context = useContext(Context);
  const [hover,setHover] = useState(false);
  let { ship } = props;
  let { name, manufacturer, images } = ship;
  console.log(images);
  let image = Image.resolveAssetSource(images[0]);

  return (
    <TouchableOpacity style={[styles.brief,hover && {opacity:.8}]} 
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

const styles = StyleSheet.create({
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
