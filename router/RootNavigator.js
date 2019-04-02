import {createStackNavigator} from "react-navigation";
import colors from "../components/colors";
import {Icon} from "react-native-elements";
import React from "react";
import DrawerNavigator from "./Drawer/DrawerNavigator";

/*
* Root of navigation.
* In defoult contains only DrawerNavigator.
* It's a good place for modal which can be show up from many places in app.
* */

const RootNavigator = createStackNavigator(
    {
        Drawer: {screen: DrawerNavigator},
    }, {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {backgroundColor: colors.blue},
            headerTintColor: colors.white,
            margin: '20',
            headerTitleStyle: {fontWeight: 'bold'},
            headerRight:
                <Icon name='phone'
                      color='#ffffff'
                      containerStyle={{marginRight: 15}}
                      onPress={() => navigation.navigate('Contact')} title='contact'/>
            ,
            headerLeft:
                <Icon
                    name='menu'
                    color='#ffffff'
                    containerStyle={{marginLeft: 15}}
                    onPress={() => navigation.navigate('DrawerToggle')}/>
        })
    });

export default RootNavigator