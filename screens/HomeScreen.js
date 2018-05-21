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
       // const rootRef = firebase.database().ref().child('igsm-88697');
        const messRef = rootRef.child('message');
        messRef.on('value', snap => {
            this.setState({
                message: snap.val()
            });
        });
    }

    render(){         
            return (
          
            <View>
                 {/* // <NavigationBtn/> */}
                <Text> {this.state.message} </Text>
              
                </View>
            )
          
    }
}

export default HomeScreen;