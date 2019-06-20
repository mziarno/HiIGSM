import {Subscribe} from "unstated";
import {StyleSheet, View} from 'react-native';
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
                <View style={{flex: 1}}>
                    <IndicatorViewPager
                        style={style.timetable}
                        // pagerStyle={{backgroundColor: colors.mintLight}}
                        indicator={_renderDotIndicator(pageViewsArray.length)}
                    >
                        {pageViewsArray}
                    </IndicatorViewPager>
                    {/*<View style={style.lineStyle}/>*/}
                </View>
            );
        }}
    </Subscribe>
);

const _renderDotIndicator = (pageCount) => {
    return <PagerDotIndicator
        style={{marginTop: "10%"}}
        dotStyle={style.dot}
        selectedDotStyle={style.dotSelect}
        pageCount={pageCount}/>;
};

const style = StyleSheet.create({
    timetable: {
        backgroundColor: 'transparent',
        width: '100%',
        // height: '90%',
        flex: 1,
        // borderBottomWidth: 1
        // flexDirection:'column-reverse',
        // position: 'relative'
    },
    dot: {
        backgroundColor: colors.mintLight
    },
    dotSelect: {
        backgroundColor: colors.mintDark
    },
    lineStyle: {
        borderWidth: 1,
        borderColor: colors.mintLigth,
        top: -75,
        borderRadius: 5,
        width: '90%',
        marginLeft: '5%',
    },
});

export default TimetablePager