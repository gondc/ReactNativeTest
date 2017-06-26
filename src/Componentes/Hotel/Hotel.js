import React from 'react';
import { Image } from 'react-native';
import HotelNombre from './HotelNombre';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
import DetalleBusqueda from '../DetalleBusqueda';

const Hotel = (props) => (
  <Card>
    <CardSection noPadding>
        <Image
         style={estilo.imagen}
         source={{ uri: props.infoHotel.imagen }}
        />
    </CardSection>    
    <CardSection>
      <HotelNombre nombre={props.infoHotel.nombre} />
    </CardSection>
    <CardSection>
      <DetalleBusqueda
        icon={props.infoHotel.precios[0].icon}
        label={props.infoHotel.precios[0].label}
        monto={props.infoHotel.precios[0].monto}
        estrellas={props.infoHotel.estrellas}
      />
    </CardSection>
  </Card>  
);

const estilo = {
  imagen: {
    height: 185,
    flex: 1,
    width: null
  }  
};

export default Hotel;
