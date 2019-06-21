import React, {Component} from 'react';
import {Image, StyleSheet, View, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import colors from "../components/colors";
import {Icon} from "react-native-elements";


class MapScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            //cokolwiek: 1
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
            (error) => this.setState({latitude: 52.232794, longitude: 21.018296, error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    // componentWillMount() {
    //     //Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint
    //     setTimeout(()=>{this.setState({cokolwiek: 0})}, 500);
    // }

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.latitude ?
                    <MapView
                        customMapStyle={mapStyle}
                        style={styles.map}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showsScale={true}
                        showsCompass={true}
                        showsPointsOfInterest={false}
                        initialRegion={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.03,
                            longitudeDelta: 0.02
                        }}>

                        <MapView.Marker
                            coordinate={{latitude: 52.232353, longitude: 20.981048}}
                            title="Warsaw Rising Museum">
                            <Icon
                                name='account-balance'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.241881, longitude: 21.028727}}
                            title="Copernicus Science Centre">
                            <Icon
                                name='account-balance'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.218905, longitude: 21.009941}}
                            title="WUT Main Canteen">
                            <Icon
                                name='restaurant'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.217937, longitude: 21.010257}}
                            title="CZIiTT">
                            <Icon
                                name='school'
                                raised={true}
                                size={15}
                                color={colors.mintDark}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.221455, longitude: 21.007233}}
                            title="Building of Faculty of Physics WUT">
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.232404, longitude: 21.018069}}
                            title="Club Stereo">
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.232794, longitude: 21.018296}}
                            title="Patchwork Warsaw Hostel">
                            <Icon
                                name='hotel'
                                raised={true}
                                size={15}
                                color={colors.mintDark}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.220521, longitude: 21.010488}}
                            title="Main building of WUT">
                            <Icon
                                name='school'
                                raised={true}
                                size={15}
                                color={colors.mintDark}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.242152, longitude: 21.009646}}
                            title="Teatro Cubano">
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.202950, longitude: 21.001073}}
                            title='"Mechanik" Club'>
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 52.211594, longitude: 21.010220}}
                            title='"Stodoła" Club'>
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.938917, longitude: 20.912224}}
                            title='Parking'>
                            <Icon
                                name='local-parking'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.937335, longitude: 20.913795}}
                            title='Bread baking'>
                            <Icon
                                name='local-dining'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.937879, longitude: 20.913646}}
                            title='Dances \ Flankyball'>
                            <Icon
                                name='accessibility'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.937935, longitude: 20.912792}}
                            title='Geo-Olympics II'>
                            <Icon
                                name='directions-run'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.938194, longitude: 20.914402}}
                            title='Geo-Olympics I'>
                            <Icon
                                name='directions-run'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.938267, longitude: 20.913999}}
                            title='Volleyball'>
                            <Icon
                                name='volleyball'
                                type='material-community'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 51.938495, longitude: 20.913130}}
                            title='Football'>
                            <Icon
                                name='soccer'
                                type='material-community'
                                raised={true}
                                size={15}
                                color={colors.mintLight}
                                reverse={true}
                            />
                        </MapView.Marker>

                    </MapView>
                    :
                    <ActivityIndicator size="large" color="#0000ff"/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

const mapStyle = [
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e8f4cc"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];

export default MapScreen;