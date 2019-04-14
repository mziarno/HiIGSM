import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {Text, View} from "react-native";
import React from "react";
import styles from "../styles";
import text_style from "../text_style";

const AllNotifications = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <View>
                    {firebase.state.notificationsArray.map((notification) => (
                            <View key={notification.content}>
                                <View style={styles.whiteMedium_Container}>
                                    <Text style={text_style.notificationsText}>{notification.content}</Text>
                                </View>
                            </View>
                        )
                    )}
                </View>
            )
        }}
    </Subscribe>
);

export default AllNotifications