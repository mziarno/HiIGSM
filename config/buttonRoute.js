import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from '../screens/HomeScreen';
import MustSeeScreen from '../screens/MustSeeScreen';
import Timetable from '../screens/TimetableScreen';

const ButtonRouter = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home"
          component={HomeScreen}
          title="Home"
        />
        <Scene
          key="mustSee"
          component={MustSeeScreen}
          title="Must See"
        />
        <Scene
          key="table"
          component={Timetable}
          title="Timetable"
        />
      </Scene>
    </Router>
  );
}

export default ButtonRouter;