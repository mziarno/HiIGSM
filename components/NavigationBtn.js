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
        AppRegistry} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import Timetable from '../screens/TimetableScreen';


class NavigationBtn extends Component{
    render(){
       return( 
        //  <View style={nav_style.container}>
         <View>
         
        <View style={nav_style.HomeBtn}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeScreen') }>
           <Image
             source={require('../assets/images/home.png')}
             style={{width: 69, height: 69}}
             />
              </TouchableOpacity>
         </View>
         <View style={nav_style.MustSeeBtn}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('MustSeeScreen') }>
           <Image
             source={require('../assets/images/home.png')}
             style={{width: 69, height: 69}}
             />
              </TouchableOpacity>
         </View>
         <View style={nav_style.TimeTable}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('Timetable') }title='timetable'>
           <Image
             source={require('../assets/images/home.png')}
             style={{width: 69, height: 69}}
             />
              </TouchableOpacity>
           </View>
           </View>
          //  </View>
           )
    }
}


const nav_style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'transparent',
    width: '100%',
    top:'90%',
     alignItems: 'flex-end',
  },
  
  HomeBtn: {
    width: 69,
    height: 69,
    borderRadius: 150/2,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    position: 'relative',
    bottom: 20,
    left: 30,
    overflow: 'visible',
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 10
      },
    }),
    
},
MustSeeBtn: {
  width: 69,
  height: 69,
  borderRadius: 150/2,
  backgroundColor: 'transparent',
  //alignItems: 'center',
  position: 'relative',
  //bottom: 40,
  justifyContent: 'center',
  overflow: 'visible',
  //alignItems: 'center',
  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOffset: { height: 3 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 10
    },
  }),
},
TimeTable: {
  width: 69,
  height: 69,
  borderRadius: 150/2,
  backgroundColor: 'transparent',
  alignItems: 'flex-end',
  position: 'relative',
  overflow: 'visible',
 bottom: -50,
  right: 30,
  //top:30,
  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOffset: { height: 3 },
      shadowOpacity: 1,
      shadowRadius: 3,
    },
    android: {
      elevation: 10
    },
  }),
  
},

});



export default NavigationBtn;