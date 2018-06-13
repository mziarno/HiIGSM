import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity,
  Image, FlatList, StatusBar, ListView
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-elements';

import styles from '../components/styles';
import nav_style from '../components/nav_style';
import NavigationBtn from '../components/NavigationBtn';
import Places from './Places';
import * as firebase from 'firebase';
import ApiKeys from '../ApiKeys';

require("firebase/database");



//const type = places.filter(x => x.type === 'museum');
// const aaa = [];
// const typeSet = new Set;

class MustSee extends Component {

  constructor() {
    super();
    this.state = {
      mustSee: {},
      checked: []
    };
  }
  componentDidMount() {
    // Firebase connection part
    const rootRef = firebase.database().ref();
    const mustSeeRef = rootRef.child('mustSee');


    mustSeeRef.once('value', snap => {
      //let newStateMustSee = [];
      snap.forEach(child => {
        let attributes = child.val();
        let places = child.key;
        let newAttribute = {};
        Object.keys(attributes).map((attributeKey) => {
          let attribute = attributes[attributeKey];

          newAttribute[attributeKey] = attribute;
        })

        let lastState = this.state.mustSee
        lastState[places] = newAttribute
        let newState = lastState
        this.setState({
          mustSee: newState
        })
      })
    })
}


 

  checkItem = item => {
    const { checked } = this.state;

    if (!checked.includes(item)) {
      this.setState({ checked: [...checked, item] });
    } else {
      this.setState({ checked: checked.filter(a => a !== item) });
    }
  };

  render() {

    if (this.state.mustSee === 0) {
      return null;
    }

    // let screenWidth = Dimensions.get('window').width;
    // let screenHeight = Dimensions.get('window').height;
    // var pageViews = [];
    const typeSet = new Set;

    let mustSee = this.state.mustSee;
    const aaa = [];
    //let i = 0;
    Object.keys(mustSee).map(function (placeKey, index) {
      let attributes = mustSee[placeKey];
      let attributesArray = [];
      let mustSeeType = ' '
      Object.keys(attributes).map(function (attributeNameKey, index) {
        //singleEvent = events[eventNameKey];

        if (attributeNameKey == 'type') {
          mustSeeType = attributes[attributeNameKey]

          typeSet.add(
            mustSeeType
          );

         
          console.log(mustSeeType)
        } 
      })
      typeSet.forEach((element, index, array) => {
        aaa.push(element)
      })
      

      // console.warn(typeSet.size())

    })

    const bbb = aaa.filter((x, i, a) => a.indexOf(x) == i)



    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={{ height: '83%' }}>
          <View>
            {/* <Text>{typeSet}</Text> */}
            <FlatList
              data={bbb}
              extraData={this.state}
              renderItem={({ item }) => (
                <CheckBox 
                  title={item}
                  onPress={() => this.checkItem(item)}
                  checked={this.state.checked.includes(item)}
                  containerStyle={styles.whiteBigContainer}
                  textStyle={styles.text1}
                  checkedColor='#4A4A4A'
                  uncheckedColor='#4A4A4A'
                />
              )}
            />
          </View>

          <View>
            <View style={styles.white_Left_Container}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}>
                <Icon
                  name='marker'
                  type='foundation'
                  color='#1D3557'
                  size={35} />
                <Text style={styles.text2}> Show On Map </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.white_Right_Container}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Places')}>
                <Icon
                  name='list'
                  color='#1D3557'
                  size={40} />
                <Text style={styles.text2}> Show List </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={{ top: '5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', }}>

          <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon
                name='home'
                type='octicon'
                color='#1D3557'
                size={36} />
              <Text style={{ fontSize: 10, color: '#1D3557', textAlign: 'center' }} >Home</Text>
            </TouchableOpacity>
          </View>


          <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Map')} >
              <Icon
                name='marker'
                type='foundation'
                color='#1D3557'
                size={36} />
              <Text style={{ fontSize: 10, color: '#1D3557', textAlign: 'center' }}>Map</Text>
            </TouchableOpacity>
          </View>

          <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Timetable')}>
              <Icon
                name='calendar'
                type='octicon'
                color='#1D3557'
                size={36} />
              <Text style={{ fontSize: 10, color: '#1D3557', textAlign: 'center' }}>Timetable</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  }
}

export default MustSee;
