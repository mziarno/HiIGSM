import {createDrawerNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import colors from "../../components/colors";
import React from "react";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
import MapStack from "./MapStack";
import NotificationsStack from "./NotificationsStack";
import PostersStack from "./PostersStack";
import PresentationStack from "./PresentationStack";


/*
* Core of navigation.
* Contains single screens or stacks for elements with multiple screens.
* */

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Hi IGSM 2019!',
                drawerIcon: <Icon name='home' type='octicon'/>
            }
        },
        Contact:
            {
                screen: ContactStack,
                navigationOptions: {
                    drawerLabel: 'Contact with Hosts',
                    drawerIcon: <Icon name='phone'/>
                }
            },
        Map: {
            screen: MapStack,
            navigationOptions: {
                drawerLabel: 'IGSM map',
                drawerIcon: <Icon name='map'/>
            }
        },
        Notifications: {
            screen: NotificationsStack,
            navigationOptions: {
                drawerLabel: 'Notifications',
                drawerIcon: <Icon name='bell' type='octicon'/>
            }
        },

        Presentations: {
            screen: PresentationStack,
            navigationOptions: {
                drawerLabel: 'Presentations',
                drawerIcon: <Icon name='presentation' type='material-community'/>
            }
        },

        Posters: {
            screen: PostersStack,
            navigationOptions: {
                drawerLabel: 'Posters',
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