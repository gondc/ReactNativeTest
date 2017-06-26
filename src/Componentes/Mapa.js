import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Mapa = (props) => {
  const estilos = {
    map: {
      ...StyleSheet.absoluteFillObject
    },
    viewMap: {
      height: 120,
      width: null,
      flex: 1
    }
  };

  return (
    <View style={estilos.viewMap}>
      <MapView
        liteMode
        style={estilos.map}
        initialRegion={{
          latitude: props.latitud,
          longitude: props.longitud,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.0009,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: props.latitud,
            longitude: props.longitud
          }}
        />
      </MapView>
    </View>
  );
};

export default Mapa;
