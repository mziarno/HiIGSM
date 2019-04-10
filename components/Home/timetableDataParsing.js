import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../styles";
import text_style from "../text_style";
import React from "react";

const prepareClickableActivities = (weekDay, navigation) => {
    const eventsArray = [];
    weekDay['Activities'].map((activity) => {
        eventsArray.push(
            // ===== Event card =====
            <TouchableOpacity key={activity.name}
                              onPress={() => navigation.navigate('Activity', {activity: activity})}>
                <View style={styles.whiteMedium_Container}>
                    <Text style={text_style.eventText}>{activity.name}</Text>
                    <Text style={text_style.timeText} key={activity.startTime}>{activity.startTime}</Text>
                    <Text style={text_style.placeText} key={activity.place}>{activity.place}</Text>
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
                <View style={styles.day}>
                    <Text style={text_style.text}>{weekDay.dayName}</Text>
                </View>
                <View style={{height: '80%'}}>
                    <ScrollView>
                        {activitiesArray}
                    </ScrollView>
                </View>
            </View>
        )
    });
    return pageViewsArray;
};