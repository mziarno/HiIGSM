import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import HomeButton, {MapButton, TimetableButton} from '../../components/NavigationButton';
export default class Desc extends React.Component {



    render() {
        return (
            <View>
                <View style={{ height: '83%' }}>
                    <TouchableOpacity disabled={true}
                        style={styles.containerStyle}>
                        <Text style={styles.textStyle}>Presentation abstract</Text>
                        <Text style={styles.abstractStyle}>Praca ma na celu zbadanie
                        i przetestowanie w jakich operacjach na danych
                        przestrzennych możliwe jest przyspieszenie analiz
                        poprzez wykorzystanie zrównoleglania obliczeń
                        na procesorach graficznych. Praca oparta będzie
                        o technologię Nvidia CUDA. Dzięki wykorzystaniu
                        tej metody niektóre działania mogą być wykonywane
                        nawet kilkaset razy szybciej.Rozwiązanie to
                        zostało po raz pierwszy zaprezentowane w roku 2007,
                        ale wciąż jest rzadko wykorzystywane w przetwarzaniu
                        danych przestrzennych.Efektem pracy będzie wskazanie
                        do jakiego typu problemów obliczeniowych najlepiej
                        wykorzystywać procesory graficzne.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{top: 5, justifyContent: 'space-around', flexDirection: 'row', flex:1, alignItems: 'center' }}>       
                    <HomeButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <MapButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Map')}
                    />
                    <TimetableButton 
                    color='#1D3557'
                    onPress={() => this.props.navigation.navigate('Timetable')}
                    />
                </View> 
            </View>
        )}
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4a4a4a',
        textAlign: 'center'
    },

    abstractStyle: {

        marginTop: 10,
        fontSize: 16,
        color: '#4a4a4a',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    containerStyle: {
        height: '100%',
        width: '90%',
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        borderRadius: 5,
        elevation: 3,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
    }
})