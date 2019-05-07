import {Text, View, Image} from "react-native";
import React from "react";
import styles from "./ActivityStyles";
import BuildingPlan from "./BuildingPlan";
import MapsDirections from "./MapsDirections"

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
                style={{width: '100%', height: 150}}/>
            {/*<Text key ={activityDetails.name}> {activityDetails.name}</Text>*/}
            {/*<Text key={activityDetails.startTime} >{activityDetails.startTime}</Text>*/}
            {/*<Text key={ activityDetails.endTime}> { activityDetails.endTime} </Text>*/}

            {/* Place & Adress*/}
            <View style={styles.containerStyle}>
                <Text key={activityDetails.placeDetails}
                      style={styles.textStyle}> {activityDetails.placeDetails} </Text>
                <Text key={activityDetails.address} style={styles.textStyleSmall}> {activityDetails.address} </Text>
            </View>

            {/* Check on Map & Map Directions buttons*/}
            <View style={{justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', marginTop: '3%'}}>
                <MapsDirections DestinationLatitude={activityDetails.latitude} DestinationLongitude={activityDetails.longitude}/>
                <BuildingPlan/>
            </View>

            {/*/Activities' Details*/}
            <View style={styles.containerStyle2}>
                <Text key={activityDetails.activityDetails}
                      style={styles.textDesc}> {activityDetails.activityDetails} </Text>
            </View>
        </View>
    )
};

export default ActivityDetails