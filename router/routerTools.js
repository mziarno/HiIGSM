import colors from "../components/colors";
import {Icon} from "react-native-elements";
import React from "react";

export const headerNavigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: colors.blue},
    headerTintColor: colors.white,
    margin: '20',
    headerTitleStyle: {fontWeight: 'bold'},
    title: 'akuku',
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
            onPress={() => navigation.openDrawer()}/>
});
