import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import colors from "../../components/colors";

class AbstractScreen extends Component {
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.titleText}>Tytuł Abstraktu Prawdopodobnie długi, ale zobaczymy</Text>
                <Text style={styles.subtitleText}>Imię i nazwisko</Text>
                <Text style={styles.subtitleText}>Uczelnia</Text>
                <Text style={styles.abstractText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.lineStyle}> </Text>
            </View>
        )
    }
}

export default AbstractScreen;

const styles = StyleSheet.create({
    view:{
        marginRight: '5%',
        marginLeft: '5%',
        marginTop: '3%',
        marginBottom: '3%',
        width: '90%',
        high: '94%',
    },
    titleText:{
        fontSize: 17,
        color: colors.blue,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%',
    },
    subtitleText:{
        fontSize: 14,
        color: colors.red,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%'
    },
    abstractText:{
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center',
    },
    lineStyle:{
        borderBottomWidth: 1,
        borderBottomColor: colors.red,
        margin: '3%',
    }

});