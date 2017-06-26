import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CarruselItem from './CarruselItem';

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = { disabledBotonIzquierdo: false, disabledBotonDerecho: true };
  }

  indiceActual = 1;
  estilos = StyleSheet.create({
    view: {
      marginTop: 16,
      backgroundColor: '#335692',
      flexDirection: 'row',
      height: 110,
    },
    justifyContentCenter: {
      justifyContent: 'center'
    },
    marginLeft: {
      marginLeft: 18
    },
    marginRight: {
      marginRight: 18
    },
    colorBotonDisabled: {
      color: '#000'
    },
    colorBotonEnabled: {
      color: '#FFF'
    }
  });

  scrollIzquierda = () => {
    this.flatList.scrollToIndex({
      animated: true, index: this.indiceActual + 1, viewPosition: 0.5
    });
    this.indiceActual += 1;
    this.actualizarBotonIzquierdo();
    this.actualizarBotonDerecho();
  }

  scrollDerecha = () => {
    this.flatList.scrollToIndex({
      animated: true, index: this.indiceActual - 1, viewPosition: 0.5
    });
    this.indiceActual -= 1;
    this.actualizarBotonDerecho();
    this.actualizarBotonIzquierdo();
  }

  actualizarBotonDerecho() {
    if (this.indiceActual === 2) {
      this.setState({ disabledBotonDerecho: false });
    } else if (this.indiceActual - 2 < 0) {
      this.setState({ disabledBotonDerecho: true });
    }
  }

  actualizarBotonIzquierdo() {
    if (this.indiceActual + 2 >= this.carruselItems.length) {
      this.setState({ disabledBotonIzquierdo: true });
    } else if (this.indiceActual === this.carruselItems.length - 3) {
      this.setState({ disabledBotonIzquierdo: false });
    }
  }

  carruselItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  render() {
    return (
      <View style={this.estilos.view} >
        <View style={this.estilos.justifyContentCenter}>
          <TouchableOpacity 
            disabled={this.state.disabledBotonIzquierdo} onPress={this.scrollIzquierda}
          >
            <View style={this.estilos.marginLeft}>
              <Icon 
                style={this.state.disabledBotonIzquierdo ?
                  this.estilos.colorBotonDisabled : this.estilos.colorBotonEnabled}
                name="ios-arrow-back" size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.carruselItems} ref={(flatList) => { this.flatList = flatList; }}
          keyExtractor={item => item.id} scrollEnabled={false}
          horizontal showsHorizontalScrollIndicator={false}
          renderItem={({ item }) =>
            <CarruselItem texto={`Internet${item.id}`} />
          }
        />
        <View style={this.estilos.justifyContentCenter}>
          <TouchableOpacity disabled={this.state.disabledBotonDerecho} onPress={this.scrollDerecha}>
            <View style={this.estilos.marginRight}>
              <Icon
                style={this.state.disabledBotonDerecho ?
                  this.estilos.colorBotonDisabled : this.estilos.colorBotonEnabled}
                name="ios-arrow-forward" size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

export default Carrusel;
