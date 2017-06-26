import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CarruselItem = (props) => {
  const estilos = StyleSheet.create({
    view: {
      marginLeft: 30,
      marginRight: 45,
      marginTop: 30
    },
    icon: {
      paddingLeft: 8,
      paddingBottom: 4,
      color: '#FFF'
    },
    text: {
      color: '#FFF',
      fontSize: 12
    }
  });

  return (
    <View style={estilos.view}>
      <Icon style={estilos.icon} name="wifi" size={27} />
      <Text style={estilos.text}>{props.texto}</Text>
    </View>
  );
};

export default CarruselItem;
