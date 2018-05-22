import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, Icon } from 'react-native';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Module RCTImageLoader requires',
]);

import StackNav, { Drawer } from './config/router';

 class App extends Component{

  // componentWillMount(){
  //       /* Create reference to messages in Firebase Database */
  //       let messagesRef = ApiKeys.database().ref('messages').orderByKey().limitToLast(100);
  //       messagesRef.on('child_added', snapshot => {
  //         /* Update React state when message is added at Firebase Database */
  //         let message = { text: snapshot.val(), id: snapshot.key };
  //         this.setState({ messages: [message].concat(this.state.messages) });
  //       })
  //     }
  //     addMessage(e){
  //       e.preventDefault(); // <- prevent form submit from reloading the page
  //       /* Send the message to Firebase */
  //       ApiKeys.database().ref('messages').push( this.inputEl.value );
  //       this.inputEl.value = ''; // <- clear the input
  //     }

   render() {
      //ApiKeys.database().ref('message').push("sprawdza")
    // this.addMessage.bind(this)
       return <StackNav/>;
   }
 }

export default App;
