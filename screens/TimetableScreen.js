import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, } from 'react-native';



class Timetable extends Component { 

  render() {
    return (
     <View>
     {/* <Text> This is the Timetable </Text> */}
     {/* <Button onPress={() => 
     this.props.navigation.navigate('SundayScreen')} 
     title="Sunday 23.06"/> */}
     
     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('SundayScreen')} 
         style={buttonStyle.containerStyle}> 
             {/* // height: 50, 
             // width: 300, 
             // marginTop: 50, 
             // alignItems: 'center', 
             // alignSelf: 'center', 
             // backgroundColor: 'blue', 
             // borderRadius: 10   */}
             
         <Text style={textStyle.titleText}> Sunday 23.06</Text>
     </TouchableOpacity>

     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('MondayScreen')} 
         style={buttonStyle.containerStyle}>  
         <Text style={textStyle.titleText}> Monday 24.06</Text>
     </TouchableOpacity>   

      <TouchableOpacity 
    //   onPress={() => 
    //  this.props.navigation.navigate('TuesdayScreen')} 
         style={buttonStyle.containerStyle}>                                            
         <Text style={textStyle.titleText}> Tuesday 25.06</Text>
     </TouchableOpacity>    

     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('WednesdayScreen')} 
         style={buttonStyle.containerStyle}> 
                                 
         <Text style={textStyle.titleText}> Wednesday 26.06</Text>
     </TouchableOpacity>           

     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('ThursdayScreen')} 
         style={buttonStyle.containerStyle}> 
                                 
         <Text style={textStyle.titleText}> Thursday 27.06</Text>
     </TouchableOpacity> 

     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('FridayScreen')} 
         style={buttonStyle.containerStyle}> 
                                 
         <Text style={textStyle.titleText}> Friday 28.06</Text>
     </TouchableOpacity>  

     <TouchableOpacity 
    //  onPress={() => 
    //  this.props.navigation.navigate('SaturdayScreen')} 
         style={buttonStyle.containerStyle}> 
                                 
         <Text style={textStyle.titleText}> Saturday 29.06</Text>
     </TouchableOpacity>  

     {/* <Button onPress={() => 
     this.props.navigation.navigate('Monday')} 
     title="Monday 24.06"/> */}
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