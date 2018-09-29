import React, {Component, AppRegistry} from 'react';
import {Image, Button, Text} from 'react-native';
import {TabNavigator, StackNavigator,  DrawerNavigator, DrawerItems} from 'react-navigation';
import {Icon} from 'react-native-elements';
import {Container, Content, Header, Body } from 'native-base';

import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import TimetableScreen from '../screens/TimetableScreen';
import Contact from '../screens/Contact';
import MapScreen from '../screens/Map';
import Places from '../screens/Places';
import Desc from '../screens/Desc';
import Activity from '../screens/Activity';
import DayScreen from '../screens/DayScreen';



// DrawerNavigatior Screen
const DrawerNav = DrawerNavigator({
    //StackNav: {screen: StackNav},
    Home: {screen: HomeScreen,
        navigationOptions: {
            drawerLabel: 'Hi! IGSM 2019',
            drawerIcon: <Icon 
                name='home' 
                type='octicon'/>
        }},
    
    MustSee: {
        screen: MustSeeScreen,
        navigationOptions: {
            drawerLabel: 'Must See',
            drawerIcon: <Icon 
                />
           
        }},
    Timetable: {
        screen: TimetableScreen,
        navigationOptions: {
            drawerLabel: 'Timetable',
            drawerIcon: <Icon 
                name='calendar'
                type='octicon'/>
        }},
    Map: {
        screen: MapScreen,
        navigationOptions: {
            drawerLabel: 'Map',
            drawerIcon: <Icon 
                name='marker' 
                type='foundation'/>
        }},
    Contact: 
    {screen: Contact,
        navigationOptions: {
            drawerLabel: 'Contact With Organizators',
            drawerIcon: <Icon name='phone' />
            
        }} ,
   
    // DayScreen: {screen: DayScreen        
    //     }

},{
    // drawerWidth: Dimensions.get('window').width / 2.0,
    //contentComponent: CustomDrawerComponent,
    contentOptions: {
        activeTintColor: '#cc0033',
              
    //     iconContainerStyle: {
    //     opacity: 1
    // }
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
    HomeScreen: {screen: HomeScreen,
        navigationOptions: {
            header: 'Hi! IGSM 2019'
        }},
    MustSeeScreen: {screen: MustSeeScreen,
        navigationOptions: {
            title: 'Must See'
        }},
    TimetableScreen: {screen: TimetableScreen,
        navigationOptions: {
            title: 'Timetable'
        }},
    ContactScreen: {screen: Contact,
        navigationOptions: {
            title: 'Contact'
        }},
    MapScreen: {screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }},
    DayScreen: {screen: DayScreen},
    Activity: {screen: Activity},
    Places: {screen:Places,
    navigationOptions:{
        title: 'Must See'
    }},
    Desc: {screen: Desc,
        navigationOptions: {
            title: 'Description'
        }},
},{
    navigationOptions: ({navigation}) => ({
         headerStyle: 
            {backgroundColor: '#1D3557'},
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
        });          


export default StackNav