import {View, Modal, StyleSheet, Text, TouchableHighlight} from 'react-native';
import React, { Component } from 'react';
import {Button} from "react-native-elements/src/index";
import colors from '../colors'

class Abstract extends Component {
    state = {
        modalVisible: false,
    };
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Modal animationType = {"fade"} transparent = {true}
                       visible = {this.state.modalVisible}
                       onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    <View style = {styles.modal}>
                        <Text style={styles.titleText}>Tytuł Abstraktu</Text>
                        <Text style={styles.subtitleText}>Imię i nazwisko</Text>
                        <Text style={styles.subtitleText}>Uczelnia</Text>
                        <Text style={styles.abstractText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.</Text>
                        <Text style={styles.lineStyle}> </Text>
                        <Button
                            title="Hide plan"
                            buttonStyle={styles.buttonHide}
                            titleStyle={styles.textButton}
                            onPress = {() => this.toggleModal(!this.state.modalVisible)} />
                    </View>
                    {/*</BlurView>*/}
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            {/*    <Button*/}
            {/*    onPress = {() => {this.toggleModal(true)}}*/}
            {/*    title='Show Abstract'*/}
            {/*    buttonStyle={styles.buttonShow}*/}
            {/*    titleStyle={styles.textButton}*/}
            {/*/>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5
    },
    buttonHide: {
        backgroundColor: colors.mintLight,
    },
    textButton: {
        color: colors.white,
    },
    buttonShow: {
        backgroundColor: colors.mintLight,
        width: '40%',
        alignItems: 'center',
        alignContent: 'center'
    },
    titleText: {
        fontSize: 17,
        color: colors.mintDark,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%',
    },
    subtitleText: {
        fontSize: 14,
        color: colors.mintLight,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%'
    },
    abstractText: {
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center',
    },
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.red,
        margin: '3%',
    }
});

export default Abstract