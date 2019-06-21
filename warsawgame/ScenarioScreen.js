import React, {Component} from 'react';
import {Alert, Dimensions, ImageBackground, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import * as Font from 'expo-font';
import HandleBack from "./back";


const {width, height} = Dimensions.get('window');

export default class Scenario extends Component {

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

                            {this.state.fontLoaded ? (
                                <Text style={styles.title}>Let the story begin...</Text>
                            ) : null}

                            {this.state.fontLoaded ? (
                                <Text style={styles.text}>

                                    {/* During the game you will faced with 15 task and you will have to find 4 hidden keys which will be needed to resolve final task.{"\n"}{"\n"} */}

                                    You have been back in time to Warsaw from 1918. When Poland, after 123 years,
                                    regained its independence,
                                    <B> the legends of the ancient treasury</B>, guarded by the spirit of Warsaw, begin
                                    to circulate.
                                    Among the local population, you can hear rumours about daredevils who undertake the
                                    quest of hunting
                                    the treasure, however, with poor results. Few, who returned from the search talked
                                    about a huge chest,
                                    which cannot be opened without having <B>four special keys</B>. After getting drunk
                                    one of the daredevils resigned
                                    by many unsuccessful attempts, you manage to steal <B>the map and get a hint</B>,
                                    that at first glance seems to
                                    be completely accidental. After a while, every clue begins to come together in one
                                    consistent piece.
                                    Will you try your luck and attempt to <B>retrieve the treasure?</B>{"\n"}{"\n"}

                                    <Text style={{fontFamily: "tw-cen-met-bold"}}>
                                        Remember that no one can see or even suspect you are on the trail of the
                                        treasure.
                                        You don't want someone to take away the treasure before you find it.{"\n"}
                                    </Text>

                                </Text>) : null}

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('RulesScreen', {teamName: teamName})}>
                                {this.state.fontLoaded ? (
                                    <Text style={styles.textButton}> Next
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
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20,
        marginTop: 20,
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
        fontSize: height / 35,
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