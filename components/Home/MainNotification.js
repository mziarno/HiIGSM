import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "../styles";
import text_style from "../text_style";

const MainNotification = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')}>
                    <View style={styles.notificationContainer}>
                        <View style={styles.notification}>
                            <Text style={text_style.text}> Notifications </Text>
                        </View>
                        <Text style={text_style.notificationsText}> {firebase.state.message} </Text>
                    </View>
                </TouchableOpacity>
            );
        }}
    </Subscribe>
);

export default MainNotification