import React, {Component} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        Platform, 
        TouchableOpacity, 
        Image, 
        FlatList,
        StatusBar
        } from 'react-native';
import MapScreen from './Map';
import styles from '../components/styles';
import NavigationBtn from '../components/NavigationBtn';

const places = ['National Museum', 'Polin']

class Places extends Component{
 

    render(){
       
        return(
            <View style={styles.background}>
            
            <View style={styles.whiteMedium_Container}>
           
            <FlatList
                data={places}
                // extraData={this.state}
                renderItem={({ item }) => (
                <Text> {item} </Text>
                )}
                />
        
            </View>
        
            </View>


    )
    }
}


export default Places;


