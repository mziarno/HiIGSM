import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {View} from "react-native";
import React from "react";
import {prepareNotifications} from './notificationsParsing'

const AllNotifications =  props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            const notificationsArray = prepareNotifications(firebase.state.notificationsArray, props.navigation);
            return(
                <View>
                    {notificationsArray}
                </View>
            )
        }}
    </Subscribe>
)

export default AllNotifications