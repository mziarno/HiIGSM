import React, {Component} from 'react';
import firebaseConfig from './config/firebaseConfig';
import * as firebase from 'firebase';
import {createAppContainer} from 'react-navigation';
import RootNavigator from "./router/RootNavigator";
import {Provider} from "unstated";

console.disableYellowBox = true;
// console.ignoredYellowBox = [
//     'Setting a timer'
// ];

const AppNavigatorContainer = createAppContainer(RootNavigator);

class App extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <Provider>
                <AppNavigatorContainer/>
            </Provider>);
    }
}

export default App;
