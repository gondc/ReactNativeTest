import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => { 
  const estiloSeleccionado = [estilos.flex];
  if (props.noPadding) {
    estiloSeleccionado.push(estilos.noPadding);
  } else {
    estiloSeleccionado.push(estilos.padding);
  }
  if (props.dashedBorder) {
    estiloSeleccionado.push(estilos.dashedBorder);
  }
  return (<View style={estiloSeleccionado}>
    {props.children}
  </View>);
};

const estilos = {
  padding: {
    paddingTop: 2,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 2,    
    marginRight: 16,    
    marginLeft: 16
  },
  noPadding: {
    padding: 0
  },
  flex: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
  dashedBorder: {
    borderStyle: 'dashed',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#9B9B9B',
    margin: 14
  }
};

export default CardSection;
