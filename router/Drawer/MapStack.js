import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import MapScreen from "../../screens/MapScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const MapStack = createStackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'IGSM map',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default MapStack