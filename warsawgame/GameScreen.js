import React, {Component} from 'react';
import {
    Alert,
    Animated,
    Dimensions,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import Constants from 'expo-constants';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';

import {Icon} from 'react-native-elements'
import Modal from "react-native-modal"
import HandleBack from "./back";


const {width, height} = Dimensions.get('window');

var image_dict = {
    image1: require('./../assets/title_images/Krakowskie_przedmiescie_m.png'),
    image3: require('./../assets/title_images/Kopernik_m.png'),
    image2: require('./../assets/title_images/Zlota_kaczka_m.png'),
    image4: require('./../assets/title_images/UW_m.jpg'),
    image5: require('./../assets/title_images/Palac_Prezydencki.jpg'),
    image6: require('./../assets/title_images/Kolumna.jpg'),
    image7: require('./../assets/title_images/Zamek_krolewski.jpg'),
    image8: require('./../assets/title_images/Kanonia.jpg'),
    image9: require('./../assets/title_images/Gora_Gnojna.jpg'),
    image10: require('./../assets/title_images/Bazyliszek.jpg'),
    image11: require('./../assets/title_images/Syrenka.jpg'),
    image12: require('./../assets/title_images/Kamienne-schodki.jpg'),
    image13: require('./../assets/title_images/WarsiSawa.jpg'),
    image14: require('./../assets/title_images/Barbakan.jpg'),
    image15: require('./../assets/title_images/Powstaniec.jpg')
}

var tasks_data = require('./../json/tasks.json');
let arr_task = []

export default class GameScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    _toggleModal = () =>
        this.setState({isModalVisible: !this.state.isModalVisible});

    constructor(props) {
        super(props);
        this.curr_quest = 0
        const jdata = tasks_data.quiz

        this.quest_num = Object.keys(jdata).length;
        arr_task = Object.keys(jdata).map(function (k) {
            return jdata[k]
        });

        this.props.navigation.setParams({title: arr_task[this.curr_quest].title})

        this.state = {
            arr_task: arr_task[this.curr_quest],
            title: arr_task[this.curr_quest].title,
            qr_code_on: arr_task[this.curr_quest].qr_code_on,
            geocache_clue: arr_task[this.curr_quest].geocache_clue,
            key_clue: arr_task[this.curr_quest].key_clue,
            howtoget: arr_task[this.curr_quest].howtoget,
            question: arr_task[this.curr_quest].question,
            answer: arr_task[this.curr_quest].answer,
            arr_answer: arr_task[this.curr_quest].answer.split(','),
            desc: arr_task[this.curr_quest].desc,

            location: null,
            errorMessage: null,

            isModalVisible: false,
            fontLoaded: false,
            x: new Animated.Value(0),
        }
    }

    //get user location
    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        Location.watchPositionAsync({
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 300000,
            distanceInterval: 10,
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

    //Handling Android Back Button
    onBack = () => {
        Alert.alert(
            "Game is running!",
            "Are you sure you want to quit and loose your progress?",
            [
                {
                    text: "Keep playing", onPress: () => {
                    }, style: "cancel"
                },
                {text: "Quit", onPress: () => this.props.navigation.goBack()},
            ],
            {cancelable: false},
        );
        return true
    };

    //setting next question
    next() {
        const teamName = this.props.navigation.getParam("teamName", "Nie dziala :(")
        if (this.quest_num > 1) {
            this.curr_quest++
            this.quest_num--
            this.scrollViewRef.scrollTo({x: 0, y: 0, animated: true});

            this.setState({
                arr_task: arr_task[this.curr_quest],
                title: arr_task[this.curr_quest].title,
                qr_code_on: arr_task[this.curr_quest].qr_code_on,
                key_clue: arr_task[this.curr_quest].key_clue,
                geocache_clue: arr_task[this.curr_quest].geocache_clue,
                howtoget: arr_task[this.curr_quest].howtoget,
                question: arr_task[this.curr_quest].question,
                answer: arr_task[this.curr_quest].answer,
                arr_answer: arr_task[this.curr_quest].answer.split(','),
                desc: arr_task[this.curr_quest].desc,
            })
        }
        //move to Winner Screen after last question
        else if (this.quest_num == '1') {
            return this.props.navigation.navigate('WinnerScreen', {teamName: teamName})
            // this.props.navigation.getParam("teamName", "Nie dziala :("))
        }
    }

    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    //Combining two functions beacuse in onPress can be only one function
    NextAndClear = () => {
        this.next()
        this.clearText()
        Keyboard.dismiss()
    }

    //Wrong answer alert
    _showAlert = () => {
        if (a) {
            Alert.alert(
                'Alert Title',
                'My Alert Msg',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
        }
    }

    //rendering qrcode scanner icon
    renderQRcode() {
        if (this.state.qr_code_on == '1')
            return <Icon
                reverse
                name='qrcode'
                type='font-awesome'
                onPress={() => this.props.navigation.navigate('QRScanner')}
                color='#57A7B3'
            />
        return null;
    }

    _onPress() {
        Animated.spring(
            this.state.x,
        ).start();
    }

    render() {

        //if answer is good
        const {goodAnswer} = this.state;
        let answerWithoutSpaces = "";
        console.log(goodAnswer)

        if (goodAnswer)
            answerWithoutSpaces = goodAnswer.replace(/\s/g, "");

        console.log(answerWithoutSpaces)
        const isEnabled = this.state.arr_answer.includes(answerWithoutSpaces);
        const U = (props) => <Text style={{ textDecorationLine: "underline" }}>{props.children}</Text>;
        const B = (props) => <Text style={{ fontFamily: "tw-cen-met-bold" }}>{props.children}</Text>;

        //do animacji
        var mycolor = this.state.x.interpolate({
            inputRange: [0, 300],
            outputRange: ['rgb(87, 167, 179)', 'rgba(204, 0, 0, 0.5)']
        });

        const pinColorBlue = 'rgb(51, 153, 255)';
        const pinColorYellow = 'rgb(255, 204, 0)';

        //location
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        if (!this.state.location)
            return (<Text style={styles.loadingText}>Loading game...</Text>);
        else

            return (
                <HandleBack onBack={this.onBack}>
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <View style={styles.container}>

                            <ScrollView contentContainerStyle={{
                                flexGrow: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: 20
                            }}
                                        ref={(ref) => {
                                            this.scrollViewRef = ref
                                        }}
                            >
                                <View>
                                    <Image
                                        style={styles.image}
                                        source={image_dict[arr_task[this.curr_quest].image_name]}
                                    />

                                    {this.state.fontLoaded ? (
                                        <Text style={styles.title}>
                                            {this.state.title}
                                        </Text>
                                    ) : null}

                                </View>
                                <Text style={styles.text}>
                                    <B>{this.state.howtoget}</B>
                                    {this.state.desc}
                                </Text>

                                {this.state.fontLoaded ? (
                                    <Text style={styles.boldText}>
                                        {this.state.key_clue}
                                    </Text>
                                ) : null}

                                {this.state.fontLoaded ? (
                                    <Text style={styles.boldText}>
                                        {this.state.geocache_clue}
                                    </Text>
                                ) : null}

                                {/* QR code icon */}
                                {this.renderQRcode()}

                                {this.state.fontLoaded ? (
                                    <Text style={styles.boldText}>
                                        {"\n"}<U>Question:</U>{"\n"}
                                        {this.state.question}{"\n"}
                                    </Text>
                                ) : null}

                            </ScrollView>

                            <View style={styles.AnswerBar}>

                                <Icon
                                    reverse
                                    name='map'
                                    type='font-awesome'
                                    onPress={this._toggleModal}
                                    color='rgba(81, 121, 129, 1)'/>


                                <TextInput style={styles.textInput}
                                           placeholder="Your answer"
                                           placeholderTextColor="#A4A6A6"
                                           returnKeyType="next"
                                           autoCapitalize="none"
                                           autoCorrect={false}
                                           ref={(input) => this.AnswerInput = input}
                                           onChangeText={(goodAnswer) => this.setState({goodAnswer})}
                                           ref={component => this._textInput = component}
                                    //onSubmitEditing={() => this.answerInput.focus()}
                                />

                                <Icon
                                    disabled={!isEnabled} style={{size: 20}}
                                    reverse
                                    name='angle-double-right'
                                    type='font-awesome'
                                    color='rgba(81, 121, 129, 1)'
                                    //onPress={this._onPress.bind(this)}>
                                    onPress={() => this.NextAndClear()}>
                                </Icon>

                            </View>
                        </View>

                        <Modal
                            transparent={true}
                            isVisible={this.state.isModalVisible}>
                            <View style={{width: width, height: height + 100, flex: 1}}>

                                <TouchableOpacity onPress={this._toggleModal} style={styles.closingIcon}>
                                    <Icon
                                        size={15}
                                        reverse
                                        name='times'
                                        type='font-awesome'
                                        color='#57A7B3'
                                    />
                                </TouchableOpacity>

                                <MapView style={styles.map}
                                         region={{
                                             latitude: this.state.location.coords.latitude,
                                             longitude: this.state.location.coords.longitude,
                                             latitudeDelta: 0.002,
                                             longitudeDelta: 0.002,
                                         }}
                                         showsUserLocation
                                         showsMyLocationButton={true}
                                >

                                    {/* Location of first geocache */}
                                    {/* <MapView.Marker
                    coordinate={{ latitude: 52.236639, longitude: 21.024008 }}
                    pinColor={pinColorYellow}
                  /> */}

                                </MapView>
                            </View>
                        </Modal>
                    </KeyboardAvoidingView>
                </HandleBack>
            );
    }
}

const styles = ({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(255,255,255)',
        height: height + 100
    },

    AnswerBar: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 10,
        width: width,
        backgroundColor: '#57A7B3'
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        // height: height,
        height: height + 100
    },

    image: {
        width: width,
        height: height * 0.4
    },

    title: {
        fontFamily: "tw-cen-met",
        fontSize: height / 30,
        backgroundColor: "rgba(23, 23, 23, 0.6)",
        color: "rgba(255, 255, 255, 1)",
        marginBottom: 20,
        //marginTop: 20,
        paddingTop: 15,
        //paddingBottom: 20,
        paddingLeft: 10,
        height: height * 0.08,
        width: width,
        top: height * 0.32,
        position: "absolute",
    },

    text: {
        fontSize: height / 38,
        fontFamily: "tw-cen-met",
        lineHeight: 25,
        textAlign: 'justify',
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        color: "#292929"
    },

    boldText: {
        fontSize: height / 38,
        fontFamily: "tw-cen-met-bold",
        lineHeight: 25,
        textAlign: 'justify',
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 10,
        color: "#292929"
    },

    textInput: {
        fontSize: height / 30,
        fontFamily: "tw-cen-met",
        borderWidth: 2,
        borderColor: '#edeff2',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        width: width * 0.6,
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
    },

    loadingText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        top: height * 0.45,
        fontSize: height / 30,
        fontFamily: "tw-cen-met",
    },

    map: {
        top: height * 0.15,
        height: height * 0.7,
        width: width * 0.9,
        marginBottom: 40,
        position: 'absolute',
    },

    closingIcon: {
        position: 'absolute',
        left: width * 0.8,
        top: height * 0.05,
        justifyContent: 'flex-end'

    },
});