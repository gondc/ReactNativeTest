import React from 'react';
import { Text } from 'react-native';

const HotelNombre = (props) => <Text style={estilo}>{props.nombre}</Text>;

const estilo = {
  fontSize: 20,
  fontFamily: 'Roboto',
  fontWeight: '500',
  color: '#000',
  opacity: 0.87
};

export default HotelNombre;
