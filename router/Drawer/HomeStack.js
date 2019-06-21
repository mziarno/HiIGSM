import {createStackNavigator} from "react-navigation";
import HomeScreen from "../../screens/Home/HomeScreen";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import React from "react";
import {headerNavigationOptionsWithBackButton} from "../routerTools";
import {Icon} from "react-native-elements";
import colors from "../../components/colors";

/*
* Stack which makes it possible to attach additional screens available only from HomeScreen
* */

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Hi IGSM 2019!',
            headerLeft:
                <Icon
                    name='menu'
                    color={colors.white}
                    containerStyle={{marginLeft: 15}}
                    underlayColor={colors.mintDark}
                    onPress={() => navigation.openDrawer()}/>
        })
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'Activity'
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptionsWithBackButton
});

export default HomeStack