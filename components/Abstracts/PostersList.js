import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView} from "react-native";
import React from "react";
import Abstract from "./Abstract"


const PostersList = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <ScrollView>
                    {firebase.state.postersArray.map((posters) => (
                        <Abstract title={posters.title} author={posters.author} uni={posters.university} abstract={posters.content}/>
                        )
                    )}
                </ScrollView>
            )
        }}
    </Subscribe>
);

export default PostersList;

