import React, {Component} from 'react';
import {FlatList, StatusBar, Text, View,} from 'react-native';
import styles from '../../components/styles';
import text_style from '../../components/text_style'

const placesListScreen = ['National Museum', 'Museum of the History of Polish Jews', 'Zachęta – National Gallery of Art', 'Foksal Gallery']

class Places extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="light-content"/>
                <View style={{height: '90%'}}>
                    <FlatList
                        data={placesListScreen}
                        renderItem={({item}) => (
                            <View style={styles.greyMedium_Container}>
                                <Text style={text_style.text1}> {item} </Text>
                            </View>
                        )}
                    />
                </View>
            </View>


        )
    }
}


export default Places;


