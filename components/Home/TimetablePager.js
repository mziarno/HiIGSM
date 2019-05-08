import {Subscribe} from "unstated";
import {StyleSheet} from 'react-native';
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import React from "react";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import {prepareTimetablePager} from "./timetableDataParsing";
import colors from "../colors";

const TimetablePager = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            const pageViewsArray = prepareTimetablePager(firebase.state.weekDaysArray, props.navigation);
            return (
                <IndicatorViewPager
                    style={style.timetable}
                    indicator={<PagerDotIndicator 
                        dotStyle={style.dot}
                        selectedDotStyle={style.dotSelect}
                        pageCount={pageViewsArray.length}/>}>
                    {pageViewsArray}
                </IndicatorViewPager>
            );
        }}
    </Subscribe>
);

const style = StyleSheet.create({
    timetable:{
        backgroundColor: 'transparent',
        width: '100%',
        height: '75%',
        position: 'relative'},
    dot:{
        backgroundColor: colors.mintLigth
    },
    dotSelect:{
        backgroundColor: colors.mintDark
    }
});

export default TimetablePager