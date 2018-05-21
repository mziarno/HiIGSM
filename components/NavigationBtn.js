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
import {Actions} from 'react-native-router-flux';
import {StackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import Timetable from '../screens/TimetableScreen';
import ButtonRouter from '../config/buttonRoute'

class NavigationBtn extends Component{
    
  render(){
      
       return( 
        <View style={nav_style.container}>
         
          <View style={nav_style.HomeBtn}>
            <TouchableOpacity onPress={() => Actions.home()}>
              <Image
              source={require('../assets/icons/home.png')}
              style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
              title='Home'
                />
              </TouchableOpacity>
            </View>

          <View style={nav_style.MustSeeBtn}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MustSeeScreen') }>
              <Image
                source={require('../assets/icons/map.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                />
              </TouchableOpacity>
            </View>
          <View style={nav_style.TimeTable}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Timetable') }>
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


const nav_style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
  },
  
  HomeBtn: {
    width: 69,
    height: 69,
    borderRadius: 150/2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: Dimensions.get('window').width*0.1,
    overflow: 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2
      },
    }),
    
},
MustSeeBtn: {
  width: 69,
  height: 69,
  borderRadius: 150/2,
  backgroundColor: 'white',
  alignItems: 'center',
  position: 'absolute',
  left: Dimensions.get('window').width*0.4,
  justifyContent: 'center',
  overflow: 'visible',
  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOffset: { height: 3 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 2
    },
  }),
},
TimeTable: {
  width: 69,
  height: 69,
  borderRadius: 150/2,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: Dimensions.get('window').width*0.7,
  overflow: 'visible',
  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOffset: { height: 3 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 2
    },
  }),
  
},

});


export default NavigationBtn;