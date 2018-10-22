import React, { Component } from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import styles from '../components/styles';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';
import text_style from '../components/text_style'
require("firebase/database");

class Timetable extends Component {

    constructor() {
        super();
        this.state = {
            weekDays: {},
            iterator: 1
        };
    }

    componentDidMount() {
        // Firebase connection part
        const rootRef = firebase.database().ref();
        const weekDaysRef = rootRef.child('weekDays').orderByChild('id');

        // ====== Week plan structure parser ======
        weekDaysRef.once('value', snap => {

            snap.forEach(child => {
                let events = child.val();
                let weekDay = child.key;
                let newEvent = {};
                Object.keys(events).map((eventKey) => {
                    let event = events[eventKey];
                    let newInfos = {};

                    if (typeof event === "object") {
                        Object.keys(event).map((eventInfoKey) => {
                            newInfos[eventInfoKey] = event[eventInfoKey];
                        })
                        newEvent[eventKey] = event;
                    }
                })
                let lastState = this.state.weekDays
                lastState[weekDay] = newEvent
                let newState = lastState
                this.setState({
                    weekDays: newState
                })

            })

        })
    }

    render() {
        const {navigate, state} = this.props.navigation;
        let weekDays = this.state.weekDays;
        if (weekDays === 0) {
            return null;
        }

        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <View style={{height: '90%'}}>

                    <View>
                        {Object.keys(weekDays).map((dayNameKey) => {

                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DayScreen', {events: weekDays[dayNameKey]})}>
                                    <View style={styles.whiteMedium_Container}>
                                        <Text style={text_style.textDay}> {dayNameKey} </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                        }
                    </View>
                </View>
                <View style={{ top: 5, justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>
                    <HomeButton
                        color='#1D3557'
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <MapButton
                        color='#1D3557'
                        onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <TimetableButton
                        color='#cc0033'
                        onPress={() => this.props.navigation.navigate('Timetable')}
                    />
                </View>
            </View>
        )
    }
}

export default Timetable;