import React, {Component, AppRegistry} from 'react';
import {Image, Button, Text} from 'react-native';
import {TabNavigator, StackNavigator,  DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import colors from '../components/colors'
import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import Contact from '../screens/Contact';
import MapScreen from '../screens/Map';
import Places from '../screens/Places';
import Desc from '../screens/Desc';
import Activity from '../screens/Activity';
import DayScreen from '../screens/DayScreen';
import NotificationsScreen from '../screens/NotificationsScreen';



// DrawerNavigatior Screen
const DrawerNav = DrawerNavigator({
    //StackNav: {screen: StackNav},
    Home: {screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'Hi! IGSM 2019',
            title: 'Hi!IGSM!',
            drawerIcon: <Icon 
                name='home' 
                type='octicon'/>
        }},
    
    MustSee: {
        screen: MustSeeScreen,
        navigationOptions: {
            drawerLabel: 'Must See',
            title:'Must See',
            drawerIcon: <Icon 
                />
           
        }},
    Timetable: {
        screen: TimetableScreen,
        navigationOptions: {
            drawerLabel: 'Timetable',
            title: 'Timetable',
            drawerIcon: <Icon 
                name='calendar'
                type='octicon'/>
        }},
    Map: {
        screen: MapScreen,
        navigationOptions: {
            drawerLabel: 'Map',
            title: 'Map',
            drawerIcon: <Icon 
                name='marker' 
                type='foundation'/>
        }},
    Contact: 
    {screen: Contact,
        navigationOptions: {
            drawerLabel: 'Contact With Organizators',
            title: 'Contact',
            drawerIcon: <Icon name='phone' />
            
        }} ,
    Notification:
        {screen: NotificationsScreen,
            navigationOptions: {
                drawerLabel: () => null,
            }},
    DayScreen: {screen: DayScreen,
        navigationOptions: {
            drawerLabel: () => null,              
        }},
    Activity: {screen: Activity,
        navigationOptions: {
            drawerLabel: () => null,              
        }},
    Places: {screen:Places,
        navigationOptions: {
            drawerLabel: () => null,              
        }},
},{
    contentOptions: {
        activeTintColor: colors.red,
  }
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

// StackNavigation Screen
const StackNav = StackNavigator({
   
    DrawerNav: {screen: DrawerNav},            
},{
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
                containerStyle={{marginRight:15}}
                onPress={() => navigation.navigate('Contact') }title='contact'/>
                
             ),
                headerLeft: <Icon 
                name='menu' 
                color='#ffffff'
                containerStyle={{marginLeft:15}}
                onPress={() => navigation.navigate('DrawerToggle')}/>
         })
        });          


export default StackNav