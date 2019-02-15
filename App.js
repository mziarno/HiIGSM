import React, {Component} from 'react';
import {Icon} from 'react-native';
import firebaseConfig from './firebaseConfig';
import * as firebase from 'firebase';
import AppNavigator from "./config/router";

console.disableYellowBox = true;

class App extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return <AppNavigator/>;
    }
}

export default App;
