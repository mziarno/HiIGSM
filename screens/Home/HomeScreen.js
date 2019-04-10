import React from 'react'
import {StatusBar, View} from 'react-native';
import TimetablePager from "../../components/Home/TimetablePager";
import MainNotification from "../../components/Home/MainNotification";

const HomeScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View style={{height: '90%'}}>
                <MainNotification navigation={props.navigation}/>
                <View>
                    <TimetablePager navigation={props.navigation}/>
                </View>
            </View>
        </View>
    )
};

export default HomeScreen;