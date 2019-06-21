import {createStackNavigator} from "react-navigation";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import PostersScreen from "../../screens/PostersScreen";
import HomeScreen from "../../warsawgame/HomeScreen";
import Introduction from "../../warsawgame/Introduction";
import QRScanner from "../../warsawgame/QRScanner";
import GameScreen from "../../warsawgame/GameScreen";
import WinnerScreen from "../../warsawgame/WinnerScreen";
import TreasureScreen from "../../warsawgame/TreasureScreen";
import RulesScreen from "../../warsawgame/RulesScreen";
import ScenarioScreen from "../../warsawgame/ScenarioScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const GameStack = createStackNavigator({
    // Posters: {
    //     screen: PostersScreen,
    //     navigationOptions: {
    //         title: 'Posters',
    //     }
    // },
    HomeScreen: {screen: HomeScreen},
    Introduction: {screen: Introduction},
    QRScanner: {screen: QRScanner},
    GameScreen: {screen: GameScreen},
    WinnerScreen: {screen: WinnerScreen},
    TreasureScreen: {screen: TreasureScreen},
    RulesScreen: {screen: RulesScreen},
    ScenarioScreen: {screen: ScenarioScreen}

}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default GameStack