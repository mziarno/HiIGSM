import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Icon, StatusBar} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';
import MapScreen from './Map';



class HomeScreen extends Component {
    static navigationOptions = {
            title: 'Hi! IGSM 2019',   
            headerStyle: {
              backgroundColor: '#1D3557',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
            
      } 

      
    render(){
        return(
            <View>
                <Text> Hello IGSM 2019 </Text>
            </View>
        )
    }
}

export default HomeScreen;
