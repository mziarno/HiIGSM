import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TouchableOpacity, Platform, StatusBar,
        AppRegistry, Dimensions} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import Communications from 'react-native-communications';
import * as OpenAnything from 'react-native-openanything';

import styles from '../components/styles';
import nav_style from '../components/nav_style';
import cont_styles from '../components/cont_style';

class Contact extends Component{
   
    render(){
        return(           
            <View>
                <StatusBar barStyle="light-content"/>
                <View style={styles.greyMedium_Container}>
                    <TouchableOpacity onPress={() => OpenAnything.Email('igsm2019@geoida.org')}>
                        <Text style={cont_styles.emailText}> E-mail: igsm2019@geoida.org </Text>
                    </TouchableOpacity>       
                </View>

                <View style={styles.greyBig_Container}>
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
                
            
                <View style={styles.greyBig_Container}>
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
            
                <View style={styles.greyBig_Container}>
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
                
                <View style={styles.greyBig_Container}>
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

            <View style={{top: 90}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                <Image
                source={require('../assets/icons/home.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                title='Home'
                />
                </TouchableOpacity>
            </View>

            <View style={nav_style.MustSeeBtn}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Map')}>
                <Image
                source={require('../assets/icons/map.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                />
                </TouchableOpacity>
            </View>
            <View style={nav_style.TimeTable}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Image
                source={require('../assets/icons/calendar.png')}
                style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}
                />
                </TouchableOpacity>
            </View>
            </View>

            </View>
        )
    }
}
export default Contact;
