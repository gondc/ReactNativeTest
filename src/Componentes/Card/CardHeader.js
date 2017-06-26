import React from 'react';
import { View } from 'react-native';

const CardHeader = (props) => (<View style={estilo}>
  {props.children}
</View>);

const estilo = {
  marginTop: 13,
  marginLeft: 16,
  marginRight: 16,
  flexDirection: 'row'
};

export default CardHeader;
