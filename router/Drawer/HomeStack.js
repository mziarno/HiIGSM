import {createStackNavigator} from "react-navigation";
import HomeScreen from "../../screens/Home/HomeScreen";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import AbstractScreen from "../../screens/Home/AbstractScreen"
import React from "react";
import {headerNavigationOptions} from "../routerTools";

/*
* Stack which makes it possible to attach additional screens available only from HomeScreen
* */

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Hi IGSM!',
        }
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'Hi!IGSM!',
        }
    },
    Abstract: {
       screen: AbstractScreen,
        navigationOptions: {
            title: 'Poster',
        }
    }
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default HomeStack