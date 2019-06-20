import {createStackNavigator} from "react-navigation";
import HomeScreen from "../../screens/Home/HomeScreen";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import React from "react";
import {headerNavigationOptions} from "../routerTools";

/*
* Stack which makes it possible to attach additional screens available only from HomeScreen
* */

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Hi IGSM 2019!',
        }
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'Activity',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default HomeStack