import React, {Component} from 'react'
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
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
    Image,
    Icon,
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
          
            <View>
                  
            <Text> HI IGSM </Text>
            <View style={{top: 450}}>
            
                    <View style={nav_style.HomeBtn}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Image
                        source={require('../assets/icons/home.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                        title='Home'
                        />
                        </TouchableOpacity>
                    </View>

                    <View style={nav_style.MustSeeBtn}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map')}>
                        <Image
                        source={require('../assets/icons/map.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style={nav_style.TimeTable}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Timetable')}>
                        <Image
                        source={require('../assets/icons/calendar.png')}
                        style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                        />
                        </TouchableOpacity>
                    </View>
                    </View>
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
            </View>
                
            )
          
    }
}

export default HomeScreen;