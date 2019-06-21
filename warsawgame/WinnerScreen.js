import React, {Component} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import * as Font from 'expo-font';


const {width, height} = Dimensions.get('window');

export default class WinnerScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        }
    }

    static navigationOptions = ({navigation}) => ({
        header: null
    });

    async componentDidMount() {

        await Font.loadAsync({
            'tw-cen-met': require('./../assets/fonts/TCM.ttf'),
        });

        this.setState({fontLoaded: true})
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./../assets/treasure_big2.png')}/>
                {this.state.fontLoaded ? (
                    <Text
                        style={styles.title}>Congratulations {this.props.navigation.getParam("teamName", "Nie dziala :(")}!</Text>
                ) : null}
                {this.state.fontLoaded ? (
                    <Text style={styles.text}>
                        To open treasure chest, arrange your four keys in the order in which you collected them.
                        When you find the chest, enter the code from keys to padlock to receive a treasure.
                    </Text>
                ) : null}

                <TouchableOpacity style={styles.button}
                                  onPress={() => this.props.navigation.navigate('TreasureScreen')}>
                    <Text style={styles.textButton}> Go for treasure! </Text>
                </TouchableOpacity>
            </View>
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
        marginTop: height * 0.2,
        marginBottom: height * 0.2,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        // height: height,
        height: height + 100
    },

    title: {
        fontFamily: "tw-cen-met",
        fontSize: 32,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#292929",
        marginBottom: 20,
        marginTop: 20,
    },

    subtitle: {
        fontFamily: "tw-cen-met",
        fontSize: 23,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: "#292929",
    },

    text: {
        fontSize: height / 32,
        fontFamily: "tw-cen-met",
        lineHeight: 25,
        textAlign: 'center',
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        paddingTop: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 25,
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
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    logo: {
        height: 200,
        width: 200,
        //top: height * 0.1
    },
});