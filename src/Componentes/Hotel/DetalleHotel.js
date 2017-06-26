import React, { Component } from 'react';
import {
  Text, ScrollView, Image, View,
  Dimensions, TouchableOpacity, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconLoc from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';
import CardHeader from '../Card/CardHeader';
import HotelNombre from '../Hotel/HotelNombre';
import Stars from '../Hotel/Stars';
import Mapa from '../Mapa';
import Dropdown from '../Dropdown/Dropdown';
import Precio from '../Precio';
import Carrusel from '../Carrusel/Carrusel';

class DetalleHotel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: props.hotel,
      precioSeleccionado: 1
    };
  }

  onPressBackButton() {
    Actions.pop();
  }

  updatePrecioSeleccionado(i) {
    this.setState({ precioSeleccionado: i });
  }

  width = Dimensions.get('screen').width;

  estilos = StyleSheet.create({
    imagen: {
      height: 185,
      width: this.width,
      position: 'absolute',
      top: 0,
      left: 0
    },
    viewPrincipal: {
      flex: 1,
      backgroundColor: 'transparent'
    },
    viewBackButton: {
      flexDirection: 'row',
      marginLeft: 12,
      marginTop: 12
    },
    scrollView: {
      flex: 1
    },
    textDetalle: {
      fontSize: 20,
      fontFamily: 'Roboto',
      fontWeight: '400',
      color: '#FFF',
      opacity: 1,
      marginLeft: 15,
      marginTop: 4
    },
    icon: {
      color: '#FFF',
      opacity: 1
    },
    textDireccion: {
      fontSize: 14,
      opacity: 0.84,
      fontFamily: 'Roboto',
      fontWeight: '400',
      paddingTop: 3,
      paddingLeft: 3
    }
  });

  render() {
    return (
      <View style={this.estilos.viewPrincipal}>
        <ScrollView style={this.estilos.scrollView}>
          <View>
            <Image
              style={this.estilos.imagen} source={{ uri: this.state.hotel.imagen }}
            />
          </View>
          <View style={this.estilos.viewBackButton}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.onPressBackButton()}>
              <Icon name="md-arrow-back" size={38} style={this.estilos.icon} />
            </TouchableOpacity>
            <Text style={this.estilos.textDetalle}>Detalle</Text>
          </View>
          <Card>
            <CardSection>
              <HotelNombre nombre={this.state.hotel.nombre} />
            </CardSection>
            <CardSection>
              <Stars number={this.state.hotel.estrellas} color="#FDBA12" />
            </CardSection>
            <CardSection>
              <IconLoc name="location-on" size={25} />
              <Text style={this.estilos.textDireccion}>
                {this.state.hotel.direccion}</Text>
            </CardSection>
            <CardSection noPadding>
              <Mapa
                latitud={this.state.hotel.coordenadas.latitud}
                longitud={this.state.hotel.coordenadas.longitud}
              />
            </CardSection>
          </Card>
          <Card>
            <CardHeader>
              <Text
                style={{ flex: 1, fontSize: 16, fontWeight: '500', opacity: 0.87 }}
              >
                Habitaciones</Text>
              <IconFontAwesome style={{ opacity: 0.74 }} name="group" size={20} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  opacity: 0.87,
                  marginLeft: 4,
                  marginRight: 18,
                  color: '#335692'
                }}
              >
                6</Text>
              <IconFontAwesome style={{ opacity: 0.74 }} name="bed" size={20} />
              <Text
                style={{ 
                  fontSize: 16, color: '#335692', fontWeight: '500', opacity: 0.87, marginLeft: 4 }}
              >
                2</Text>
            </CardHeader>
            <CardSection dashedBorder>
              <Dropdown
                data={this.state.hotel.precios} opcionSeleccionada={this.state.precioSeleccionado}
                cambiar={this.updatePrecioSeleccionado.bind(this)}
              />
            </CardSection>
            <CardSection>
              <Text style={{ padding: 3.5, flex: 1 }}>Precio por noche por habitacion</Text>
              <Precio
                moneda='ARS' monto={this.state.hotel.precios[this.state.precioSeleccionado].monto}
              />
            </CardSection>
          </Card>
          <Carrusel />
        </ScrollView>
      </View>
    );
  }

}

export default DetalleHotel;
