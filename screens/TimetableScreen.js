import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';



class Timetable extends Component {
  static navigationOptions = {
    title: 'Timetable',       
        headerStyle: {
          backgroundColor: '#1D3557',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }, 
  } 

  render() {
    return (
      <View>
        <Text> Timetable </Text>
      </View>
  )}
}

export default Timetable;