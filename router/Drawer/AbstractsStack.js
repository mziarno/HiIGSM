import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import AbstractsScreen from "../../screens/AbstractsScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const AbstractsStack = createStackNavigator({
    Notifications: {
        screen: AbstractsScreen,
        navigationOptions: {
            title: 'Abstracts',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default AbstractsStack