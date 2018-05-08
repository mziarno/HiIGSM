import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, Icon } from 'react-native';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Module RCTImageLoader requires',
]);

import StackNav, { Drawer } from './config/router';

class App extends Component{
    render() {
        return <StackNav/>;
    }
}

export default App;

// export default class App extends React.Component { 
  
//   constructor(props){
//     super(props);
//     this.state={
//       isLoadingComplete: false,
//     };

//     if(!firebase.apps.length) { firebase.initializeApp(ApiKeys.config); }
//   }
  
  
//   render() {
//     return (   
         
//       <AppNavigator/>
//        );
//   }
// }

//  const AppDrawerNavigation = DrawerNavigator({
//   HomeScreen: {screen: HomeScreen,
//     navigationOptions: {
//       title: 'Home',
//      //drawerIcon: <FontAwesome name="home" size={24} color="#4CAF50" />,
//     },},
//   MustSeeScreen: {screen: MustSeeScreen},
//   TimetableScreen: {screen: TimetableScreen},
//   MapScreen: {screen: MapScreen},
//   Contact: {screen: Contact},
// },
// {

// }
// );


// const AppNavigator = StackNavigator({
//   AppDrawerNavigation: {screen: AppDrawerNavigation},
//   HomeScreen: {screen: HomeScreen},
//   MustSeeScreen: {screen: MustSeeScreen},
//   TimetableScreen: {screen: TimetableScreen},
//   Contact: {screen: Contact},
//   MapScreen: {screen: MapScreen},        
//  }

// );


// const styles = StyleSheet.create({
//   marcka: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
