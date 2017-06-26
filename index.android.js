import React from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import HotelLista from './src/Componentes/HotelLista';
import DetalleHotel from './src/Componentes/Hotel/DetalleHotel';

const App = () => (
  <Router>
    <Scene key='hotelLista' component={HotelLista} hideNavBar initial />
    <Scene 
      key='detalleHotel' component={DetalleHotel}      
    />
  </Router>     
);  

AppRegistry.registerComponent('PruebaTecnicaVault', () => App);
