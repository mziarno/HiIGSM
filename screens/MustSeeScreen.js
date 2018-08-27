import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,FlatList, StatusBar} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import styles from '../components/styles';
import nav_style from '../components/nav_style';
import * as firebase from 'firebase';

require("firebase/database");
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
    const typeSet = new Set;

    let mustSee = this.state.mustSee;
    const aaa = [];
  
    Object.keys(mustSee).map(function (placeKey, index) {
      let attributes = mustSee[placeKey];
      //let attributesArray = [];
      let mustSeeType = ' '
      Object.keys(attributes).map(function (attributeNameKey, index) {

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
    })

    const bbb = aaa.filter((x, i, a) => a.indexOf(x) == i)

    return (
      <View>
        <StatusBar barStyle="light-content" />
        <View style={{ height: '83%' }}>
          <View>
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
