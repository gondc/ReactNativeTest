import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Hotel from './Hotel/Hotel';

const hoteles = require('../Hoteles.json');

class HotelLista extends Component {  

  onPressHotel(item) {
     Actions.detalleHotel({ hotel: item });
  }  
  
  render() {
    return (
      <FlatList
        data={hoteles} keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <TouchableOpacity activeOpacity={1} onPress={() => this.onPressHotel(item)}>
            <Hotel infoHotel={item} />
          </TouchableOpacity>
        }
      />
    );
  }
    
}

export default HotelLista;
