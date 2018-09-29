import React, {Component} from 'react';
import { View, Text, StyleSheet, Image,  TouchableOpacity,} from 'react-native';
import MapView from 'react-native-maps';
import {Icon} from 'react-native-elements';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';

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
            longitudeDelta: 0.0421}}>
          <MapView.Marker
            coordinate={{latitude: 52.220521, longitude: 21.010488}}
            title="Warsaw University Of Technology">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.232353, longitude: 20.981048}}
            title="The Warsaw Rising Museum">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.248072, longitude: 21.015224}}
            title="The Royal Castle">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.226727, longitude: 21.014944}}
            title="Graphic Art and Poster Gallery">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.234260, longitude: 21.023884}}
            title="Foksal Gallery">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.238173, longitude: 21.017990}}
            title="Nicolaus Copernicus Monument">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{latitude: 52.247259, longitude: 21.013367}}
            title="Sigismund's Column">
            <Image 
            source={require('../assets/icons/marker.png')} 
            style={{width: 20, height: 30} }/>
          </MapView.Marker>
        </MapView>
  
        <View style={{top: '56.5%', justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>       
                    <HomeButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <MapButton 
                    color='#cc0033'
                    onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <TimetableButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Timetable')}
                    />
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