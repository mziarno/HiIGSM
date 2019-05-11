import {Text, View, Image} from "react-native";
import React from "react";
import styles from "./ActivityStyles";
import BuildingPlan from "./BuildingPlan";
import MapsDirections from "./MapsDirections"
import colors from "../colors";

const ActivityDetails = props => {
    const {navigation} = props
    const activityDetails = navigation.getParam('activity', 'Brak danych');
    console.log(activityDetails);

    let image =  '';
    if (activityDetails.place === "Hostel")
        image = require('../../assets/images/patch.jpg');
    if (activityDetails.place === "Main Canteen")
        image = require('../../assets/images/Marcka.jpg');


    return (
        <View>
            <Image
                source={image}
                style={{width: '100%', height: 180}}/>
            {/*<Text key ={activityDetails.name}> {activityDetails.name}</Text>*/}

            {/* Place & Address*/}
            <View style={styles.PlaceAddress}>
                <Text key={activityDetails.placeDetails}
                      style={styles.placeTextStyle}> {activityDetails.placeDetails} </Text>
                <Text key={activityDetails.address}
                      style={styles.addressText}> {activityDetails.address} </Text>
                <Text key={activityDetails}
                      style={styles.timeText}>{activityDetails.startTime} - {activityDetails.endTime}</Text>
            </View>

            {/* Check on Map & Map Directions buttons*/}
            <View style={styles.button}>
                <MapsDirections DestinationLatitude={activityDetails.latitude} DestinationLongitude={activityDetails.longitude}/>
                {/*<BuildingPlan/>*/}
            </View>

            {/*/Activities' Details*/}
            <View style={styles.activitiesDetails}>
                <Text key={activityDetails.activityDetails}
                      style={styles.detailsText}> {activityDetails.activityDetails} </Text>
            </View>
        </View>
    )
};

export default ActivityDetails