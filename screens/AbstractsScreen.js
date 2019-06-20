import React from 'react';
import {StatusBar, View} from 'react-native';
import AllPosters from "../components/Abstracts/AllPosters";

const AbstractsScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View>
                <AllPosters navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default AbstractsScreen;