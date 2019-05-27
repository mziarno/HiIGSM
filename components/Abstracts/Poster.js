import {View, Modal, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, { Component } from 'react';
import {Button} from "react-native-elements/src/index";
import colors from '../colors'

class Poster extends Component {
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
                <Modal animationType = {"slide"}
                       visible = {this.state.modalVisible}
                       transparent={false}
                       onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    <ScrollView style={styles.modal} scrollEnabled={true}>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        <Text style={styles.subtitleText}>{this.props.author}</Text>
                        <Text style={styles.subtitleText}>{this.props.uni}</Text>
                        <Text style={styles.abstractText}>{this.props.abstract}</Text>
                        <Text style={styles.lineStyle}> </Text>
                        <Button
                            title="Hide Abstract"
                            buttonStyle={styles.buttonHide}
                            titleStyle={styles.textButton}
                            onPress = {() => this.toggleModal(!this.state.modalVisible)} />
                    </ScrollView>
                    {/*</BlurView>*/}
                </Modal>
                <TouchableOpacity onPress={() => {this.setModalVisible(true)}}>
                    <View>
                        <Text style={styles.titleTextList}>{this.props.title}</Text>
                        <Text style={styles.subtitleText}>{this.props.author}</Text>
                        <Text style={styles.subtitleText}>{this.props.uni}</Text>
                    </View>
                </TouchableOpacity>
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
        borderRadius: 5,
        height: '80%'
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
    titleTextList: {
        fontSize: 16,
        color: colors.mintDark,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%',
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

export default Poster