import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';

import HomeButton, {MapButton, TimetableButton} from '../components/NavigationButton';

class Contact extends React.Component{
   
    render(){
        return(           
            <View>
                <View style={{height:'90%'}}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.whiteMedium_Container}>
                    <TouchableOpacity onPress={() => OpenAnything.Email('igsm2019@geoida.org')}>
                        <Text style={cont_styles.emailText}> E-mail: igsm2019@geoida.org </Text>
                    </TouchableOpacity>       
                </View>

                <View style={styles.greyBigContainer}>
                    <TouchableOpacity onPress={() => OpenAnything.Call('+48692095473')}>
                        <Text style={cont_styles.nameText}> Marcelina Ziarno </Text>
                        <Text style={cont_styles.numberText}> +48 692 095 473 </Text>
                        <View style={cont_styles.photoContainer}>
                            <Image
                            source={require('../assets/images/Marcka.jpg')}
                            style={{width: 60, height: 60, borderRadius:35} }/>
                        </View>
                    </TouchableOpacity>
                </View>
           
                <View style={styles.greyBigContainer}>
                    <TouchableOpacity onPress={() => OpenAnything.Call('+48514893673')}>
                        <Text style={cont_styles.nameText}> Monika Kwiatkowska </Text>
                        <Text style={cont_styles.numberText}> +48 514 893 673 </Text>
                        <View style={cont_styles.photoContainer}>
                            <Image
                            source={require('../assets/images/Monix.jpg')}
                            style={{width: 60, height: 60, borderRadius:35} }/> 
                        </View>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.greyBigContainer}>
                    <TouchableOpacity onPress={() => OpenAnything.Call('+48606289240')}>
                        <Text style={cont_styles.nameText}> Alicja Konkol </Text>
                        <Text style={cont_styles.numberText}> +48 606 289 240 </Text>
                        <View style={cont_styles.photoContainer}>
                            <Image
                            source={require('../assets/images/Ala.jpg')}
                            style={{width: 60, height: 60, borderRadius:35} }/> 
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.greyBigContainer}>
                    <TouchableOpacity onPress={() => OpenAnything.Call('+48512139562')}>
                        <Text style={cont_styles.nameText}> Asia Szymczak </Text>
                        <Text style={cont_styles.numberText}> +48 512 139 562 </Text>
                        <View style={cont_styles.photoContainer}>
                            <Image
                            source={require('../assets/images/Asia.jpg')}
                            style={{width: 60, height: 60, borderRadius:35} }/>
                        </View>
                    </TouchableOpacity>
                </View>
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
        )
    }
}

export default Contact;
