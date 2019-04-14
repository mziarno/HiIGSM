import {Text, View} from "react-native";
import styles from "../styles";
import text_style from "../text_style";
import React from "react";

export const prepareNotifications = (NotificationsArray) => {
    const NotificationArray = [];
    NotificationsArray.map((notification) => {
        NotificationArray.push(
            <View key={notification.content}>
                <View style={styles.whiteMedium_Container}>
                    <Text style={text_style.notificationsText}>{notification.content}</Text>
                </View>
            </View>
        )
    });
    return NotificationArray;
};