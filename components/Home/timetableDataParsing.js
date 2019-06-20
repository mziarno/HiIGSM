import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import colors from "../colors";

const prepareClickableActivities = (weekDay, navigation) => {
    const eventsArray = [];
    weekDay['Activities'].map((activity, index) => {
        eventsArray.push(
            // ===== Event card =====
            <TouchableOpacity key={activity.name + weekDay.dayName + index} activeOpacity={0.8}
                              onPress={() => navigation.navigate('Activity', {activity: activity})}>
                <View style={style.event} key={activity.name + weekDay.dayName}>
                    <Text style={style.eventText}>{activity.name}</Text>
                    <Text style={style.timeText}>{activity.startTime}</Text>
                    <Text style={style.placeText}>{activity.place}</Text>
                </View>
            </TouchableOpacity>
        );
    });
    return eventsArray;
};

export const prepareTimetablePager = (weekDaysArray, navigation) => {
    const pageViewsArray = [];
    weekDaysArray.map((weekDay) => {
        const activitiesArray = prepareClickableActivities(weekDay, navigation);

        pageViewsArray.push(
            <View key={weekDay.dayName}>
                <View style={style.heading}>
                    <Text style={style.textHeading}>{weekDay.dayName}</Text>
                </View>
                <View style={{height: '85%'}}>
                    <ScrollView>
                        {activitiesArray}
                    </ScrollView>
                    <View style={style.lineStyle}/>
                </View>
            </View>
        )
    });
    return pageViewsArray;
};

const style = {

    heading: {
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: colors.mintDark,
        width: '90%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center'
    },
    event: {
        backgroundColor: colors.white,
        width: '90%',
        height: 50,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 2,
        marginBottom: 1,
        position: 'relative',
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    textHeading: {
        fontSize: 17,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    eventText: {
        fontSize: 17,
        color: colors.grey,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10
    },
    timeText: {
        fontSize: 12,
        color: colors.grey,
        right: 10,
        top: 10,
        position: 'absolute'
    },
    placeText: {
        fontSize: 12,
        color: colors.grey,
        right: 10,
        position: 'absolute',
        bottom: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: colors.shadow,
        // marginTop: '2%',
        borderRadius: 5,
        width: '90%',
        marginLeft: '5%',
    },
};