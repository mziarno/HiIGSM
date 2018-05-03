import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, CheckBox, TouchableOpacity, Image} from 'react-native';
// import { CheckBox } from 'react-native-elements';
// import { CheckBox } from 'react-native-check-box';


class MustSee extends Component {
  static navigationOptions = {
    title: 'MustSee',
    headerStyle: {
      backgroundColor: '#1D3557'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  constructor(){
    super();
    this.state={
      check:false
    }
  }

  render() {
    return (
      // <ScrollView>
      <View style={styles.container}>
      <View style={styles.emailContainer}>
      <Text style={styles.text}>Museum </Text>
     {/* <CheckBox value={this.state.check}     
    /> */}
      </View>

      <View style={styles.emailContainer}>
      <Text style={styles.text}>Galleries </Text>
      </View>

      <View style={styles.emailContainer}>
      <Text style={styles.text}>Monuments </Text>
      </View>

      {/* <View style={styles.emailContainer}>
      <Text>Museum </Text>
      </View>
      <View style={styles.emailContainer}>
      <Text>Museum </Text>
      </View> */}
      <View>
      
      <View style={styles.seeOnMapContainer}>
      <TouchableOpacity>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/map.png')} style={{width: 37, height: 37 }}/> 
      </View>
      <Text style={styles.text2}> Show On Map </Text>
      </TouchableOpacity>
      </View>

      
      <View style={styles.seeListContainer}>
      <TouchableOpacity>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/list.png')} style={{width: 37, height: 37}}/> 
      </View>
      <Text style={styles.text2}> Show List </Text>
      </TouchableOpacity>
      </View>
      
      </View>
      

    </View>
   

    )
  }
}
 

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height:250,
    top: 10,
  },
emailContainer:{
  backgroundColor: '#fff',
  width: '90%',
  height: 70,
  position: 'relative',
  marginLeft: '5%',
  marginRight: '5%',
  //marginTop:'5%',
  marginBottom: 5,
  borderRadius: 5,
  justifyContent: 'center',
  ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 15
      },
    }),
  //marginTop:10
},
seeOnMapContainer:{
  backgroundColor: '#fff',
  width: '40%',
  height: 70,
  position: 'absolute',
  marginRight: '5%',
  marginBottom: 20,
  borderRadius: 5,
  left: '5%',
  justifyContent: 'flex-end',
  ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 15
      },
    }),
  //marginTop:10
},
seeListContainer:{
  backgroundColor: '#fff',
  width: '40%',
  height: 70,
  position: 'absolute',
  marginLeft: '5%',
  //marginRight: '5%',
 // marginBottom: 20,
  borderRadius: 5,
  justifyContent: 'flex-end',
  right: '5%',

  ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 15
      },
    }),
  //marginTop:10
},
text:{
  fontSize: 20,
  color: '#4A4A4A',
  fontWeight: 'bold',
  textAlignVertical: 'center',
  marginLeft: 10,
  //marginTop: 25,
},
text2:{
  fontSize: 17,
  color: '#4A4A4A',
  //fontWeight: 'bold',
  textAlign: 'center',
  //marginLeft: 10,
  //justifyContent: 'flex-end',
  //marginTop: 5,
  marginBottom: 5,
},
icon:{
  position: 'relative',
  alignItems: 'center'
  //marginTop:5,
}


});


export default MustSee;
