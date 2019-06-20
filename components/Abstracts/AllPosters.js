import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView} from "react-native";
import React from "react";
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

