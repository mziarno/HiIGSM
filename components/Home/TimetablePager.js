import {Subscribe} from "unstated";
import {StyleSheet, View} from 'react-native';
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import React, {Component} from "react";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import {prepareTimetablePager} from "./timetableDataParsing";
import colors from "../colors";

class TimetablePager extends Component<{}> {
    constructor(props) {
        super(props);
        this.viewPager = React.createRef();
        this.actualDate = dateChecker();
    }

    moveToFirstPage = (firstPage) => {
        if (this.viewPager.setPage) {
            this.viewPager.setPage(firstPage);
            this.moveToFirstPage = () => {{/* Intentionally disabled after first time */}};
        }
    };

    render() {
        return (
            <Subscribe to={[FirebaseContainer]}>
                {firebase => {

                    this.moveToFirstPage(this.actualDate.dayOfConference);

                    const pageViewsArray = prepareTimetablePager(firebase.state.weekDaysArray, this.props.navigation, this.actualDate);
                    return (
                        <View style={{flex: 1}}>
                            <IndicatorViewPager
                                ref={viewPager => { this.viewPager = viewPager;}}
                                style={style.timetable}
                                // pagerStyle={{backgroundColor: colors.mintLight}}
                                indicator={_renderDotIndicator(7)}
                            >
                                {pageViewsArray}
                            </IndicatorViewPager>
                            {/*<View style={style.lineStyle}/>*/}
                        </View>
                    );
                }}
            </Subscribe>
        );
    }
}

const _renderDotIndicator = (pageCount) => {
    return <PagerDotIndicator
        style={{marginTop: "10%"}}
        dotStyle={style.dot}
        selectedDotStyle={style.dotSelect}
        pageCount={pageCount}/>;
};

const dateChecker = () => {
    const CONF_START = 18;
    const today = new Date();
    const dd = today.getDate();
    const dayOfConference = dd - CONF_START;

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours + ':' + "00" + ' ' + ampm;
    return {dayOfConference: dayOfConference, actualTimeAMPM: strTime};
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