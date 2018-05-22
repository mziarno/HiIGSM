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
                 {/* // <NavigationBtn/> */}
                 
                <Text style={styles.text}> Notifications </Text>
              </View>

              <Text style={styles.notificationsText}> {this.state.message} </Text>
                  </View>

                <View style={styles.dayContainer}>
                 {/* // <NavigationBtn/> */}
                <Text style={styles.text}> Wednesday </Text>
              </View>

                </View>
            )
          
    }
}

export default HomeScreen;