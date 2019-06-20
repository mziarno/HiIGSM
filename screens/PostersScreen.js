import React from 'react';
import {StatusBar, View} from 'react-native';
import PostersList from "../components/Abstracts/PostersList";

const PostersScreen = props => {
    return (
        <View>
            <StatusBar barStyle="light-content"/>
            <View>
                <PostersList navigation={props.navigation}/>
            </View>
        </View>
    )
};

export default PostersScreen;