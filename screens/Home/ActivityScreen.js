import React from 'react';
import {StatusBar, View} from 'react-native';
import ActivityDetail from '../../components/Activity/ActivityDetails';

const ActivityScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View style={{height: '90%'}}>
                <ActivityDetail navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default ActivityScreen;


