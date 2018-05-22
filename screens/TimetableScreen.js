import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, } from 'react-native';

import nav_style from '../components/nav_style';
import DayScreen from './DayScreen';
class Timetable extends Component { 

  render() {
    return (
     <View>
  
     <TouchableOpacity 
      onPress={() => 
      this.props.navigation.navigate('DayScreen')} 
         style={buttonStyle.containerStyle}> 
             {/* // height: 50, 
             // width: 300, 
             // marginTop: 50, 
             // alignItems: 'center', 
             // alignSelf: 'center', 
             // backgroundColor: 'blue', 
             // borderRadius: 10   */}
             
         <Text style={textStyle.titleText}> Monday</Text>
     </TouchableOpacity>


     <View style={{top: 20}}>
            
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


const textStyle = StyleSheet.create({
 titleText: {
   marginTop: 10,
   fontSize: 18,
   fontWeight: 'bold',
   color: '#4a4a4a',
   textAlign: 'center',
   justifyContent: 'center',
   flex: 1,
   alignItems: 'center'
   
 },
});

const buttonStyle = StyleSheet.create({
 containerStyle: {
   height: 50,
   width: '90%',
   //borderWidth: 1,
   //borderRadius: 2,
   borderColor: '#ddd',
   borderBottomWidth: 0,
   borderRadius: 7, 
   shadowColor: '#000',
   shadowOffset: { width: 3, height: 3 },
   shadowOpacity: 0.1, //from 0 to 1
   shadowRadius: 7,
   elevation: 4,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10,
   marginBottom: 5,
   alignSelf: 'center',
 }
}) 

export default Timetable;