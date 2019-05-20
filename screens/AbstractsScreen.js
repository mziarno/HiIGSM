import React from 'react';
import {StatusBar, View} from 'react-native';
import AllNotifications from "../components/Notifications/AllNotifications";
import AllAbstracts from "../components/Abstracts/AllAbstracts";

const AbstractsScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View style={{height: '90%'}}>
                <AllAbstracts navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default AbstractsScreen;