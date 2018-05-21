import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Icon, StatusBar, Dimensions, Image} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import nav_style from '../components/nav_style';

require("firebase/database");

class HomeScreen extends Component {
   
    render(){      

      
            return (
          
            <View>
                  
            <Text> HI IGSM </Text>
            <View style={{top: 450}}>
            
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
            )
          
    }
}

export default HomeScreen;
