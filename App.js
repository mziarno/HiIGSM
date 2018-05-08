import React, {Component} from 'react';

import HomeScreen from './screens/HomeScreen';
import MustSeeScreen from './screens/MustSeeScreen';
import TimetableScreen from './screens/TimetableScreen';
import Contact from './screens/Contact';
import MapScreen from './screens/Map';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Module RCTImageLoader requires',
]);


import {Drawer} from './config/router';

class App extends Component{
    render() {
        return <Drawer/>;
    }
}

export default App;
