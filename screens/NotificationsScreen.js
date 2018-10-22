import React, {Component} from 'react';
import { Text, View, StatusBar, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import styles from '../components/styles';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';
import text_style from '../components/text_style'
import { Permissions, Notifications } from 'expo';
require("firebase/database");


class Notification extends Component {

    constructor() {
        super();
        this.state = {
            notifications: {},
            iterator: 1
        };
    }

    componentDidMount() {
        this.registerForPushNotificationsAsync();

        // Firebase connection part
        const rootRef = firebase.database().ref();
        const notificationsRef = rootRef.child('notifications').orderByChild('id');

        // ====== Week plan structure parser ======
        notificationsRef.once('value', snap => {

            snap.forEach(child => {
                let notices = child.val();
                //console.log(events)
                let content = child.key;
                let newNotice = {};
                Object.keys(notices).map((noticeKey) => {
                    let notice = notices[noticeKey];
                    let newInfos = {};

                    if (typeof notice === "object") {
                        Object.keys(notice).map((noticeInfoKey) => {
                            newInfos[noticeInfoKey] = notice[noticeInfoKey];
                        })
                        newNotice[noticeKey] = notice;
                    }
                })
                let lastState = this.state.notifications
                lastState[content] = newNotice
                let newState = lastState
                this.setState({
                    notifications: newState
                })
            })
        })
    }


    // registerForPushNotificationsAsync = async () => {
    //     //Check for existing permission
    //     const { status: existingStatus } = await Permissions.getAsync(
    //         Permissions.NOTIFICATIONS);
    //     let finalStatus = existingStatus;
    //
    //     // if no existing permission, ask for permission
    //     if (existingStatus !== 'granted') {
    //         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    //         finalStatus = status;
    //     }
    //     // Stop here if the user did not grant permissions
    //     if (finalStatus !== 'granted') {
    //         return;
    //     }
    //     // Get the token that uniquely identifies this device
    //     let token = await Notifications.getExpoPushTokenAsync();
    //     console.log(token);
    //
    //     //Add token to firebase
    //     let UID = firebase.auth().currentUser.uid;
    //     firebase.database().ref("users").child(UID).update({
    //         expoPushToken: token
    //     });
    //
    // }

    render() {
        const {navigate} = this.props.navigation;
        let notifications = this.state.notifications;
        if (notifications === 0) {
            return null;
        }
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <View style={{height: '90%'}}>
                    <View>
                        {Object.keys(notifications).map((noticeKey) => {
                            return (
                                <TouchableOpacity>
                                    <View style={styles.whiteBigContainer}>
                                        <Text style={text_style.notificationsText}> {noticeKey} </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                       }
                    </View>
                </View>

                <View style={{top: 5,justifyContent: 'space-around',flexDirection: 'row',flex: 1,alignItems: 'center'}}>
                    <HomeButton
                        color='#1D3557'
                        onPress={() => navigate('Home')}
                    />
                    <MapButton
                        color='#1D3557'
                        onPress={() => navigate('Map')}
                    />
                    <TimetableButton
                        color='#cc0033'
                        onPress={() => navigate('Timetable')}
                    />
                </View>
            </View>
        )
    }
}

export default Notification;