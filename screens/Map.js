import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, 
  Platform, StatusBar,AppRegistry,Dimensions} from 'react-native';
import MapView from 'react-native-maps';

import nav_style from '../components/nav_style';


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
            longitudeDelta: 0.0421}}>
          <MapView.Marker
            coordinate={{latitude: 52.220521, longitude: 21.010488}}
            title="Politechnika Warszawska">
          </MapView.Marker>
        </MapView>
  
        <View style={{bottom: -190}}>
            
            <View style={nav_style.HomeBtn}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                  <Image
                  source={require('../assets/icons/home.png')}
                  style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                  title='Home'
                  />
                  </TouchableOpacity>
            </View>

            <View style={nav_style.MustSeeBtn}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map')}>
                  <Image
                  source={require('../assets/icons/map.png')}
                  style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                  />
                  </TouchableOpacity>
              </View>
            <View style={nav_style.TimeTable}>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Timetable')}>
                  <Image
                  source={require('../assets/icons/calendar.png')}
                  style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                  />
              </TouchableOpacity>
            </View>
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