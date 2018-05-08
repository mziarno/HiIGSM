import React, {Component} from 'react';
import {Image} from 'react-native';
import {TabNavigator, StackNavigator, TabBarBottom, DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import Contact from '../screens/Contact';
import MapScreen from '../screens/Map';

// StackNavigatior Screen
export const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Hi IGSM 2019',
            headerStyle: {
                backgroundColor: '#1D3557'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
            // headerRight: (
            //     <Button
            //       onPress={() => alert('This is a button!')}
            //       title="Info"
            //       color="#fff"
            //     />
            // )
        }
    }
});

export const MustSeeStack = StackNavigator({
    MustSee: {
        screen: MustSeeScreen,
        navigationOptions: {
            title: 'Must See',
            headerStyle: {
                backgroundColor: '#1D3557'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }
    }
});

export const TimetableStack = StackNavigator({
    Timetable: {
        screen: TimetableScreen,
        navigationOptions: {
            title: 'Timetable',
            headerStyle: {
                backgroundColor: '#1D3557'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
        }
    }
});

export const MapStack = StackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map',
            headerStyle: {
                backgroundColor: '#1D3557'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }
    }
});

export const ContactStack = StackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact To Organisators',
            headerStyle: {
                backgroundColor: '#1D3557'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }
    }
});

// TabNavigator Screen
export const Tabs = TabNavigator(
    {
    Home: {screen: HomeStack,
        navigationOptions: {
            title: 'Home Tab',
            tabBarIcon: 
            <Icon name='home' color='#ffffff'/>
        }
    },
    MustSee: {screen: MustSeeStack,
        navigationOptions: {
            tabBarIcon: 
            <Icon name='map' color='#ffffff'/>
        }
    },
    Timetable: {screen: TimetableStack,
        navigationOptions: {
            tabBarIcon: 
            <Icon name='view-list' color='#ffffff'/>
        }
    }
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarBottom,
        swipeEnabled: true,
        tabBarOptions: {
        activeTintColor: 'white',
        style: {
            backgroundColor: '#1D3557',
        }
        }
    }
);

//DrawerNavigator Screen

export const Drawer = DrawerNavigator({
    // HiIGSM: {screen: Tabs,
    //     navigationOptions:{
    //         title: 'Nothing',
    //         headerMode: 'none'
    //     }},
    Home: {screen: HomeStack,
        navigationOptions: {
            title: 'Home'
        }},
    MustSee: {screen: MustSeeStack,
        navigationOptions: {
            title: 'Must See'
        }},
    Timetable: {screen: TimetableStack,
        navigationOptions: {
            title: 'Timetable'
        }},
    Map: {screen: MapStack,
        navigationOptions: {
            title: 'Map'
        }},
    Contact: {screen: ContactStack,
        navigationOptions: {
            title: 'Contact'
        }}

})