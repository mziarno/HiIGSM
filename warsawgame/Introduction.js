import React, {Component} from 'react';
import {Alert, Dimensions, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import * as Font from 'expo-font';
import HandleBack from "./back";


const {width, height} = Dimensions.get('window');

export default class Introduction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    //Handling Android Back Button
    onBack = () => {
        Alert.alert(
            "Hey!",
            "Are you sure you want to go to Home screen?",
            [
                {
                    text: "Stay here", onPress: () => {
                    }, style: "cancel"
                },
                {text: "Go Home", onPress: () => this.props.navigation.goBack()},
            ],
            {cancelable: false},
        );
        return true
    };


    async componentDidMount() {

        await Font.loadAsync({
            'tw-cen-met': require('./../assets/fonts/TCM.ttf'),
        });

        this.setState({fontLoaded: true})
    }

    render() {
        const teamName = this.props.navigation.getParam("teamName", "greatTeam!")

        return (
            <HandleBack onBack={this.onBack}>
                <ImageBackground source={require('./../assets/starowka_ulica_blur2.jpg')}
                                 blurRadius={0.7}
                                 style={styles.background}>

                    <View style={styles.container}>

                        <View style={styles.viewStyle}
                              contentContainerStyle={{
                                  flexGrow: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  textAlign: 'center'
                              }}>

                            {this.state.fontLoaded ? (
                                <Text style={styles.title}> Dear IGSMers! </Text>
                            ) : null}

                            {this.state.fontLoaded ? (
                                <Text style={styles.subtitle}> Welcome in our City Game Treasure Hunters{"\n"}{"\n"}
                                </Text>
                            ) : null}

                            {this.state.fontLoaded ? (
                                <Text style={styles.text}>
                                    <Text style={{textDecorationLine: "underline"}}>
                                        First of all, please read all instructions and entire task description carefully
                                        so you do not
                                        skip any relevant information.{"\n"}{"\n"}
                                    </Text>
                                </Text>) : null}

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('ScenarioScreen', {teamName: teamName})}>
                                {this.state.fontLoaded ? (
                                    <Text style={styles.textButton}> Let's start the adventure!
                                    </Text>) : null}
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </HandleBack>
        );
    }
}

const styles = ({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: height + 100
    },

    viewStyle: {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: height * 0.2,
        marginBottom: height * 0.2,
        marginLeft: width * 0.1,
        marginRight: width * 0.1,
        borderRadius: 20,
        alignItems: "center",
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height + 100
    },

    title: {
        fontFamily: "tw-cen-met",
        fontSize: height / 23,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#292929",
        marginBottom: 20,
        marginTop: 20,
    },

    subtitle: {
        fontFamily: "tw-cen-met",
        fontSize: height / 28,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#292929",
        paddingLeft: 5,
        paddingRight: 5
    },

    text: {
        fontSize: height / 35,
        fontFamily: "tw-cen-met",
        lineHeight: 25,
        textAlign: 'center',
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 5,
        color: '#292929'
    },

    textButton: {
        fontFamily: "tw-cen-met",
        fontSize: 20,
        color: "#fff"
    },

    button: {
        backgroundColor: "#57A7B3",
        borderRadius: 25,
        height: 50,
        width: width * 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },
});