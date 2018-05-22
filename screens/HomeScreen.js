import React, { Component } from 'react'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
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
    Icon,
    ImageBackground
} from 'react-native';
import { freemem } from 'os';
import NavigationBtn from '../components/NavigationBtn';
import styles from '../components/styles';

require("firebase/database");

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            message: ' ',
            weekDays: []
        };
    }
    componentDidMount() {
        const rootRef = firebase.database().ref();
        const messRef = rootRef.child('message');
        const weekDaysRef = rootRef.child('weekDays');

        weekDaysRef.once('value', snap => {
            let newStateWeekDays = [];
            snap.forEach(child => {                 // 1
                let newEvents = {}
                let events = child.val();
                for (let event in events) {         // 2

                    // newStateWeekDays.push({
                    //     [weekDay]: {
                    //         title: items[item].title,
                    //         user: items[item].user
                    //     }
                    // });
                }
                let weekDay = child.key

                this.setState({
                    weekDays: this.state.weekDays.concat(weekDay)
                })
            })
        })



        messRef.on('value', snap => {
            this.setState({
                message: snap.val()
            });
        });



    }

    render() {

        return (
            <View style={styles.background}>



                <View style={{ top: 450 }}>

                    <View style={nav_style.HomeBtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                                title='Home'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={nav_style.MustSeeBtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Map')}>
                            <Image
                                source={require('../assets/icons/map.png')}
                                style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={nav_style.TimeTable}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Timetable')}>
                            <Image
                                source={require('../assets/icons/calendar.png')}
                                style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>

                    <View style={styles.notificationContainer}>
                        <View style={styles.notification}>
                            {/* // <NavigationBtn/> */}

                            <Text style={styles.text}> Notifications </Text>
                        </View>

                        <Text style={styles.notificationsText}> {this.state.message} </Text>
                    </View>

                    <View style={styles.firstContainer}>
                        <View style={styles.day}>
                            <Text style={styles.text}> {this.state.weekDays[0]} </Text>
                        </View>
                        <Text style={styles.eventText}> BREAKFAST </Text>
                        <Text style={styles.timeText}> 8:00 - 9:30 AM </Text>
                        <Text style={styles.placeText}> Hostel Patchwork Canteen </Text>
                    </View>
                    <View style={styles.greyMedium_Container}>
                        <Text style={styles.eventText}> LECTURES </Text>
                        <Text style={styles.timeText}> 10:00 AM </Text>
                        <Text style={styles.placeText}> CZIiTT PW 4.05 </Text>
                    </View>
                    <View style={styles.greyMedium_Container}>
                        <Text style={styles.eventText}> COFFEE BREAK </Text>
                        <Text style={styles.timeText}> 12:30 AM </Text>
                        <Text style={styles.placeText}> CZIiTT PW 4.05 </Text>
                    </View>
                </View>

            </View>
        )

    }
}

export default HomeScreen;