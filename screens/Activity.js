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
import PopupDialog, {SlideAnimation, ScaleAnimation, DialogTitle} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation(2);

class Activity extends Component {



  render() {
    return (

      <View>
        <View style={{ height: '83%' }}>
          <View>
            <Image
              source={require('../assets/images/patch.jpg')}
              style={{ width: '100%', height: 150 }} />

            <View
              style={styles.containerStyle}>
              <Text style={styles.textStyle}>CZIiTT PW Floor, Room 4.05</Text>
              <Text style={styles.textStyleSmall}>4 Rektorska Street</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
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
              <Text style={styles.textStyleSmall5}>Check on map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.containerStyle4}
              onPress={() =>
                this.popupDialog.show()}>
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
              <Text style={styles.textStyleSmall2}>11:15 - 11:30 AM </Text>
              <Text style={styles.textStyleSmall3}>"Presentation #2"</Text>
              <Text style={styles.textStyleSmall4}>Alicja Konkol</Text>
            </TouchableOpacity>
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

        
        <PopupDialog 
          ref={(popupDialog) => { this.popupDialog = popupDialog; }} 
          dialogTitle={<DialogTitle title="Floor IV"/>}
          containerStyle={{ elevation: 10 }} 
          dialogAnimation={slideAnimation} 
          height={0.7}>
          <View style={{alignItems: 'center'}}>
            <Image 
              source={require('../assets/images/poziom4.jpg')}  
              style={{resizeMethod: 'resize', resizeMode: 'contain', height: '93%'}} />
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
    elevation: 3,
  },

  containerStyle2: {

    backgroundColor: '#fff',
    top: 5,
    height: 60,
    width: '94%',
    borderRadius: 5,
    elevation: 3,
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
    elevation: 3,
  },

  containerStyle4: {
    backgroundColor: '#fff',
    width: '45%',
    height: 60,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'center',
    right: 3,
    elevation: 3,
  },

  containerStyle5: {
    backgroundColor: '#fff',
    top: 70,
    height: 60,
    width: '94%',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    borderRadius: 5,
    position: 'absolute',
    elevation: 3,
  },
})


export default Activity;