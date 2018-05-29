import React, {Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
}from 'react-native'
import {Icon} from 'react-native-elements';
import nav_style from '../components/nav_style';

class DayScreen extends Component {

    
    

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => 
                this.props.navigation.navigate('Activity')} 
                    style={styles.containerStyle}>    
                        <Text style={styles.textStyleSmall}>8:00 - 9:00 AM</Text>  
                        <Text style={styles.textStyleSmall2}>Hotel Patchwork Canteen</Text>
                        <Text style={styles.textStyle}>BREAKFAST</Text>             
                        
                    
                </TouchableOpacity> 

                <TouchableOpacity onPress={() => 
                this.props.navigation.navigate('Activity')} 
                    style={styles.containerStyle}>    
                        <Text style={styles.textStyleSmall}>11:00 - 14:00 AM</Text>  
                        <Text style={styles.textStyleSmall2}>CZIiTT</Text>
                        <Text style={styles.textStyle}>LECTURES</Text>             
                        
                    
                </TouchableOpacity> 

            <View style={{top: 340, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>
            
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
                <Text style={{fontSize: 10, textAlign: 'center'}}>Map</Text>
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

const styles = StyleSheet.create({
    textStyle: {
      top: '30%',
      marginLeft: 20,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#4a4a4a',
      textAlign: 'left',
      //justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      //alignItems: 'center',
      //textAlignVertical: 'auto',
      
    },

    textStyleSmall: {
        //marginTop: -20,
        right: 15,
        top: '25%',
        fontSize: 12,
        //fontWeight: 'bold',
        color: '#4a4a4a',
        //textAlign: 'right',
        //justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        //alignItems: 'center',
        //textAlignVertical: 'center',
        
      },

      textStyleSmall2: {
        //marginTop: -20,
        right: 15,
        top: '55%',
        fontSize: 12,
        //fontWeight: 'bold',
        color: '#4a4a4a',
        //textAlign: 'right',
        //justifyContent: 'center',
        flex: 1,
        position: 'absolute',
        //alignItems: 'center',
        //textAlignVertical: 'center',
        
      },


    containerStyle: {
      height: 60,
      width: '90%',
      //borderWidth: 1,
      backgroundColor: '#ECECEC',
      borderBottomWidth: 0,
      borderRadius: 5, 

      ...Platform.select({
        ios: {
          shadowColor: '#707070',
          //shadowOffset: { height: 3 },
          shadowOpacity: 1, //from 0 to 1
          shadowRadius: 2,
        },
        android: {
        elevation: 5
        },
      }),

      //shadowOffset: { width: 2, height: 2 },
    
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: 5,
      marginBottom: 5,
      alignSelf: 'center',
      justifyContent: 'flex-end',
    }
})

//module.export = MondayScreen;
export default DayScreen;