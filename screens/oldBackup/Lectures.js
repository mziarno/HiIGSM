import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Lectures extends Component {
    static navigationOptions = {
      title: 'Lectures',
      headerStyle: {
        backgroundColor: '#1D3557',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    render() {
      return (
        <View>
          
      <Text> Lectures </Text>
      </View>
      )
    }
  }
  
  export default Lectures;
  