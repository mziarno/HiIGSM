import {createStackNavigator} from "react-navigation";
import HomeScreen from "../../screens/Home/HomeScreen";
import ActivityScreen from "../../screens/Home/ActivityScreen";

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        defaultNavigationOptions: {
            title: 'Hi!IGSM!2',
            // headerMode: 'none',
        }
    },
    Activity: {
        screen: ActivityScreen,
        defaultNavigationOptions: {
            drawerLabel: () => null,
        }
    },
}, {
    headerMode: 'none',
});

export default HomeStack