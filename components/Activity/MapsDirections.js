import getDirections from 'react-native-google-maps-directions'
import {View} from 'react-native';
import React, { Component } from 'react';
import {Button} from "react-native-elements";
import colors from "../colors";


export default class MapsDirections extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    handleGetDirections = () => {
        const data = {
            source: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            destination: {
                latitude: this.props.DestinationLatitude,
                longitude: this.props.DestinationLongitude
            },
            params: [
                {
                    key: "travelmode",
                    value: "transit"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        };
        getDirections(data)
    };

    render() {
        return (
            <View >
                <Button
                    onPress={this.handleGetDirections}
                    icon={{
                        size: 26,
                        name: 'location',
                        type: 'octicon',
                        color: colors.blue,
                    }}
                    title="Get Directions"
                    // title=
                    rounded='true'
                    type="outline"
                    size = {45}
                />
            </View>
        );
    }
}