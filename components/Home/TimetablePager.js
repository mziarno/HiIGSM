import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import React from "react";
import styles from "../styles";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import {prepareTimetablePager} from "./timetableDataParsing";

const TimetablePager = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            const pageViewsArray = prepareTimetablePager(firebase.state.weekDaysArray, props.navigation);
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

export default TimetablePager