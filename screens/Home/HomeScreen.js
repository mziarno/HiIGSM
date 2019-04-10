import React, {Component} from 'react'
import * as firebase from 'firebase';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from '../../components/styles';
import text_style from '../../components/text_style'
import TimetablePager from "../../components/Home/TimetablePager";

require("firebase/database");

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            message: ' ',
            weekDays: {},
            iterator: 1,
            // time: ''
        };
    }

    componentDidMount() {
        // Firebase connection part
        const rootRef = firebase.database().ref();
        const messRef = rootRef.child('message');
        const weekDaysRef = rootRef.child('weekDays').orderByChild('id');
        // ====== Week plan structure parser ======
        weekDaysRef.once('value', snap => {
            let newStateWeekDays = [];
            snap.forEach(child => {
                let events = child.val();
                let weekDay = child.key;
                let newEvent = {};

                Object.keys(events).map((eventKey) => {
                    let event = events[eventKey];
                    let newInfos = {};

                    if (typeof event === "object") { //Sometimes event is type of number and other strange things - probably problem with data
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
        // ====== Parser end ======
        messRef.on('value', snap => {
            this.setState({
                message: snap.val()
            });
        });
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <View style={{height: '90%'}}>
                    <TouchableOpacity onPress={() => navigate('Notification')}>
                        <View style={styles.notificationContainer}>
                            <View style={styles.notification}>
                                <Text style={text_style.text}> Notifications </Text>
                            </View>
                            <Text style={text_style.notificationsText}> {this.state.message} </Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <TimetablePager navigation={this.props.navigation}/>
                    </View>

                </View>
            </View>
        )
    }
}

export default HomeScreen;