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
                <ScrollView>
                    {firebase.state.postersArray.map((posters) => (
                        <Poster title={posters.title} author={posters.author} uni={posters.university} abstract={posters.content}/>
                        )
                    )}

                </ScrollView>
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
    singleNotification: {
        backgroundColor: colors.white,
        width: '90%',
        marginLeft: '5%',
        marginTop: '3%',
        marginBottom: '3%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderRadius: 5,
        shadowColor: colors.shadow,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
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