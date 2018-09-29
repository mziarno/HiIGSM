import React, { Component } from 'react';
import {Permissions, Notifications} from 'expo';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, Image, Platform, Icon } from 'react-native';
import ApiKeys from './ApiKeys';
import * as firebase from 'firebase';
import { YellowBox } from 'react-native';

console.disableYellowBox = true;

import StackNav from './config/router';

class App extends Component {


  render() {
    return <StackNav/>;
  }
}

export default App;
