import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stars = (props) => {
  const estilo = {
    estiloEstrella: {
      color: props.color,
      paddingRight: 4
    },
    estiloContenedor: {
      justifyContent: 'flex-start',
      flexDirection: 'row'
    }
  };  
  const estrellas = [];
  for (let i = 0; i < props.number; i++) {
    estrellas.push(
      (<View key={i}>
        <Icon name="star" size={14} style={estilo.estiloEstrella} />
      </View>)
    );
  }
  return (
    <View style={estilo.estiloContenedor}>
      {estrellas}
    </View>
  );  
}; 

export default Stars;
