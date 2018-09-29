import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native'
import * as firebase from 'firebase';
import styles from '../components/styles';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';

class DayScreen extends Component {

    render() {
        const {navigation} = this.props;
        const events = navigation.getParam('events', 'BRAK DANYCH :('); 
    
        let timee = " - "
        let placee = ''
        let eventsArray = [];

        Object.keys(events).map((eventName, index) => {
            singleEvent = events[eventName];
            eventInfosArray = [];
            timee = " - "
            placee = ''  
            
            Object.keys(singleEvent).map(function (eventInfoKey, index) {
            
                if (eventInfoKey == 'startTime') {
                timee = singleEvent[eventInfoKey] + timee
                }
                else if (eventInfoKey== 'endTime') {
                    timee = timee + singleEvent[eventInfoKey]
                }
                else if (eventInfoKey == 'place') {
                    placee = singleEvent[eventInfoKey]
                }
            })

            eventInfosArray.push(
                <Text style={styles.timeText}>{timee}</Text>,
                <Text style={styles.placeText}>{placee}</Text>,            
            );
            eventsArray.push(
                // ===== Event card =====
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity', { activity: events[eventName] })}>
                    <View style={styles.greyMedium_Container}>
                        <Text style={styles.eventText}>{eventName}</Text>
                        {eventInfosArray}
                    </View>
                </TouchableOpacity>
            ); 

    })
         const time = timee
         const place = placee

        return (
            <View>
                <StatusBar barStyle="light-content" />
                <View style={{ height: '90%' }}>
                    <ScrollView>
                        <View>
                            {eventsArray}
                        </View>
                    </ScrollView>
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
            </View>


        )
    }
};

export default DayScreen;