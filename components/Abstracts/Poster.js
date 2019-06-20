import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from "react-native-elements/src/index";
import { Icon } from 'react-native-elements'
import colors from '../colors'

class Poster extends Component {
    state = {
        modalVisible: false,
    };

    toggleModal(visible) {
        this.setState({modalVisible: visible});
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <Modal animationType={"slide"}
                       visible={this.state.modalVisible}
                       transparent={false}
                       onRequestClose={() => {this.toggleModal(!this.state.modalVisible)}}>
                    <ScrollView style={styles.modal} scrollEnabled={true}>
                        <View style={styles.buttonHide}>
                            <Button type='clear'
                                    icon={
                                    <Icon
                                        name='arrow-left'
                                        type='material-community'
                                        size={30}
                                        color={colors.mintLight}
                                    />}

                                    onPress={() => this.toggleModal(!this.state.modalVisible)}/>
                        </View>
                        <Text style={styles.titleText}>{this.props.title}</Text>
                        <Text style={styles.subtitleText}>{this.props.author}</Text>
                        <Text style={styles.subtitleText}>{this.props.uni}</Text>
                        <View style={styles.lineStyle}/>
                        <Text style={styles.abstractText}>{this.props.abstract}</Text>
                    </ScrollView>
                </Modal>
                <TouchableOpacity
                    onPress={() => {this.setModalVisible(true)}}>
                    <View style={styles.singleNotification}>
                        <View style={styles.lineStyle}/>
                        <Text style={styles.titleTextList}>{this.props.title}</Text>
                        <Text style={styles.subtitleTextList}>{this.props.author}</Text>
                        <Text style={styles.subtitleTextList}>{this.props.uni}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 1,
        borderColor: colors.mintLigth,
        marginTop: '2%',
        borderRadius: 5,
        width: '90%',
        marginLeft: '5%',
    },
    singleNotification: {
        backgroundColor: colors.white,
        width: '90%',
        marginLeft: '5%',
        marginTop: '3%',
        marginBottom: '3%',
        // height: 60,
        // height: 300,
        // position: 'relative',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderRadius: 5,
        shadowColor: colors.shadow,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    modal: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
        height: '80%'
    },
    buttonHide: {
        alignItems: 'flex-start'
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
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
    },
    subtitleText: {
        fontSize: 14,
        color: colors.mintLight,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%'
    },
    titleTextList: {
        fontSize: 16,
        color: colors.mintDark,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 5,
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
    },
    subtitleTextList: {
        fontSize: 14,
        color: colors.mintLight,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%'
    },
    abstractText: {
        fontSize: 14,
        color: colors.grey,
        textAlign: 'left',
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
    },
});

export default Poster