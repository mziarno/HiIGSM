import React, {Component} from 'react';
import {Image, StyleSheet, View,} from 'react-native';
import MapView from 'react-native-maps';

class MapScreen extends Component {

    render() {
        return (

            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsScale={true}
                    showsCompass={true}
                    showsPointsOfInterest={false}
                    initialRegion={{
                        latitude: 52.232222,
                        longitude: 21.008333,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                    <MapView.Marker
                        coordinate={{latitude: 52.220521, longitude: 21.010488}}
                        title="WUT Main Building">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.232353, longitude: 20.981048}}
                        title="Warsaw Rising Museum">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.232794, longitude: 21.018296}}
                        title="Patchwork Warsaw Hostel">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.241881,  longitude: 21.028727}}
                        title="Copernicus Science Centre">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.218905, longitude: 21.009941}}
                        title="WUT Main Canteen">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.217937, longitude: 21.010257}}
                        title="CZIiTT">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                    <MapView.Marker
                        coordinate={{latitude: 52.247259, longitude: 21.013367}}
                        title="Sigismund's Column">
                        <Image
                            source={require('../assets/icons/marker.png')}
                            style={{width: 20, height: 30}}/>
                    </MapView.Marker>
                </MapView>
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

export default MapScreen;