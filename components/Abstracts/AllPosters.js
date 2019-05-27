import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {View, StyleSheet, ScrollView} from "react-native";
import React from "react";
import colors from "../colors";
import Poster from "./Poster"


const AllPosters = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <View>
                    {firebase.state.postersArray.map((posters) => (

                        <ScrollView style={styles.container}>
                            <Poster title={posters.title} author={posters.author} uni={posters.university} abstract={posters.content}/>
                        </ScrollView>

                        )
                    )}
                </View>
            )
        }}
    </Subscribe>
);

export default AllPosters;

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