import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "../styles";
import text_style from "../text_style";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";

const TimetablePager = function (props) {
    // const {navigate} = props.navigation;

    const pageViewsArray = [];

    const prepareClickableActivities = weekDay => {
        const eventsArray = [];
        weekDay['Activities'].map((activity) => {
            eventsArray.push(
                // ===== Event card =====
                <TouchableOpacity key={activity.name}
                                  onPress={() => props.navigation.navigate('Activity', {activity: activity})}>
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

    const prepareTimetablePager = weekDaysArray => {
        weekDaysArray.map((weekDay) => {
            const activitiesArray = prepareClickableActivities(weekDay);

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
        })
    };

    return (
        <Subscribe to={[FirebaseContainer]}>
            {firebase => {
                prepareTimetablePager(firebase.state.weekDaysArray);
                return (
                    <IndicatorViewPager
                        style={styles.timetable_background}
                        indicator={<PagerDotIndicator pageCount={pageViewsArray.length}/>}>
                        {pageViewsArray}
                    </IndicatorViewPager>
                );
            }}
        </Subscribe>
    );
};

export default TimetablePager