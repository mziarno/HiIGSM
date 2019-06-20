import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import PostersScreen from "../../screens/PostersScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const PostersStack = createStackNavigator({
    Posters: {
        screen: PostersScreen,
        navigationOptions: {
            title: 'Posters',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default PostersStack