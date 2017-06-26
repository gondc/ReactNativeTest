import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={estilos}>
      {props.children}
    </View>
  );

const estilos = {
  backgroundColor: '#fff', 
  opacity: 1,
  borderWidth: 2,
  borderColor: '#ddd',
  borderRadius: 3,
  shadowColor: '#000',
  shadowOpacity: 0.32,
  shadowOffset: { width: 0, heigth: 2 },
  shadowRadius: 2,
  marginTop: 16,
  marginLeft: 6,
  marginRight: 6
};

export default Card;
