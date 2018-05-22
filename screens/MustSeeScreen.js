import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity, 
        Image, FlatList, StatusBar} from 'react-native';
import {CheckBox} from 'react-native-elements';

import styles from '../components/styles';
import nav_style from '../components/nav_style';
import NavigationBtn from '../components/NavigationBtn';
import Places from './Places';


// const styles = require('../styles.js')
const items = ['Museums', 'Galleries', 'Monuments'];
const places = [{
  title: "Polin ",
  type: "Museum",
  coordinate: {latitude: 52.220521, longitude: 21.010488}
},
{
  title: "aaa ",
  type: "Gallery",
  coordinate: {latitude: 52.220521, longitude: 21.010488}
}];

//const type = places.filter(x => x.type === 'museum');


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
                textStyle={styles.text}
                checkedColor='#4A4A4A'
                uncheckedColor='#4A4A4A'
              />
            )}
            />
        </View>
    
        <View>
          <View style={styles.white_Left_Container}>
            <TouchableOpacity>
            <View style={styles.icon}>
              <Image source={require('../assets/icons/map.png')} style={{width: 37, height: 37 }}/> 
            </View>
            <Text style={styles.text2}> Show On Map </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.white_Right_Container}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Places')}>
            <View style={styles.icon}>
              <Image source={require('../assets/icons/list.png')} style={{width: 30, height: 30}}/> 
            </View>
            <Text style={styles.text2}> Show List </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
        <View style={{top: 220}}>
            
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

export default MustSee;
