import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import NotificationsScreen from "../../screens/NotificationsScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const NotificationsStack = createStackNavigator({
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
            title: 'Notifications',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default NotificationsStack