import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import colors from "../colors";

const AllNotifications = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (

                <View style={{height:'100%'}}>
                    <ScrollView>
                    {firebase.state.notificationsArray.map((notification) => (
                            <View>
                                <View style={styles.singleNotification}>
                                    <View style = {styles.lineStyle} />
                                    <Text key={notification.content} style={styles.notificationsText}>{notification.content}</Text>
                                    <Text key={notification.date} style={styles.notificationsDate}>{notification.date}</Text>
                                </View>
                            </View>
                        )
                    )}
                    </ScrollView>
                </View>

            )
        }}
    </Subscribe>
);

export default AllNotifications

const styles = StyleSheet.create({
        singleNotification: {
            backgroundColor: colors.white,
            width: '90%',
            marginLeft: '5%',
            // height: 60,
            position: 'relative',
            // marginTop: '3%',
            borderRadius: 5,
            shadowColor: colors.shadow,
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 2,
        },

        lineStyle:{
            borderWidth: 1,
            borderColor: colors.mintLigth,
            marginTop: '2%',
            borderRadius: 5,
            width: '90%',
            marginLeft: '5%',

        },
        notificationsText: {
            fontSize: 15,
            marginLeft: '5%',
            color: colors.grey,
            textAlign: 'left',
            textAlignVertical: 'center',
            top: 15
        },
        notificationsDate: {
            fontSize: 10,
            marginRight: '5%',
            color: colors.grey,
            textAlign: 'right',
            // textAlignVertical: 'center',
            bottom: 5
        },

}
);