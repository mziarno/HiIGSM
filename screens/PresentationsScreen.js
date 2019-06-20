import React from 'react';
import {StatusBar, View} from 'react-native';
import PresentationsList from "../components/Presentations/PresentationsList";

const PresentationsScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View>
                <PresentationsList navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default PresentationsScreen;