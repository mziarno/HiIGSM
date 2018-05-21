import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import NavigationBtn from '../components/NavigationBtn';

const LATITUDE = 52.232222;
const LONGITUDE = 21.008333;
const LATITUDE_DELTA = 0.07;
const LONGITUDE_DELTA = 0.07;

class Map extends Component {

  render() {
      return (
        
        <View style={styles.container}>
        <MapView 
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsScale={true}
          showsCompass={true}
          showsPointsOfInterest={false}
          initialRegion={{
            latitude: 52.232222,
            longitude: 21.008333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
            coordinate={{latitude: 52.220521, longitude: 21.010488}}
            title="Politechnika Warszawska">
          </MapView.Marker>
        </MapView>
        <View style={{bottom: -190}}>
            <NavigationBtn/>
         </View>
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
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default Map;