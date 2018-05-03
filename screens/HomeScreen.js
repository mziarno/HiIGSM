import React, {Component} from 'react'
import { View, Text, StyleSheet, Button} from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Hi! IGSM 2019',       
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
               {/* <Button onPress={()=>this.props.navigation.navigate('MustSeeScreen') }title='mustsee'/> */}
            </View>
        )
    }
}


const AppNavigator = StackNavigator({
    HomeScreen: {screen: HomeScreen},
    MustSeeScreen: {screen: MustSeeScreen},
    TimetableScreen: {screen: TimetableScreen},
    Contact: {screen: Contact}     
          
}

)

export default AppNavigator;