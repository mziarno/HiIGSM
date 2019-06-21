import {Image, ScrollView, Text, View} from "react-native";
import React from "react";
import styles from "./ActivityStyles";
import MapsDirections from "./MapsDirections"
import colors from "../colors";


const ActivityDetails = props => {
    const {navigation} = props;
    const activityDetails = navigation.getParam('activity', 'Brak danych');
    console.log(activityDetails);

    let image = require('../../assets/images/Places/warsaw.jpg');
    if (activityDetails.place === "Kawęczyn")
        image = require('../../assets/images/Places/kaweczyn.jpg');
    if (activityDetails.place === "Patchwork Warsaw Hostel")
        image = require('../../assets/images/Places/patch.jpg');
    if (activityDetails.place === "Main Canteen")
        image = require('../../assets/images/Places/canteen.jpg');
    if (activityDetails.place === "CZIiTT")
        image = require('../../assets/images/Places/cziitt.jpg');
    if (activityDetails.place === "Club Stereo" || activityDetails.place === "Teatro Cubano" || activityDetails.place === "Mechanik Club" || activityDetails.place === "Dekada")
        image = require('../../assets/images/Places/party.jpg');
    if (activityDetails.place === "Stodoła")
        image = require('../../assets/images/Places/international_evening.jpg');
    if (activityDetails.place === "Building of Faculty of Physics WUT")
        image = require('../../assets/images/Places/grand_ball.jpg');
    if (activityDetails.name === "City Game")
        image = require('../../assets/images/Places/city_game.jpg');
    if (activityDetails.name === "Geo - Olympics/Flankyball")
        image = require('../../assets/images/Places/geoolympics.jpg');
    if (activityDetails.name === "Sport Time/Folk Dance")
        image = require('../../assets/images/Places/sporTime_folkDance.jpg');
    if (activityDetails.name === "Abstract Session")
        image = require('../../assets/images/Places/poster_session.jpg');
    if (activityDetails.name === "Presentation Session")
        image = require('../../assets/images/Places/presentation_session.jpg');
    if (activityDetails.name === "Workshops")
        image = require('../../assets/images/Places/workshops.jpg');
    if (activityDetails.name === "Museum")
        image = require('../../assets/images/Places/museum.jpg');
    if (activityDetails.name === "Check-in" || activityDetails.name === "Check-out")
        image = require('../../assets/images/Places/check-in.jpg');


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
            <ScrollView>
                <View style={styles.button}>
                    {activityDetails.latitude &&
                    <MapsDirections DestinationLatitude={activityDetails.latitude}
                                    DestinationLongitude={activityDetails.longitude}
                                    placeName={activityDetails.place}/>}
                    {activityDetails.latitude2 && (
                        <>
                            <View style={{
                                borderWidth: 1,
                                borderColor: colors.mintDark,
                                marginTop: '2%',
                                borderRadius: 5,
                                width: '90%',
                                marginLeft: '5%'
                            }}/>
                            <MapsDirections DestinationLatitude={activityDetails.latitude2}
                                            DestinationLongitude={activityDetails.longitude2}
                                            placeName={activityDetails.place2}/>
                        </>)}
                </View>

                {/*/Activities' Details*/}
                <View style={styles.activitiesDetails}>
                    <Text key={activityDetails.activityDetails}
                          style={styles.detailsText}> {activityDetails.activityDetails} </Text>
                </View>
            </ScrollView>
        </View>
    )
};

export default ActivityDetails