import React from 'react';
import { View, Text } from 'react-native';
import Stars from './Hotel/Stars';
import Precio from './Precio';
import TipoPrecio from './TipoPrecio';

const DetalleBusqueda = (props) => (
  <View style={estilos.contenedor}>
    <View style={estilos.descripcion}>
      <Stars number={props.estrellas} color="#FDBA12" />
      <TipoPrecio icon={props.icon} label={props.label} />        
    </View>      
    <View style={estilos.precioContenedor}>        
      <Text style={estilos.texto}>precio por noche</Text>
      <Precio monto={props.monto} moneda='ARS' />        
    </View>
  </View>
);

const estilos = {
  contenedor: {
    flexDirection: 'row',
    flex: 1
  },
  precioContenedor: {
    borderLeftWidth: 1,
    borderLeftColor: '#bfbfbf',      
    flexDirection: 'column',
    marginRight: 20
  },
  descripcion: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1
  },    
  texto: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '100',
    color: '#000',
    opacity: 0.57,      
    marginLeft: 3 
  }
};

export default DetalleBusqueda;
