import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements';
import nav_style from '../components/nav_style';
import * as firebase from 'firebase';
import ApiKeys from '../ApiKeys'
import styles from '../components/styles';

class DayScreen extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         message: ' ',
    //         weekDays: {}
    //     };
    // }

    // componentDidMount() {
    //     const rootRef = firebase.database().ref();
    //     const weekDaysRef = rootRef.child('weekDays');

    //     weekDaysRef.once('value', snap => {
    //         let newStateWeekDays = [];
    //         snap.forEach(child => {     //child - dzien tyg
    //             let events = child.val();
    //             let weekDay = child.key
    //             let newEvent = {}
    //             Object.keys(events).map((key) => {
    //                 let event = events[key]
    //                 newEvent[key] = event
    //             })

    //             let lastState = this.state.weekDays

    //             lastState[weekDay] = newEvent
    //             let newState = lastState
    //             this.setState({
    //                 weekDays: newState
    //             })
    //         })
    //     })
    // }

    render() {
        const { navigation } = this.props
        // const DayScreen = (this.props)
        const events = navigation.getParam('events', 'BRAK DANYCH :(');
        var pageViews = [];
        

        let timee = " - "
        let placee = ''
        let eventsArray = [];

        Object.keys(events).map((eventName, index) => {
            singleEvent = events[eventName];
            eventInfosArray = [];
            timee = " - "
            placee = ''
            //console.error("halo")
            
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
                <Text style={styles.placeText}>{placee}</Text>
            );
            eventsArray.push(
                // ===== Event card =====
                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Activity', { activity: events[eventName] })}>
                    <View style={styles.greyMedium_Container}>
                        <Text style={styles.eventText}>{eventName}</Text>
                        {eventInfosArray}
                    </View>
                </TouchableOpacity>

            );     
        

        pageViews.push(
            // ===== Day page =====
            <View>

                <View style={{ height: '90%' }}>
                        {eventsArray}
                   
                </View>
            </View>
        )
    })
         const time = timee
         const place = placee

        return (
            <View>
                <View style={{ height: '83%' }}>
                    <ScrollView>

                        <View>

                            {pageViews}

                        </View>

                        {/* {/* {Object.keys(events).map((dayNameKey) => {
                        // let dayEvents = weekDays[dayNameKey]
                        return ( */}


                        {/* {Object.keys(events).map((eventName) => {
                            return (
                                //<View style={styles.firstContainer}>
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('Activity', { activity: events[eventName] })}>
                                    <View style={styles.timetable_Container}>
                                        <Text style={styles.eventText}> {eventName} </Text>
                    
                                    </View>
                                </TouchableOpacity>
                            )
                        }

                            
                        )}  */}
                    </ScrollView>
                </View>


                <View style={{ top: '5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>

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
                            <Text style={{ fontSize: 10, textAlign: 'center' }}>Map</Text>
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
};

//module.export = MondayScreen;
export default DayScreen;