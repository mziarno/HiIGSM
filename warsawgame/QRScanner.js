import React, {Component} from 'react';
import {Alert, Dimensions, Linking, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


const {width, height} = Dimensions.get('window');

export default class App extends Component {


    static navigationOptions = {
        title: 'QRScanner',
        headerStyle: {
            backgroundColor: '#57A7B3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        hasCameraPermission: null,
        lastScannedUrl: null,
    };

    componentDidMount() {
        this._requestCameraPermission();
    }

    _requestCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        if (result.data !== this.state.lastScannedUrl) {
            this.setState({lastScannedUrl: result.data});
        }
    };

    render() {
        return (
            <View style={styles.container}>

                {this.state.hasCameraPermission === null
                    ? <Text>Requesting for camera permission</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{color: '#fff'}}>
                            Camera permission is not granted
                        </Text>
                        : <BarCodeScanner
                            onBarCodeRead={this._handleBarCodeRead}
                            style={{
                                height: Dimensions.get('window').height,
                                width: Dimensions.get('window').width,
                            }}
                        />}


                {this._maybeRenderUrl()}

                <StatusBar hidden/>
            </View>
        );
    }

    _handlePressUrl = () => {
        Alert.alert(
            'Do you want to see where the key is hidden?',
            this.state.lastScannedUrl,
            [
                {
                    text: 'No', onPress: () => {
                    }
                },
                {
                    text: 'Yes',
                    onPress: () => Linking.openURL(this.state.lastScannedUrl),
                },
            ],
            {cancellable: false}
        );
    };

    _handlePressCancel = () => {
        this.setState({lastScannedUrl: null});
    };

    _maybeRenderUrl = () => {
        if (!this.state.lastScannedUrl) {
            return;
        }

        return (
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
                    <Text numberOfLines={1} style={styles.urlText}>
                        Open a clue!
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={this._handlePressCancel}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
    },
    url: {
        flex: 1,
    },
    urlText: {
        color: '#fff',
        fontSize: 20,
    },
    cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
    },

    closingIcon: {
        position: 'absolute',
        left: width * 0.8,
        top: height * 0.05,
        justifyContent: 'flex-end'

    },

});
