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
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native';
import { freemem } from 'os';
import NavigationBtn from '../components/NavigationBtn';
import styles from '../components/styles';
import {Icon} from 'react-native-elements';


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
            
                  
            
      
            <View style={{top: 480, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center',}}>
            
                    <View style={nav_style.HomeBtn}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon 
                            name='home' 
                            type='octicon'
                            color='pink'
                            size={36}/>
                        <Text style={{fontSize: 10, color:'pink', textAlign: 'center'}} >Home</Text>
                        </TouchableOpacity>
                    </View>
                    

                    <View style={nav_style.HomeBtn}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                        <Icon 
                            name='marker' 
                            type='foundation'
                            color='#1D3557'
                            size={36}/>
                        <Text style={{fontSize: 10, textAlign: 'center'}}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={nav_style.HomeBtn}>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                        <Icon 
                            name='calendar'
                            type='octicon' 
                            color='#1D3557'
                            size={36}/>
                        <Text style={{fontSize: 10, textAlign: 'center'}}>Timetable</Text>
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