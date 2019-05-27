import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import colors from "../colors";

const MainNotification = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <TouchableOpacity onPress={() => props.navigation.navigate('Notifications')} style={style.touchable}>
                    <View style={style.container}>
                        <View style={style.heading}>
                            <Text style={style.titleText}> Notifications </Text>
                        </View>
                        <Text style={style.notificationsText}> {firebase.state.message} </Text>
                    </View>
                </TouchableOpacity>
            );
        }}
    </Subscribe>
);
const style = {
    touchable: {
        // height: '25%',
        marginBottom: '3%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    container: {
        position: 'relative',
        width: '100%',
        // height: '100%',
        backgroundColor: colors.white,
        borderRadius: 5,
        shadowColor: colors.shadow,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    heading: {
        backgroundColor: colors.mintLight,
        width: '100%',
        height: 40,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    notificationsText: {
        fontSize: 18,
        color: colors.grey,
        textAlign: 'center',
        alignContent: 'space-around',
        marginTop: 14,
        marginBottom: 14
    }
};

export default MainNotification