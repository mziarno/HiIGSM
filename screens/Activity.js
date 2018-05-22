import React, {Component } from 'react'
import{
    View,
    Text,
    StyleSheet,
    platform,
    Image,
    TextInput,
    Platform,
    TouchableOpacity
}
    from 'react-native';
    
    import Desc from './Desc';
    import {Icon} from 'react-native-elements';

class Activity extends Component {



    
    render(){
        return(
            
            <View>
           
                <Image
                    source = {require('../assets/images/Monix.jpg')}
                    style = {{width: '100%', height: 150}}
                />  
                
                <View 
                    style={styles.containerStyle}>     
                        <Text style={styles.textStyle}>CZIiTT PW Floor, Room 4.05</Text>
                        <Text style={styles.textStyleSmall}>4 Rektorska Street</Text>                              
                </View>

                <TouchableOpacity 
                onPress={() => 
                this.props.navigation.navigate('Desc')} 
                    style={styles.containerStyle3}>    
                        <Icon 
                           name='location'
                           type='octicon'
                           color='#1D3557'
                           //position='center'
                        />
                </TouchableOpacity>
                
                <TouchableOpacity 
                onPress={() => 
                this.props.navigation.navigate('Desc')} 
                    style={styles.containerStyle}>    
                        <Text style={styles.textStyleSmall2}>11:00 - 11:15 AM</Text>  
                        <Text style={styles.textStyleSmall3}>"Presentation #1"</Text>
                        <Text style={styles.textStyleSmall4}>Marcelina Ziarno</Text>
                </TouchableOpacity>


                <TouchableOpacity 
                onPress={() => 
                this.props.navigation.navigate('Desc')} 
                    style={styles.containerStyle}>    
                        <Text style={styles.textStyleSmall2}>11:15 - 11:30 AM</Text>  
                        <Text style={styles.textStyleSmall3}>"Presentation #2"</Text>
                        <Text style={styles.textStyleSmall4}>Alicja Konkol</Text>
                </TouchableOpacity>
                
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
      top: '15%',
      left: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#4a4a4a',
      textAlign: 'left',
      //justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
     
    },

    textStyleSmall: {
        //marginTop: -20,
        left: 20,
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

      textStyleSmall2: {
        //marginTop: -20,
        left: 20,
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

      textStyleSmall3: {
        //marginTop: -20,
        left: '40%',
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

      textStyleSmall4: {
        //marginTop: -20,
        left: '40%',
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
      width: '100%',
      //borderWidth: 1,
      borderColor: '#ddd',
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
      //marginTop: 5,
      marginBottom: 5,
      alignSelf: 'center',
      justifyContent: 'flex-end',
    },

    containerStyle2: {
        height: 60,
        width: '90%',
        //borderWidth: 1,
        borderColor: '#ddd',
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
 
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
        justifyContent: 'flex-end',
      },

      containerStyle3: {
        left: 0,
        height: 60,
        width: '50%',
        borderColor: '#ddd',
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
      
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 5,
        marginBottom: 5,
        //alignSelf: 'left',
        justifyContent: 'flex-end',
      },

      containerStyle4: {
        height: 60,
        left: '50%',
        width: '50%',
        //borderWidth: 1,
        borderColor: '#ddd',
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
        //alignSelf: 'left',
        justifyContent: 'flex-end',
      }
})


export default Activity;