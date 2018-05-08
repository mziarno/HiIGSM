import React, {Component} from 'react';
import {Image, Button, Text} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import Contact from '../screens/Contact';
import MapScreen from '../screens/Map';

// StackNavigatior Screen
const DrawerNav = DrawerNavigator({
    Home: {screen: HomeScreen,
        navigationOptions: {
            title: 'Hi! IGSM 2019'
        }},
        // navigationOptions: ({navigation}) => ({
        //     title: 'Hi IGSM 2019',
        //     headerStyle: {
        //         backgroundColor: '#1D3557'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //     fontWeight: 'bold'
        //     },
        //     headerRight: (
        //         <Icon name='phone' color='#ffffff' onPress={() => 
        //             navigation.navigate('MapScreen') }title='map'/>
                
        //     ),
        //     headerLeft: <Icon name='menu' color='#ffffff' onPress={() => 
        //         navigation.navigate('DrawerOpen')} marginLeft='80'/>
        // })

    MustSee: {
        screen: MustSeeScreen,
        navigationOptions: {
            title: 'Must See'
        }},
        // navigationOptions: {
        //     title: 'Must See',
        //     headerStyle: {
        //         backgroundColor: '#1D3557'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //     fontWeight: 'bold'
        //     }
        // }
    

    Timetable: {
        screen: TimetableScreen,
        navigationOptions: {
            title: 'Timetable'
        }},
        // navigationOptions: {
        //     title: 'Timetable',
        //     headerStyle: {
        //         backgroundColor: '#1D3557'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //     fontWeight: 'bold'
        //     },
        // }


    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }},
        // navigationOptions: {
        //     title: 'Map',
        //     headerStyle: {
        //         backgroundColor: '#1D3557'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //     fontWeight: 'bold'
        //     }
        // }

    Contact: 
    {screen: Contact,
        navigationOptions: {
            title: 'Contact With Organizators'
        }}
        // navigationOptions: {
        //     title: 'Contact To Organizators',
        //     headerStyle: {
        //         backgroundColor: '#1D3557'
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //     fontWeight: 'bold'
        //     }
        // }
    
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

const StackNav = StackNavigator({
    DrawerNav: {screen: DrawerNav},
    HomeScreen: {screen: HomeScreen},
    MustSeeScreen: {screen: MustSeeScreen},
    TimetableScreen: {screen: TimetableScreen},
    Contact: {screen: Contact},
    Map: {screen: MapScreen},
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
                 style={{right: -20}}
                 onPress={() => navigation.navigate('Contact') }title='contact'/>
                
             ),
             headerLeft: <Icon 
             name='menu' 
             color='#ffffff'
             onPress={() => navigation.navigate('DrawerToggle')}/>
         })
        })




//DrawerNavigator Screen

// export const Drawer = DrawerNavigator({
//     // HiIGSM: {screen: Tabs,
//     //     navigationOptions:{
//     //         title: 'Nothing',
//     //         headerMode: 'none'
//     //     }},
//     Home: {screen: HomeStack,
//         navigationOptions: {
//             title: 'Home'
//         }},
//     MustSee: {screen: MustSeeStack,
//         navigationOptions: {
//             title: 'Must See'
//         }},
//     Timetable: {screen: TimetableStack,
//         navigationOptions: {
//             title: 'Timetable'
//         }},
//     Map: {screen: MapStack,
//         navigationOptions: {
//             title: 'Map'
//         }},
//     Contact: {screen: ContactStack,
//         navigationOptions: {
//             title: 'Contact'
//         }}

// })



export default StackNav