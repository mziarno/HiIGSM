import {createDrawerNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import MustSeeScreen from "../../screens/MustSee/MustSeeScreen";
import MapScreen from "../../screens/MapScreen";
import ContactScreen from "../../screens/ContactScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import Places from "../../screens/MustSee/PlacesListScreen";
import colors from "../../components/colors";
import React from "react";
import HomeStack from "./HomeStack";

/*
* Core of navigation.
* Contains single screens or stacks for elements with multiple screens.
* */

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Hi! IGSM 2019',
                title: 'Hi!IGSM!',
                drawerIcon: <Icon
                    name='home'
                    type='octicon'/>
            }
        },
        MustSee: {
            screen: MustSeeScreen,
            navigationOptions: {
                drawerLabel: 'Must See (nie działa)',
                title: 'Must See',
                drawerIcon: <Icon
                />

            }
        },
        Map: {
            screen: MapScreen,
            navigationOptions: {
                drawerLabel: 'Map',
                title: 'Map',
                drawerIcon: <Icon
                    name='marker'
                    type='foundation'/>
            }
        },
        Contact:
            {
                screen: ContactScreen,
                navigationOptions: {
                    drawerLabel: 'Contact With Organizators',
                    title: 'Contact',
                    drawerIcon: <Icon name='phone'/>

                }
            },
        Notification:
            {
                screen: NotificationsScreen,
                navigationOptions: {
                    drawerLabel: () => null,
                }
            },
        Activity: {
            screen: ActivityScreen,
            navigationOptions: {
                drawerLabel: () => null,
            }
        },
        Places: {
            screen: Places,
            navigationOptions: {
                drawerLabel: () => null,
            }
        },
    }, {
        contentOptions: {
            activeTintColor: colors.red,
        },

    }
);

export default DrawerNavigator