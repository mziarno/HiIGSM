import {View, Modal, StyleSheet, Image} from 'react-native';
import React, { Component } from 'react';
import {Button} from "react-native-elements";
import colors from '../../components/colors'
// import {BlurView} from 'react-native-blur'

class BuildingPlan extends Component {
    state = {
        modalVisible: false,
    };
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View>
                <Modal animationType = {"fade"} transparent = {true}
                       visible = {this.state.modalVisible}
                       onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    {/*<BlurView*/}
                        {/*style={styles.absolute}*/}
                        {/*blurType="dark"*/}
                        {/*blurAmount={25}>*/}
                    <View style = {styles.modal}>
                        <Image
                            source={require('../../assets/images/poziom4.jpg')}
                            style={{resizeMethod: 'resize', resizeMode: 'contain', height: '93%'}}/>
                        <Button title="Hide plan" type="outline" onPress = {() => this.toggleModal(!this.state.modalVisible)} />
                    </View>
                    {/*</BlurView>*/}
                </Modal>
                <Button
                    onPress = {() => {this.toggleModal(true)}}
                    icon={{
                        name: 'map',
                        type: 'font-awesome',
                        color: colors.blue,
                        fontSize: '20'
                    }}
                    title="Building plan"
                    rounded='true'
                    type="outline"
                    size = {45}
                />

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
        marginTop: '20%',
        borderRadius: 5
    },
    text: {
        color: colors.grey,
        marginTop: 10
    },
    absolute: {
        position: "absolute",
    },
});

export default BuildingPlan