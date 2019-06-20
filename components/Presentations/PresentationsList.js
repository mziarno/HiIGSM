import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView} from "react-native";
import React from "react";
import Abstract from "../Abstracts/Abstract";


const PresentationsList = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <ScrollView>
                    {firebase.state.presentationsArray.map((presentations) => (
                            <Abstract title={presentations.title} author={presentations.author} uni={presentations.university} abstract={presentations.content}/>
                        )
                    )}
                </ScrollView>
            )
        }}
    </Subscribe>
);

export default PresentationsList;

