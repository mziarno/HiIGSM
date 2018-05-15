import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Icon, StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';
import MapScreen from './Map';
import * as firebase from 'firebase';

require("firebase/database");

class HomeScreen extends Component {
  

      
    render(){      

        return(
            <View>
                <Text> Hello IGSM 2019 </Text>
            </View>
        )
    }
}

export default HomeScreen;
