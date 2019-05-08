import React from 'react'
import {StatusBar, View} from 'react-native';
import TimetablePager from "../../components/Home/TimetablePager";
import MainNotification from "../../components/Home/MainNotification";

const HomeScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View style={style.view}>
                <MainNotification navigation={props.navigation}/>
                <TimetablePager navigation={props.navigation}/>
            </View>
        </View>
    )
};

const style = {
    view:{
        height: '97%',
        marginTop: '3%'
    }
};

export default HomeScreen;