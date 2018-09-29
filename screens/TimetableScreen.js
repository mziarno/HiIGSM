import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import styles from '../components/styles';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';

require("firebase/database");

const DayScreen = require('./DayScreen');
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
    const { navigate } = this.props.navigation;

    if (this.state.weekDays === 0) {
        return null;
    }
    
    let weekDays = this.state.weekDays; 
    Object.keys(weekDays).map(function (dayNameKey, index) {
       // let events = weekDays[dayNameKey];    
    })

    return (
    <View>
        <StatusBar barStyle="light-content" />
        <View style={{height:'90%'}}>
        
             <View>
             {Object.keys(weekDays).map((dayNameKey) => {
                
                        return (
                            <TouchableOpacity onPress={() => navigate('DayScreen',  {events: weekDays[dayNameKey]}) } >
                            <View style={styles.greyMedium_Container} > 
                                    <Text style={styles.textDay}> {dayNameKey} </Text>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>  
            </View>   

     
        <View style={{top: 5, justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>       
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
_renderItem(item) {
    //const {navigate} = this.props.navigation;
    return(
        <ListItem item={item} onPress={() =>
            navigate('DayScreen')}  />
    );
}

}

const textStyle = StyleSheet.create({
 titleText: {
   marginTop: 10,
   fontSize: 18,
   fontWeight: 'bold',
   color: '#4a4a4a',
   textAlign: 'center',
   justifyContent: 'center',
   flex: 1,
   alignItems: 'center'
   
 },
});

const buttonStyle = StyleSheet.create({
 containerStyle: {
    backgroundColor: '#ECECEC',
    height: 45,
   width: '90%',
   borderBottomWidth: 0,
   borderRadius: 5, 
   shadowColor: '#000',
   shadowOffset: { height: 3 },
   shadowOpacity: 0.1,
   shadowRadius: 3,
   alignItems: 'center',
   elevation: 5,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10,
   marginBottom: 10,
   alignSelf: 'center',
 }
}) 

export default Timetable;