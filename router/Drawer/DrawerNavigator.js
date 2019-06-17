import {createDrawerNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import colors from "../../components/colors";
import React from "react";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
import MapStack from "./MapStack";
import NotificationsStack from "./NotificationsStack";
import AbstractsStack from "./AbstractsStack";


/*
* Core of navigation.
* Contains single screens or stacks for elements with multiple screens.
* */

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Hi! IGSM 2019',
                drawerIcon: <Icon name='home' type='octicon'/>
            }
        },
        Contact:
            {
                screen: ContactStack,
                navigationOptions: {
                    drawerLabel: 'Contact With organizers',
                    drawerIcon: <Icon name='phone'/>
                }
            },
        Map: {
            screen: MapStack,
            navigationOptions: {
                drawerLabel: 'IGSM map',
                drawerIcon: <Icon name='marker' type='foundation'/>
            }
        },
        Notifications: {
            screen: NotificationsStack,
            navigationOptions: {
                drawerLabel: 'Notifications',
                drawerIcon: <Icon name='bell' type='octicon'/>
            }
        },

        //Dotąd jest legitnie

        Abstracts: {
            screen: AbstractsStack,
            navigationOptions: {
                drawerLabel: 'Abstracts',
                drawerIcon: <Icon name='file' type='octicon'/>
            }
        },


        Activity: {
            screen: ActivityScreen,
            navigationOptions: {
                drawerLabel: () => null,
            }
        },

    }, {
        contentOptions: {
            activeTintColor: colors.mintLight,
        },
    }
);

export default DrawerNavigator