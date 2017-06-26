import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TipoPrecio from '../TipoPrecio';

class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      opcionesAMostrar: [
        <TouchableOpacity
          key={props.opcionSeleccionada} activeOpacity={0.8}
          onPress={() => this.renderOpciones(props.opcionSeleccionada)}
        >
          <View style={this.estilos.viewOpcion}>
            <TipoPrecio
              icon={props.data[props.opcionSeleccionada].icon}
              label={props.data[props.opcionSeleccionada].label}
            />
            <View style={this.estilos.viewChevron}>
              {props.data.length > 1 &&
                (<Icon style={this.estilos.chevron} name='chevron-down' size={18} />)
              }
            </View>
          </View>
        </TouchableOpacity>
      ],
      mostrarTodo: true,
      opcionSeleccionada: props.opcionSeleccionada
    };
  }

  estilos = {
    viewPrincipal: {
      marginTop: 18,
      marginBottom: 18,
      marginLeft: 12,
      marginRight: 12,
      flex: 1
    },
    viewOpcion: {
      flexDirection: 'row',
      flex: 1,
      padding: 3
    },
    viewChevron: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'flex-end'
    },
    chevron: {
      color: '#df6800'
    }
  };

  agregarTodasLasOpciones() {
    const opciones = [];
    for (let i = 0; i < this.state.data.length; i++) {
      opciones.push((
        <TouchableOpacity key={i} activeOpacity={0.8} onPress={() => this.renderOpciones(i)}>
          <View style={this.estilos.viewOpcion}>
            <TipoPrecio icon={this.state.data[i].icon} label={this.state.data[i].label} />
          </View>
          <View style={this.estilos.viewChevron}>
            {this.state.opcionSeleccionada === i &&
              (<Icon style={this.estilos.chevron} name='check-circle' size={18} />)
            }
          </View>
        </TouchableOpacity>
      ));
    }
    return opciones;
  }

  agregarUnaOpcion(indice) {
    return [(
      <TouchableOpacity
        key={indice} activeOpacity={0.8} onPress={() => this.renderOpciones(indice)}
      >
        <View style={this.estilos.viewOpcion}>
          <TipoPrecio icon={this.state.data[indice].icon} label={this.state.data[indice].label} />
          <View style={this.estilos.viewChevron}>
            {this.state.data.length > 1 &&
              (<Icon style={this.estilos.chevron} name='chevron-down' size={18} />)
            }
          </View>
        </View>
      </TouchableOpacity>
    )];    
  }

  renderOpciones(indice) {
    let opciones = [];
    if (this.state.mostrarTodo) {
      opciones = this.agregarTodasLasOpciones();
      this.setState({ opcionesAMostrar: opciones, mostrarTodo: !this.state.mostrarTodo });
    } else {
      opciones = this.agregarUnaOpcion(indice);
      this.setState({
        opcionSeleccionada: indice,
        opcionesAMostrar: opciones,
        mostrarTodo: !this.state.mostrarTodo
      });
      this.props.cambiar(indice);
    }
  }

  render() {
    return (
      <View style={this.estilos.viewPrincipal}>{this.state.opcionesAMostrar}</View>
    );
  }
}

export default Dropdown;
