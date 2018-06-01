import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, } from 'react-native';

import nav_style from '../components/nav_style';
import DayScreen from './DayScreen';
import {Icon} from 'react-native-elements';

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


     <View style={{top: 415, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}} >Home</Text>
                </TouchableOpacity>
            </View>
            

            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                <Icon 
                    name='marker' 
                    type='foundation'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Map</Text>
                </TouchableOpacity>
            </View>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color='pink'
                    size={36}/>
                <Text style={{fontSize: 10, color: 'pink', textAlign: 'center'}}>Timetable</Text>
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
    backgroundColor: '#ECECEC',
    height: 45,
   width: '90%',
   //borderWidth: 1,
   //borderRadius: 2,
   borderBottomWidth: 0,
   borderRadius: 5, 
   shadowColor: '#000',
   shadowOffset: { height: 3 },
   shadowOpacity: 0.1, //from 0 to 1
   shadowRadius: 3,
   alignItems: 'center',
   elevation: 5,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10,
   marginBottom: 10,
   alignSelf: 'center',
 }
}) 

export default Timetable;