import React, {Component} from 'react';
import {Icon} from 'react-native';
import firebaseConfig from './config/firebaseConfig';
import * as firebase from 'firebase';
import {createAppContainer} from 'react-navigation';
import RootNavigator from "./router/RootNavigator";

console.disableYellowBox = true;

const AppNavigatorContainer = createAppContainer(RootNavigator);

class App extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return <AppNavigatorContainer/>;
    }
}

export default App;
