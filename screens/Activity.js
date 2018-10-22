import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
}from 'react-native';
import { Icon } from 'react-native-elements';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';
import PopupDialog, { SlideAnimation, ScaleAnimation, DialogTitle } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation(2);

class Activity extends Component {

  render() {

    const { navigation } = this.props
    const eventDetails = navigation.getParam('activity', 'BRAK DANYCH :(');
    //console.log(eventDetails)

    let address = ''
    let placeDetails = ''
    let eventDesc = ''

    //let eventsDetailArray = [];

    Object.keys(eventDetails).map((eventDetailKey, index) => {
      let eventDetailValue = eventDetails[eventDetailKey];
      let eventDetailArray = [];

      if (eventDetailKey == 'address') {
        // console.error(eventDetailValue)
        address = eventDetailValue
      }
      else if (eventDetailKey == 'placeDetails') {
        placeDetails = eventDetailValue
      }
      else if (eventDetailKey == 'activityDetails') {
        eventDesc = eventDetailValue
      }
    })
    const adr = address
    const placeDet = placeDetails
    const eventDsc = eventDesc

    return (
      <View>
        <View style={{ height: '90%' }}>
          <View>
            <Image
              source={require('../assets/images/patch.jpg')}
              style={{ width: '100%', height: 150 }} />
            <View
              style={styles.containerStyle}>
              <Text style={styles.textStyle}>{placeDet}</Text>
              <Text style={styles.textStyleSmall}>{adr}</Text>
            </View>
          </View>

          {/* SHOW ON MAP AND BUILDING PLAN */}
          <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Map')}
              style={styles.containerStyle3}>
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
              />
              <Text style={styles.textStyleSmall5}>Building plan</Text>

            </TouchableOpacity>
          </View>


          {/* ACTIVITY DETAILS */}
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }} >
            <TouchableOpacity
              style={styles.containerStyle2}>
              <Text style={styles.textDesc}>{eventDsc}</Text>
            </TouchableOpacity>
          </View>
        </View>


          <View style={{top: 5, justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>
                    <HomeButton
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <MapButton
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <TimetableButton
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Timetable')}
                    />
          </View>
     

     
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          dialogTitle={<DialogTitle title="Floor IV" />}
          containerStyle={{ elevation: 10 }}
          dialogAnimation={slideAnimation}
          height={0.7}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../assets/images/poziom4.jpg')}
              style={{ resizeMethod: 'resize', resizeMode: 'contain', height: '93%' }} />
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'left',
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },

  textDesc2:{
    fontSize: 17,
      color: '#4A4A4A',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      marginLeft: 10
},

  textDesc: {
    top: '40%',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'center',
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