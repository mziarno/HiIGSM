import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';


class Map extends Component {
  static navigationOptions = {
    title: 'Map',
    headerStyle: {
      backgroundColor: '#1D3557'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  render() {
      return (
        <View style={styles.container}>

          <MapView style={styles.map}
            initialRegion={{
              latitude: 52.232222,
              longitude: 21.008333,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}>            
          </MapView>

        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0  
  }
});

export default Map;