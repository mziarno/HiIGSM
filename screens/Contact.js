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

        <View style={{top: 113, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center',}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}} >Home</Text>
                </TouchableOpacity>
            </View>
            

            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                <Icon 
                    name='marker' 
                    type='foundation'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Map</Text>
                </TouchableOpacity>
            </View>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Timetable</Text>
                </TouchableOpacity>
            </View>
        
            </View>

            </View>
        )
    }
}



const s = StyleSheet.create({
    
    emailText:{
        fontSize: 18,
		color: '#457B9D',
		fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 12,
      
    },
    nameText: {
        fontSize: 17,
        color: '#4A4A4A',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10,
        top: 5,
        //position: 'absolute',
    },
    numberText:{
        fontSize: 12,
        color: '#4A4A4A',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginBottom:50,
        marginTop: 5,
    },
   
    photoContainer:{
            position: 'absolute',
            right: 30,
            marginTop:5,
    },
   

});

export default Contact;
