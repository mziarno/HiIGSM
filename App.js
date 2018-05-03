import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform,  } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-vector-icons';
import HomeScreen from './screens/HomeScreen';
import MustSeeScreen from './screens/MustSeeScreen';
import TimeTable from './screens/TimetableScreen';
import Contact from './screens/Contact';
import MapScreen from './screens/Map';

export default class App extends React.Component { render() {
    return (   
         
      <AppDrawerNavigation/>
       );
  }
}

  const AppDrawerNavigation = DrawerNavigator({
  HomeScreen: {screen: HomeScreen},
  MustSeeScreen: {screen: MustSeeScreen},
  TimeTable: {screen: TimeTable},
  MapScreen: {screen: MapScreen},
  Contact: {screen: Contact}
})


const styles = StyleSheet.create({
  marcka: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
