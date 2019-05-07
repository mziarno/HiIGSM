import React, {Component} from 'react';
import firebaseConfig from './config/firebaseConfig';
import * as firebase from 'firebase';
import {createAppContainer} from 'react-navigation';
import RootNavigator from "./router/RootNavigator";
import {Provider} from "unstated";
import {registerForPushNotificationsAsync} from "./config/registerForPushNotifications";

console.disableYellowBox = true;
// console.ignoredYellowBox = [
//     'Setting a timer'
// ];

const AppNavigatorContainer = createAppContainer(RootNavigator);

class App extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig);
        registerForPushNotificationsAsync();
    }

    render() {
        return (
            <Provider>
                <AppNavigatorContainer/>
            </Provider>);
    }
}

export default App;
