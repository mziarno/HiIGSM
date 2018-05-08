import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Icon} from 'react-native';
import { StackNavigator} from 'react-navigation';
import MustSeeScreen from './MustSeeScreen';
import TimetableScreen from './TimetableScreen';
import Contact from './Contact';
import MapScreen from './Map';



class HomeScreen extends Component {
    static navigationOptions = {
            title: 'Hi! IGSM 2019',   
            headerStyle: {
              backgroundColor: '#1D3557',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
            
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

export default HomeScreen;