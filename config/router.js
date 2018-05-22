import React, {Component, AppRegistry} from 'react';
import {Image, Button, Text} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import Contact from '../screens/Contact';
import MapScreen from '../screens/Map';
import Places from '../screens/Places';

// DrawerNavigatior Screen
const DrawerNav = DrawerNavigator({
    Home: {screen: HomeScreen,
        navigationOptions: {
            title: 'Hi! IGSM 2019'
        }},
    
    MustSee: {
        screen: MustSeeScreen,
        navigationOptions: {
            title: 'Must See'
        }},
    Timetable: {
        screen: TimetableScreen,
        navigationOptions: {
            title: 'Timetable'
        }},
    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }},
    Contact: 
    {screen: Contact,
        navigationOptions: {
            title: 'Contact With Organizators'
        }} 
});

// TabNavigator Screen
// export const Tabs = TabNavigator(
//     {
//     Home: {screen: HomeStack,
//         navigationOptions: {
//             title: 'Home Tab',
//             tabBarIcon: 
//             <Icon name='home' color='#ffffff'/>
//         }
//     },
//     MustSee: {screen: MustSeeStack,
//         navigationOptions: {
//             tabBarIcon: 
//             <Icon name='map' color='#ffffff'/>
//         }
//     },
//     Timetable: {screen: TimetableStack,
//         navigationOptions: {
//             tabBarIcon: 
//             <Icon name='view-list' color='#ffffff'/>
//         }
//     }
//     },
//     {
//         tabBarPosition: 'bottom',
//         tabBarComponent: TabBarBottom,
//         swipeEnabled: true,
//         tabBarOptions: {
//         activeTintColor: 'white',
//         style: {
//             backgroundColor: '#1D3557',
//         }
//         }
//     }
// );


// StackNavigation Screen
const StackNav = StackNavigator({
    DrawerNav: {screen: DrawerNav},
    HomeScreen: {screen: HomeScreen,
        navigationOptions: {
            title: 'Hi! IGSM 2019'
        }},
    MustSeeScreen: {screen: MustSeeScreen,
        navigationOptions: {
            title: 'Must See'
        }},
    TimetableScreen: {screen: TimetableScreen,
        navigationOptions: {
            title: 'Timetable'
        }},
    Contact: {screen: Contact,
        navigationOptions: {
            title: 'Contact'
        }},
    Map: {screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }},
    Places: {screen:Places,
    navigationOptions:{
        title: 'Must See'
    }}
},{
    navigationOptions: ({navigation}) => ({
         headerStyle: {
                backgroundColor: '#1D3557'
             },
             headerTintColor: '#fff',
             margain: '20',
             headerTitleStyle: {
             fontWeight: 'bold'
             },
             headerRight: (
                 <Icon name='phone' 
                 color='#ffffff' 
                 containerStyle={{marginRight:15}}
                 onPress={() => navigation.navigate('Contact') }title='contact'/>
                
             ),
             headerLeft: <Icon 
             name='menu' 
             color='#ffffff'
             containerStyle={{marginLeft:15}}
             onPress={() => navigation.navigate('DrawerToggle')}/>
         })
        })

export default StackNav