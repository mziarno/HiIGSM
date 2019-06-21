import colors from "../components/colors";
import {Icon} from "react-native-elements";
import React from "react";

export const headerNavigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: colors.mintDark},
    headerTintColor: colors.white,
    margin: '20',
    headerTitleStyle: {fontWeight: 'bold'},
    title: 'akuku',
    headerRight:
        <Icon name='phone'
              color={colors.white}
              containerStyle={{marginRight: 15}}
              underlayColor={colors.mintDark}
              onPress={() => navigation.navigate('Contact')} title='contact'/>
    ,
    headerLeft:
        <Icon
            name='menu'
            color={colors.white}
            containerStyle={{marginLeft: 15}}
            underlayColor={colors.mintDark}
            onPress={() => navigation.openDrawer()}/>
});

export const headerNavigationOptionsWithBackButton = ({navigation}) => ({
    headerStyle: {backgroundColor: colors.mintDark},
    headerTintColor: colors.white,
    margin: '20',
    headerTitleStyle: {fontWeight: 'bold'},
    title: 'akuku',
    headerRight:
        <Icon name='phone'
              color={colors.white}
              containerStyle={{marginRight: 15}}
              underlayColor={colors.mintDark}
              onPress={() => navigation.navigate('Contact')} title='contact'/>
});