import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StatusBar,
} from 'react-native';
import styles from '../components/styles';
import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';


const places = ['National Museum', 'Museum of the History of Polish Jews', 'Zachęta – National Gallery of Art', 'Foksal Gallery']

class Places extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content" />
                <View style={{ height: '90%' }}>
                    <FlatList
                        data={places}
                        renderItem={({ item }) => (
                            <View style={styles.greyMedium_Container}>
                                <Text style={styles.text1}> {item} </Text>
                            </View>
                        )}
                    />
                </View>
                <View style={{top: 5, justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>       
                    <HomeButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <MapButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <TimetableButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Timetable')}
                    />
                </View>           
            </View>


        )
    }
}


export default Places;


