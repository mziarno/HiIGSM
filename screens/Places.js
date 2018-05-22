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
    // constructor(){
    //     super();

    //     this.state={
    //         style: true
    //     }
    // }
    // changeColor(){
    //     this.setState({color_black: !this.state.color_black})
    // }
    render(){
        // let bgColor = this.state.color_black ? "black" : "white"
        return(
            <View style={styles.background}>
            {/* <TouchableOpacity> */}
            <View style={styles.whiteMedium_Container}>
            {/* <TouchableOpacity style={{backgroundColor: bgColor}} onClick={this.changeColor.bind(this)}> */}
            <FlatList
                data={places}
                // extraData={this.state}
                renderItem={({ item }) => (
                <Text> {item} </Text>
                )}
                />
            {/* </TouchableOpacity> */}
            </View>
            {/* </TouchableOpacity>> */}
            </View>


    )
    }
}


export default Places;


