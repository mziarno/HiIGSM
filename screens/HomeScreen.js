import React, {Component} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';



class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HiIGSM',
       
            headerStyle: {
              backgroundColor: '#1D3557',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            } 
      } 
    render(){
        return(
            <View>

                <Text> Hello </Text>    
               {/* <Button onPress={()=>this.props.navigation.navigate('MustSeeScreen') }title='mustsee'/>             */}
            </View>
        )
    }
}


const AppNavigator = StackNavigator({
    HomeScreen: {screen: HomeScreen},
      //Main: {screen: Main}
    MustSeeScreen: {screen: MustSeeScreen},
    TimetableScreen: {screen: TimetableScreen}
     // Navigation: {screen:Navigation}         
}

)

export default AppNavigator;