import React from 'react';
import {StatusBar, View} from 'react-native';
import AllNotifications from '../components/Notifications/AllNotifications';

const NotificationsScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View>
                <AllNotifications navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default NotificationsScreen;
