import React, {Component} from "react";
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {Icon} from 'react-native-vector-icons';

const HeaderComponent = props=> (
    <View>
        <TouchableWithoutFeedback onPress={() => null}>
            <Icon
                name="bars"
                color="white"
                size={25}
            />
        </TouchableWithoutFeedback>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between'
    }
})

export default HeaderComponent
