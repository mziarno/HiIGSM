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
          <View>
               <Image
                      source = {require('../assets/images/patch.jpg')}
                      style = {{width: '100%', height: 150}}
                  />  
              

              <View 
                  style={styles.containerStyle}>     
                      <Text style={styles.textStyle}>CZIiTT PW Floor, Room 4.05</Text>
                      <Text style={styles.textStyleSmall}>4 Rektorska Street</Text>                              
              </View>
          </View>

          <View >
                  <TouchableOpacity 
                  onPress={() => 
                  this.props.navigation.navigate('Map')} 
                  style={styles.containerStyle3}
                      >    
                          <Icon 
                          size={26}
                          name='location'
                          type='octicon'
                          color='#1D3557'
                          />
                          <Text style={styles.textStyleSmall5}> Check on map</Text>
                  </TouchableOpacity>
              
                  <TouchableOpacity 
                  style={styles.containerStyle4}
                  onPress={() => 
                  this.props.navigation.navigate('Desc')}>    
                          <Icon 
                          name='map'
                          type='font-awesome'
                          color='#1D3557'
                          fontSize='20'
                          //marginBottom='10'
                          //position='center'
                          />
                          <Text style={styles.textStyleSmall5}>Building plan</Text>
                  </TouchableOpacity>
          </View>

          <View>
              <TouchableOpacity 
              onPress={() => 
              this.props.navigation.navigate('Desc')} 
                  style={styles.containerStyle2}>    
                      <Text style={styles.textStyleSmall2}>11:00 - 11:15 AM</Text>  
                      <Text style={styles.textStyleSmall3}>"Presentation #1"</Text>
                      <Text style={styles.textStyleSmall4}>Marcelina Ziarno</Text>
              </TouchableOpacity>


          <TouchableOpacity 
          onPress={() => 
          this.props.navigation.navigate('Desc')} 
              style={styles.containerStyle5}>    
                  <Text style={styles.textStyleSmall2}>11:15 - 11:30 AM</Text>  
                  <Text style={styles.textStyleSmall3}>"Presentation #2"</Text>
                  <Text style={styles.textStyleSmall4}>Alicja Konkol</Text>
          </TouchableOpacity>
      </View>
      </View>

        )
    }
}

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor: 'red'
},

textStyle: {
  top: '15%',
  left: 20,
  fontSize: 16,
  fontWeight: 'bold',
  color: '#4a4a4a',
  textAlign: 'left',
  flex: 1,
  flexDirection: 'row',
  position: 'absolute',

  
},

textStyleSmall: {
    left: 20,
    top: '55%',
    fontSize: 12,
    color: '#4a4a4a',
    flex: 1,
    position: 'absolute',  
  },

  textStyleSmall2: {
    left: 20,
    top: '25%',
    fontSize: 13,
    color: '#4a4a4a',
    flex: 1,
    position: 'absolute',
    
  },

  textStyleSmall3: {
    left: '35%',
    top: '25%',
    fontSize: 13,
    color: '#4a4a4a',
    flex: 1,
    position: 'absolute',
    
  },

  textStyleSmall4: {
    left: '35%',
    top: '55%',
    fontSize: 13,
    color: '#4a4a4a',
    flex: 1,
    position: 'absolute',     
  },

  textStyleSmall5: {
    top: '65%',
    //left:'30%',
    fontSize: 13,
    color: '#4a4a4a',
    flex: 1,
    position: 'absolute',
    alignSelf:'center',
    marginBottom: 5,     
  },

containerStyle: {
  backgroundColor: '#fff',
  height: 60,
  width: '98%',
  borderRadius: 1, 

  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOpacity: 1, //from 0 to 1
      shadowRadius: 2,
    },
    android: {
    elevation: 5
    },
  }),
},

containerStyle2: {

  backgroundColor: '#fff',
  top: 70,
  left: 3,
  right: 3,
  height: 60,
  width: '98%',
  borderRadius: 5,
  position:'absolute', 

  ...Platform.select({
    ios: {
      shadowColor: '#707070',
      shadowOpacity: 1, //from 0 to 1
      shadowRadius: 2,
    },
    android: {
    elevation: 5
    },
  }),
},

  containerStyle3: {
 
    backgroundColor: '#fff',
    width: '48%',
    height: 60,
    position: 'absolute',
    marginTop: 5,
    borderRadius: 5,
    left: 3,
    justifyContent: 'flex-end',
    ...Platform.select({
        ios: {
          shadowColor: '#707070',
          shadowOffset: { height: 3 },
          shadowOpacity: 1,
          shadowRadius: 3,
        },
        android: {
          elevation: 5
        },
      }),

    },

    containerStyle4: {
        backgroundColor: '#fff',
        width: '48%',
        height: 60,
        position: 'absolute',
        marginTop: 5,
        borderRadius: 5,
        justifyContent: 'flex-end',
        right: 3,
      
        ...Platform.select({
            ios: {
              shadowColor: '#707070',
              shadowOffset: { height: 3 },
              shadowOpacity: 1,
              shadowRadius: 3,
            },
            android: {
              elevation: 5
            },
          }),
    
  },

  containerStyle5: {
    backgroundColor: '#fff',
    top: 135,
    right: 3,
    left: 3,
    height: 60,
    width: '98%',
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
  
    // marginLeft: '5%',
    // marginRight: '5%',
    // marginTop: 5,
    // marginBottom: 5,
    // justifyContent: 'flex-end',
    position: 'absolute'
  },
})


export default Activity;