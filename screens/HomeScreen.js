import React, { Component } from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';
import * as firebase from 'firebase';
import nav_style from '../components/nav_style';
import ApiKeys from '../ApiKeys'
import * as os from 'os';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TouchableHighlight,
    Modal,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image,
    ImageBackground,
    ViewPagerAndroid,
    StatusBar
} from 'react-native';
import { freemem } from 'os';
import NavigationBtn from '../components/NavigationBtn';
import styles from '../components/styles';
import { Icon } from 'react-native-elements';


require("firebase/database");

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            message: ' ',
            weekDays: {},
            iterator: 1
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
        if (this.state.weekDays === 0) {
            return null;
        }

        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;      var pageViews = [];

        let weekDays = this.state.weekDays;
        let i = 0;
        Object.keys(weekDays).map(function (dayNameKey, index) {
            let events = weekDays[dayNameKey];
            let eventsArray = [];
            Object.keys(events).map(function (eventNameKey, index) {
                singleEvent = events[eventNameKey];
                eventInfosArray = [];

                Object.keys(singleEvent).map(function (eventInfoKey, index) {
                    // ===== Event info display =====
                    // ===== TODO: Ifs for styling diffrent info types =====
                    eventInfosArray.push(
                        <Text>{eventInfoKey} {singleEvent[eventInfoKey]}</Text>
                    );
                })
                eventsArray.push(
                    // ===== Event card =====
                    
                    <View style={styles.greyMedium_Container }>
                        <Text style={styles.eventText}>{eventNameKey}</Text> 
                        {eventInfosArray}
                    </View>
                    
                );
            })

            pageViews.push(
                // ===== Day page =====
                <View>
                     
                    <View style={styles.day}>
                        <Text style={styles.text}>{dayNameKey}</Text>
                    </View>
                    <ScrollView style={{pagingEnabled: true}}>
                    {eventsArray}
                    </ScrollView>  
                </View>
            )


            i += 1;
        })     
        var pageCount = pageViews.length;

        return (
            <View >
              <StatusBar barStyle="light-content" />                 
              <View style={{height:'83%'}}>
 

                <View style={styles.notificationContainer}>
                    <View style={styles.notification}>
                        <Text style={styles.text}> Notifications </Text>
                    </View>
                    <Text style={styles.notificationsText}> {this.state.message} </Text>
                </View>

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

        <View style={{ top: '5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', }}>

        <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Home')}>
                <Icon
                    name='home'
                    type='octicon'
                    color='#cc0033'
                    size={36} />
                <Text style={{ fontSize: 10, color: '#cc0033', textAlign: 'center' }} >Home</Text>
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
                <Text style={{ fontSize: 10, textAlign: 'center' }}>Timetable</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    )

    }
    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={7} />;
    }
}

export default HomeScreen;