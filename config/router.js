import React, {AppRegistry} from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import colors from '../components/colors'
import HomeScreen from '../screens/Home/HomeScreen';
import MustSeeScreen from '../screens/MustSee/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import ContactScreen from '../screens/ContactScreen';
import MapScreen from '../screens/MapScreen';
import Places from '../screens/MustSee/PlacesListScreen';
import ActivityScreen from '../screens/Home/ActivityScreen';
import DayScreen from '../screens/DayScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const HomeStackNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Hi!IGSM!2',
            // headerMode: 'none',
        }
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            drawerLabel: () => null,
        }
    },
}, {
    headerMode: 'none',
});

// DrawerNavigatior Screen
const DrawerNav = DrawerNavigator({
        //StackNav: {screen: StackNav},
        Home: {
            screen: HomeStackNavigator,
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
                drawerLabel: 'Must See',
                title: 'Must See',
                drawerIcon: <Icon
                />

            }
        },
        Timetable: {
            screen: TimetableScreen,
            navigationOptions: {
                drawerLabel: 'Timetable',
                title: 'Timetable',
                drawerIcon: <Icon
                    name='calendar'
                    type='octicon'/>
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
        DayScreen: {
            screen: DayScreen,
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
// const CustomDrawerComponent =(props) =>(
//     <Container>
//         <Header style={{height:200}}>
//             <Body>
//             <Image
//                 style={{height:300, width: 200}}
//                 source={require('../assets/images/logo.jpg')}/> 
//             </Body>
//         </Header>
//         <Content>
//             <DrawerItems {...props}/>
//         </Content>
//     </Container>
// )

const AppNavigator = StackNavigator({
    Drawer: {screen: DrawerNav},
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle:
            {backgroundColor: colors.blue},
        headerTintColor: colors.white,
        margin: '20',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerRight: (
            <Icon name='phone'
                  color='#ffffff'
                  containerStyle={{marginRight: 15}}
                  onPress={() => navigation.navigate('Contact')} title='contact'/>

        ),
        headerLeft: <Icon
            name='menu'
            color='#ffffff'
            containerStyle={{marginLeft: 15}}
            onPress={() => navigation.navigate('DrawerToggle')}/>
    })
});

export default AppNavigator