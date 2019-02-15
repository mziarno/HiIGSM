import React, {Component} from 'react'
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import * as firebase from 'firebase';
import {ScrollView, StatusBar, Text, TouchableOpacity, View,} from 'react-native';
import styles from '../../components/styles';
import text_style from '../../components/text_style'
import HomeButton, {MapButton, TimetableButton} from '../../components/NavigationButton';

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
        //  this.Clock = setInterval( () => this.GetTime(), 1000 );

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
        if (this.state.weekDays === 0) {
            return null;
        }
        var pageViews = [];

        let weekDays = this.state.weekDays;

        let i = 0;
        Object.keys(weekDays).map(function (dayNameKey, index) {
            let events = weekDays[dayNameKey];
            let eventsArray = [];
            //console.log(events)

            Object.keys(events).map(function (eventNameKey, index) {
                var singleEvent = events[eventNameKey];
                var eventInfosArray = [];

                let time = " - "
                let place = ''

                Object.keys(singleEvent).map(function (eventInfoKey, index) {
                    // ===== Event info display =====                        
                    if (eventInfoKey == 'startTime') {
                        time = singleEvent[eventInfoKey] + time
                    } else if (eventInfoKey == 'endTime') {
                        time = time + singleEvent[eventInfoKey]
                    } else if (eventInfoKey == 'place') {
                        place = singleEvent[eventInfoKey]
                    }
                })
                eventInfosArray.push(
                    <Text style={text_style.timeText}>{time}</Text>,
                    <Text style={text_style.placeText}>{place}</Text>
                );
                eventsArray.push(
                    // ===== Event card =====
                    <TouchableOpacity onPress={() => navigate('Activity', {activity: events[eventNameKey]})}>
                        <View style={styles.whiteMedium_Container}>
                            <Text style={text_style.eventText}>{eventNameKey}</Text>
                            {eventInfosArray}
                        </View>
                    </TouchableOpacity>
                );
            })
            pageViews.push(
                // ===== Day page =====
                <View>
                    <View style={styles.day}>
                        <Text style={text_style.text}>{dayNameKey}</Text>
                    </View>
                    <View style={{height: '80%'}}>
                        <ScrollView>
                            {eventsArray}
                        </ScrollView>
                    </View>
                </View>
            )
            i += 1;
        })
        var pageCount = pageViews.length;
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
                        {/* WeekDays pages renderer */}
                        <IndicatorViewPager
                            key={pageCount}
                            style={styles.timetable_background}
                            indicator={this._renderDotIndicator()}>
                            {pageViews}
                        </IndicatorViewPager>
                    </View>
                </View>
                <View style={{
                    top: 5,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <HomeButton
                        color='#cc0033'
                        onPress={() => navigate('Home')}
                    />
                    <MapButton
                        color='#1D3557'
                        onPress={() => navigate('Map')}
                    />
                    <TimetableButton
                        color='#1D3557'
                        onPress={() => navigate('Timetable')}
                    />
                </View>
            </View>
        )
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={7}/>;
    }
}

export default HomeScreen;