import React, {Component} from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';
import MapScreen from './Map';
import * as firebase from 'firebase';
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
    ImageBackground
} from 'react-native';
import { freemem } from 'os';
import NavigationBtn from '../components/NavigationBtn';
import styles from '../components/styles';

require("firebase/database");

class HomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            message: ' '
        };
    }
    componentDidMount(){
        const rootRef = firebase.database().ref();
        const messRef = rootRef.child('message');
     

        messRef.on('value', snap => {
            this.setState({
                message: snap.val()
            });
        });

    }

    render(){     

            return (
          
            <View style={styles.background}>
            
              
              <View style={styles.notificationContainer}>
              <View style={styles.notification}>
               
                 
            <Text style={styles.text}> Notifications </Text>
            </View>

            <Text style={styles.notificationsText}> {this.state.message} </Text>
            </View>
            <View>

                <View style={styles.firstContainer}>
                <View style={styles.day}>
                <Text style={styles.text}> Wednesday (23th May) </Text>
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