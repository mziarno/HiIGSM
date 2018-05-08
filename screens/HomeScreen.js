import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';
import MapScreen from './Map';

export default class HomeScreen extends Component {
    
    static navigationOptions = {} 
        
    render(){
        return(
            <View>
                <Text> Hello IGSM 2019 </Text>
            </View>
        )
    }
}
