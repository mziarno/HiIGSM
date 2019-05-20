import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {Platform, Text, View, StyleSheet} from "react-native";
import React from "react";
import colors from "../colors";
import Abstract from "./Abstract"
import text_style from "../text_style";
import {Button} from "react-native-elements";

const AllAbstracts = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <View>
                    {firebase.state.postersArray.map((posters) => (

                        <View style={styles.container}>
                            <Text key={posters.title}
                                  style={styles.titleText}>{posters.title}</Text>
                            <Text key={posters.author}
                                  style={styles.subtitleText}>{posters.author}</Text>
                            <Text key={posters.university}
                                  style={styles.subtitleText}>{posters.university}</Text>

                            <Abstract/>
                        </View>

                        )
                    )}
                </View>
            )
        }}
    </Subscribe>
);

export default AllAbstracts;

const styles = StyleSheet.create({
    screen:{
        height: '97%',
        marginTop: '3%'
    },
    container: {
        backgroundColor: colors.white,
        marginTop: '3%',
        marginLeft: '5%',
        marginRight: '5%',
        borderColor: colors.mintLight,
        borderWidth: 2,
        width: '90%',
        borderRadius: 5,
        position: 'relative',
        textAlignVertical: 'center',
        padding: 10
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
    text: {
        fontSize: 17,
        color: colors.grey,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: '3%'
    },
});