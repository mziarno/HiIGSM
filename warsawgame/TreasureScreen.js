import React, {Component} from 'react';
import {Alert, Dimensions, Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const {width, height} = Dimensions.get('window');
var tasks_data = require('./../json/tasks.json');
let arr_task = []

var mapStyle = require('./../json/mapStyle.json')

export default class TreasureScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            errorMessage: null,
            fontLoaded: false,
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        Location.watchPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 10000,
            distanceInterval: 1,
        }, (location) => {
            //console.log(location);
            this.setState({location});
        });
    };


    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    //load custom fonts
    async componentDidMount() {
        await Font.loadAsync({
            'tw-cen-met': require('./../assets/fonts/TCM.ttf'),
            'tw-cen-met-bold': require('./../assets/fonts/TCB.ttf'),
        });
        this.setState({fontLoaded: true})
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    //Handling Android Back Button
    onBack = () => {
        Alert.alert(
            "Game is running!",
            "Are you sure you want to go to previous screen?",
            [
                {
                    text: "Keep playing", onPress: () => {
                    }, style: "cancel"
                },
                {text: "Go Home", onPress: () => this.props.navigation.goBack()},
            ],
            {cancelable: false},
        );
        return true
    };

    render() {


        const pinColor = '#1b46bb';

        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        if (!this.state.location)
            return (<Text style={styles.container}>.</Text>);
        else
            return (


                <View>
                    <MapView style={styles.map}
                             region={{
                                 latitude: this.state.location.coords.latitude,
                                 longitude: this.state.location.coords.longitude,
                                 latitudeDelta: 0.002,
                                 longitudeDelta: 0.002,
                             }}
                             showsUserLocation
                             showsMyLocationButton={true}
                        //customMapStyle={mapStyle}
                    >

                        {/* Lokalizacja skarbu */}
                        <MapView.Marker
                            coordinate={{latitude: 52.248006, longitude: 21.011707}}
                            title="Treasure chest"
                            description="Find it somewhere here!"
                            //image={require('./../assets/treasure.png')}
                        >
                            <Image style={styles.treasure} source={require('./../assets/treasure_big2.png')}/>
                        </MapView.Marker>
                    </MapView>

                    <View style={styles.clue_view}>
                        <Text style={styles.clue_text}>Find the box icon near you</Text>
                    </View>

                    <View
                        style={{
                            position: 'absolute',//use absolute position to show button on top of the map
                            top: '90%', //for center align
                            alignSelf: 'center' //for align to right
                        }}
                    >
                        <TouchableOpacity style={styles.quit_button}
                                          onPress={() => this.props.navigation.navigate('HomeScreen')}
                        >
                            {
                                this.state.fontLoaded ? (
                                    <Text style={styles.textButton}>QUIT</Text>
                                ) : null
                            }
                        </TouchableOpacity>

                    </View>
                </View>

            );
    }
}

const styles = ({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: height + 100
    },

    boldText: {
        fontSize: 18,
        fontFamily: "tw-cen-met-bold",
        lineHeight: 25,
        textAlign: 'justify',
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 10,
    },

    quit_button: {
        backgroundColor: "#57A7B3",
        borderRadius: 25,
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        //marginBottom: 40,
        top: height * 0.85
    },

    textButton: {
        fontFamily: 'tw-cen-met',
        fontSize: 25,
        color: "white"
    },

    map: {
        top: 0,
        height: height + 100,
        width: width,
        marginBottom: 40,
        position: 'absolute',
    },

    treasure: {
        height: 40,
        width: 40,
    },

    waiting_text: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    clue_view: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        height: 40
    },

    clue_text: {
        fontSize: 20,
        fontFamily: "tw-cen-met",
        backgroundColor: "rgba(183, 223, 230, 0.5)",
        borderRadius: 15,
        textAlign: 'center',
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#292929'
    }
});