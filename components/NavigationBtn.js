import React, {Component} from 'react';
import { View, 
        Text, 
        StyleSheet, 
        Button, 
        Image, 
        ScrollView, 
        TouchableOpacity, 
        Platform, 
        StatusBar,
        AppRegistry,
        Dimensions} from 'react-native';
import {NavigationActions, navigate} from 'react-navigation';
import nav_style from '../components/nav_style';


class NavigationBtn extends Component{
    
  render(){
       return( 
        <View style={nav_style.container}>
         
          <View style={nav_style.HomeBtn}>
            <TouchableOpacity>
              <Image
              source={require('../assets/icons/home.png')}
              style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
              title='Home'
                />
              </TouchableOpacity>
            </View>

          <View style={nav_style.MustSeeBtn}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/map.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                />
              </TouchableOpacity>
            </View>
          <View style={nav_style.TimeTable}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/calendar.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                />
              </TouchableOpacity>
            </View>
          </View>
            )
    }
}


export default NavigationBtn;