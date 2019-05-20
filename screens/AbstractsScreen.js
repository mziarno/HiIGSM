import React from 'react';
import {StatusBar, View} from 'react-native';
import AllNotifications from "../components/Notifications/AllNotifications";
import AllPosters from "../components/Abstracts/AllPosters";

const AbstractsScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View style={{height: '90%'}}>
                <AllPosters navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default AbstractsScreen;