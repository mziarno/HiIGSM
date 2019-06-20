import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import ContactScreen from "../../screens/ContactScreen";

/*
* Stack which makes it possible to attach additional screens available only from ContactScreen
* */

const ContactStack = createStackNavigator({
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            title: 'Contact with Hosts',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default ContactStack