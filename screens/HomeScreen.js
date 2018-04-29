import React, {Component} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import MapScreen from './Map';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HiIGSM',
       
        headerStyle: {
            backgroundColor: '#1D3557',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Contact"
              color="#000000"
            />
        ) 
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
    MustSeeScreen: {screen: MustSeeScreen},
    TimetableScreen: {screen: TimetableScreen},
    MapScreen: {screen: MapScreen}        
})

export default AppNavigator;