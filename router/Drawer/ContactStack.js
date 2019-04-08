import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import ContactScreen from "../../screens/ContactScreen";

/*
* Stack which makes it possible to attach additional screens available only from HomeScreen
* */

const HomeStack = createStackNavigator({
    Home: {
        screen: ContactScreen,
        navigationOptions: {
            title: 'Contact organizers',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default HomeStack