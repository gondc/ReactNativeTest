import React from 'react';
import { View, Text } from 'react-native';

const Precio = (props) => {
  const estilos = {
    contenedor: {      
      flexDirection: 'row'    
    },
    precio: {
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: '500',
      color: '#000',
      opacity: 0.87
    },
    moneda: {
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: '200',
      color: '#000',
      opacity: 0.57,
      marginLeft: 3      
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.moneda}>{props.moneda} </Text>
      <Text style={estilos.precio}>{props.monto}</Text>
    </View>
  );
};

export default Precio;
