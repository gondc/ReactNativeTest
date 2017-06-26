import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TipoPrecio = (props) => (
  <View style={estilo}>
    <Icon name={props.icon} size={18} />
    <Text> {props.label}</Text>
  </View>  
);

const estilo = {
  flexDirection: 'row'
};

export default TipoPrecio;
