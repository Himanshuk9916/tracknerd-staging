import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function Map(props) {
  console.log('lat', props.route.params.lat)
  console.log('long', props.route.params.long)
  const lat = props.route.params.lat;
  const long = props.route.params.long;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.515,
          longitudeDelta: 0.4121,
        }}
      >
        <Marker
          coordinate={{
            latitude: lat,
            longitude: long,
          }}
          image={require('../assests/mapvehicle.png')}
        />
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});


export default Map;