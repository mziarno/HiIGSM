import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, } from 'react-native';
import { StackNavigator, DrawerNavigator, } from 'react-navigation';
import {Icon} from 'react-native-vector-icons';
import HomeScreen from '../HiIGSM/screens/HomeScreen';
import MustSeeScreen from '../HiIGSM/screens/MustSeeScreen';
import TimeTable from '../HiIGSM/screens/TimetableScreen';

export default class App extends React.Component {


  render() {
    return ( 
     
      <AppDrawerNavigation/>
       );
  }
}

const AppDrawerNavigation = DrawerNavigator({
  HomeScreen: {screen: HomeScreen},
    MustSeeScreen: {screen: MustSeeScreen},
    TimeTable: {screen: TimeTable}

})

const styles = StyleSheet.create({
  marcka: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
