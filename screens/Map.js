import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';


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
        
        <View >
        
            <Text>Map</Text>
            
        </View>

        )
    }
}


export default Map;
