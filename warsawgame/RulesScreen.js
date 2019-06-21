import React, {Component} from 'react';
import {Alert, Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Font from 'expo-font';
import HandleBack from "./back";


const {width, height} = Dimensions.get('window');

export default class Scenario extends Component {

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        }
    }

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
            'tw-cen-met-bold': require('./../assets/fonts/TCB.ttf'),
        });

        this.setState({fontLoaded: true})
    }

    render() {
        const teamName = this.props.navigation.getParam("teamName", "greatTeam!")
        const B = (props) => <Text style={{fontFamily: "tw-cen-met-bold"}}>{props.children}</Text>
        const U = (props) => <Text style={{textDecorationLine: "underline"}}>{props.children}</Text>

        return (
            <HandleBack onBack={this.onBack}>
                <ImageBackground source={require('./../assets/starowka_ulica_blur2.jpg')}
                                 blurRadius={0.7}
                                 style={styles.background}>

                    <View style={styles.container}>

                        <ScrollView style={styles.scrollviewStyle}
                                    contentContainerStyle={{
                                        flexGrow: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}>

                            <View>

                                {this.state.fontLoaded ? (
                                    <Text style={styles.title}> <U>Game rules </U></Text>
                                ) : null}

                            </View>

                            {this.state.fontLoaded ? (
                                <Text style={styles.subtitle}>
                                    <U>General rules:</U>
                                </Text>
                            ) : null}

                            {this.state.fontLoaded ? (
                                <Text style={styles.text}>
                                    1. Each team that will solve all tasks in the time set for the game, <B>(about 3
                                    hours), will receive prizes. So you don't have to hurry up so much.</B> {"\n"}{"\n"}
                                    2. The entire route of the game is about <B>3.5km</B>{"\n"}{"\n"}
                                    3. The content of the next task will be <B>revealed only after putting correct
                                    answer</B> in the answer field.{"\n"}{"\n"}
                                    4. Most of answers you can write in <B>English</B> but sometimes you have to
                                    use <B>Polish</B> words.{"\n"}{"\n"}
                                    5. The game consists of <B>15 tasks and one final task, which can be solved with
                                    FOUR special keys</B> gained at various points of the game. {"\n"}{"\n"}
                                    6. At least one of the players must have an application running all the time,
                                    because turning the application off will <B>result in the loss of progress</B> made
                                    so far.{"\n"}{"\n"}
                                    7. The maximum number of participants <B>in one team is 8.</B>{"\n"}{"\n"}
                                    8. In order to use the application you will need to <B>enable camera and location
                                    service.</B>{"\n"}{"\n"}
                                    9. When it becomes necessary to scan the <B>qr code</B>, the icon that launches it
                                    is located <B>below the description of task.</B>{"\n"}{"\n"}
                                    10. The icon that launches the <B>map is located on the left side of the answer
                                    input window.</B>{"\n"}{"\n"}
                                </Text>
                            ) : null}


                            {this.state.fontLoaded ? (
                                <Text style={styles.subtitle}>
                                    <U>Geocaching rules:</U>
                                </Text>) : null}


                            {this.state.fontLoaded ? (
                                <Text style={styles.text}>

                                    Durnig the game beyond the usual tasks you will also have to find <B><U>geocaches
                                    which are
                                    hidden small boxes containing things necessary to resolve some tasks.</U></B> All
                                    the
                                    geocaches that you will have to find, have been created and hidden by the creators
                                    of
                                    today's game.{"\n"}{"\n"}

                                    1. After finding a geocache and seeing what is inside, <B><U>remember to put the
                                    geocache
                                    in the same place where you found it.</U></B> {"\n"}{"\n"}
                                    2. <B><U>Do not take with you a geocache or anything you find inside. So that the
                                    other
                                    teams can also participate in the game.</U></B>{"\n"}{"\n"}

                                    If you have any problem concerning game or application you can send text message to
                                    this number:{"\n"}
                                    {"\n"}<B><U>+48 514 896 673{"\n"}</U></B>

                                </Text>) : null}


                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('GameScreen', {teamName: teamName})}>
                                {this.state.fontLoaded ? (
                                    <Text style={styles.textButton}> Start Game!
                                    </Text>) : null}
                            </TouchableOpacity>
                        </ScrollView>
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

    scrollviewStyle: {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        marginTop: 45,
        marginBottom: 35,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20
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
        fontSize: height / 25,
        //textDecorationLine: 'underline',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "rgba(27, 59, 65, 1)",
        marginBottom: 20,
        marginTop: 20,
    },

    subtitle: {
        fontFamily: "tw-cen-met",
        fontSize: height / 32,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#292929",
    },

    text: {
        fontSize: height / 38,
        fontFamily: "tw-cen-met",
        lineHeight: 25,
        textAlign: 'center',
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 15,
        color: "#292929"
    },

    textButton: {
        fontFamily: "tw-cen-met",
        fontSize: height / 32,
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