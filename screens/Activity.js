import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  Button
}
  from 'react-native';

import Desc from './Desc';
import { Icon } from 'react-native-elements';

import nav_style from '../components/nav_style';
import PopupDialog from 'react-native-popup-dialog';

class Activity extends Component {


  render() {
    return (

      <View>
        
        
          <Image
            source={require('../assets/images/patch.jpg')}
            style={{ width: '100%', height: 150 }}
          />


          <View style={{backgroundColor: '#fff',
    height: 60,
    width: '100%',
    borderRadius: 1}}>
            <Text style={styles.textStyle}>CZIiTT PW Floor, Room 4.05</Text>
            <Text style={styles.textStyleSmall}>4 Rektorska Street</Text>
          </View>
        


          <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}>
              <Icon
                size={26}
                name='location'
                type='octicon'
                color='#1D3557'/>
              <Text style={styles.textStyleSmall5}> Check on map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { this.popupDialog.show() }}>
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



          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }} >
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Desc')}>
              <Text style={styles.textStyleSmall2}>11:00 - 11:15 AM</Text>
              <Text style={styles.textStyleSmall3}>"Presentation #1"</Text>
              <Text style={styles.textStyleSmall4}>Marcelina Ziarno</Text>
            </TouchableOpacity>


            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Desc')}>
              <Text style={styles.textStyleSmall2}>11:15 - 11:30 AM</Text>
              <Text style={styles.textStyleSmall3}>"Presentation #2"</Text>
              <Text style={styles.textStyleSmall4}>Alicja Konkol</Text>
            </TouchableOpacity>
          </View>


          <View style={{ top: 145, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', }}>

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

          <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} height={300}>
          <View>
            <Image source={require('../assets/images/floor4.png')}/>
          </View>
        </PopupDialog>
        </View>
      

    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
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
    alignSelf: 'center',
    marginBottom: 5,
  },

  containerStyle: {
    backgroundColor: '#fff',
    height: 60,
    width: '100%',
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
    top: 5,
    height: 60,
    width: '94%',
    borderRadius: 5,
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
    width: '45%',
    height: 60,
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
    left: 3,
    justifyContent: 'center',
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
    width: '45%',
    height: 60,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
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
    top: 70,
    height: 60,
    width: '94%',
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