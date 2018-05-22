import React, {Component} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        Platform, 
        TouchableOpacity, 
        Image, 
        FlatList,
        StatusBar
        } from 'react-native';
import { CheckBox } from 'react-native-elements';
import MapScreen from './Map';
import styles from '../components/styles';
import NavigationBtn from '../components/NavigationBtn';


// const styles = require('../styles.js')
const items = ['Museums', 'Galleries', 'Monuments'];

class MustSee extends Component {
 
  // constructor(props) {
  //   super(props);
  //   this.state = { checked: false };
  // }

  state = {
    checked: [],
  };

  checkItem = item => {
    const { checked } = this.state;

    if (!checked.includes(item)) {
      this.setState({ checked: [...checked, item] });
    } else {
      this.setState({ checked: checked.filter(a => a !== item) });
    }
  };
  
  render() {
    return (
      <View style={styles.background}>
      <StatusBar barStyle="light-content"/>
      <View>
        <FlatList
          data={items}
          extraData={this.state}
          renderItem={({ item }) => (
            <CheckBox
              title={item}
              onPress={() => this.checkItem(item)}
              checked={this.state.checked.includes(item)}
              containerStyle={styles.whiteBigContainer}
              textStyle={styles.textGrey}
              checkedColor='#4A4A4A'
              uncheckedColor='#4A4A4A'
            />
          )}
          />
          </View>
  
      <View>
      <View style={styles.white_Left_Container}>
      <TouchableOpacity  onPress={()=>this.props.navigation.navigate('MapScreen') }>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/map.png')} style={{width: 37, height: 37 }}/> 
      </View>
      <Text style={styles.text2}> Show On Map </Text>
      </TouchableOpacity>
      </View>

      <View style={styles.white_Right_Container}>
      <TouchableOpacity>
      <View style={styles.icon}>
        <Image source={require('../assets/icons/list.png')} style={{width: 37, height: 37}}/> 
      </View>
      <Text style={styles.text2}> Show List </Text>
      </TouchableOpacity>
      </View>
      
      </View>
      <NavigationBtn/>  
        
    </View>
   

    )
  }
}
 
//const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     width: '100%',
//      height:250,
//      top: 10,
//    },
//  placesContainer:{
//    backgroundColor: '#fff',
//    width: '90%',
//    height: 70,
//    position: 'relative',
//    marginLeft: '5%',
//    marginRight: '5%',
//    borderRadius: 5,
//    justifyContent: 'center',
//    ...Platform.select({
//        ios: {
//          shadowColor: '#707070',
//          shadowOffset: { height: 3 },
//          shadowOpacity: 1,
//          shadowRadius: 3,
//        },
//        android: {
//        elevation: 5
//        },
//      }),
//  },
//  seeOnMapContainer:{
//    backgroundColor: '#fff',
//    width: '40%',
//    height: 70,
//    position: 'absolute',
//    marginRight: '5%',
//    marginTop: 5,
//    borderRadius: 5,
//    left: '5%',
//    justifyContent: 'flex-end',
//    ...Platform.select({
//        ios: {
//          shadowColor: '#707070',
//          shadowOffset: { height: 3 },
//          shadowOpacity: 1,
//          shadowRadius: 3,
//        },
//        android: {
//          elevation: 5
//        },
//      }),
//  },
//  seeListContainer:{
//    backgroundColor: '#fff',
//    width: '40%',
//    height: 70,
//    position: 'absolute',
//    marginLeft: '5%',
//    marginTop: 5,
//    borderRadius: 5,
//    justifyContent: 'flex-end',
//    right: '5%',

//    ...Platform.select({
//        ios: {
//          shadowColor: '#707070',
//          shadowOffset: { height: 3 },
//          shadowOpacity: 1,
//          shadowRadius: 3,
//        },
//        android: {
//          elevation: 5
//        },
//      }),
  
//  },
//  text:{
//    fontSize: 20,
//    color: '#4A4A4A',
//    fontWeight: 'bold',
//    textAlignVertical: 'center',
//    marginLeft: 15,
 
//  },
//  text2:{
//    fontSize: 17,
//    color: '#4A4A4A',
//    textAlign: 'center',
//    marginBottom: 5,
//  },
//  icon:{
//    position: 'relative',
//    alignItems: 'center'
//  }


//  });


export default MustSee;
