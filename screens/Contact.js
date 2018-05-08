import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, FlatList, TouchableOpacity, Platform, StatusBar} from 'react-native';
import Communications from 'react-native-communications';
import * as OpenAnything from 'react-native-openanything';



class Contact extends Component{
    static navigationOptions = {
        title: 'Contact With Organizators',       
        headerStyle: {
          backgroundColor: '#1D3557'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        } 
      } 
      render(){
        return(
            <ScrollView>
            <View style={styles.container}>
            
            <StatusBar barStyle="light-content"/>
            <View style={styles.emailContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Email('igsm2019@geoida.org')}>
                <Text style={styles.emailText}> E-mail: igsm2019@geoida.org </Text>
            </TouchableOpacity>       
            </View>

            <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Call('+48692095473')}>
            <Text style={styles.nameText}> Marcelina Ziarno </Text>
            <Text style={styles.numberText}> +48 692 095 473 </Text>
            <View style={styles.photoContainer}>
                <Image
                source={require('../assets/images/Marcka.png')}
                style={{width: 70, height: 70, borderRadius:35} }/> 
            </View>
            </TouchableOpacity>
            </View>
            
           
            <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Call('+48514893673')}>
            <Text style={styles.nameText}> Monika Kwiatkowska </Text>
            <Text style={styles.numberText}> +48 514 893 673 </Text>
            <View style={styles.photoContainer}>
                <Image
                source={require('../assets/images/Marcka.png')}
                style={{width: 70, height: 70, borderRadius:35} }/> 
            </View>
            </TouchableOpacity>
            </View>
          
            <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Call('+48606289240')}>
            <Text style={styles.nameText}> Alicja Konkol </Text>
            <Text style={styles.numberText}> +48 606 289 240 </Text>
            <View style={styles.photoContainer}>
                <Image
                source={require('../assets/images/Marcka.png')}
                style={{width: 70, height: 70, borderRadius:35} }/> 
            </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Call('+48692095473')}>
            <Text style={styles.nameText}> Marcelina Ziarno </Text>
            <Text style={styles.numberText}> +48 692 095 473 </Text>
            <View style={styles.photoContainer}>
                <Image
                source={require('../assets/images/Marcka.png')}
                style={{width: 70, height: 70, borderRadius:35} }/> 
            </View>
            </TouchableOpacity>
            </View>
           
            <View style={styles.peopleContainer}>
            <TouchableOpacity onPress={() => OpenAnything.Call('+48692095473')}>
            <Text style={styles.nameText}> Marcelina Ziarno </Text>
            <Text style={styles.numberText}> +48 692 095 473 </Text>
            <View style={styles.photoContainer}>
                <Image
                source={require('../assets/images/Marcka.png')}
                style={{width: 70, height: 70, borderRadius:35} }/> 
            </View>
            </TouchableOpacity>
            </View>
            
            </View>
            </ScrollView>
            

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    emailContainer:{
        backgroundColor: '#ECECEC',
        width: '90%',
		height: '9%',
        position: 'relative',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 20,
        borderRadius: 5,
        ...Platform.select({
            ios: {
              shadowColor: '#707070',
              shadowOffset: { height: 3 },
              shadowOpacity: 1,
              shadowRadius: 3,
            },
            android: {
              elevation: 15
            },
          }),
        marginTop:10
    },
    peopleContainer:{        
        width: '90%',
		height: '16%',
        position: 'relative',
        marginLeft: '5%',
        marginRight: '5%',
        margin: 3,
        borderRadius: 5,
        ...Platform.select({
            ios: {
              shadowColor: '#707070',
              shadowOffset: { height: 3 },
              shadowOpacity: 1,
              shadowRadius: 3,
            },
            android: {
              elevation: 15
            },
          }),
        backgroundColor: '#ECECEC',
    },
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
        marginTop: 5,
    },
    numberText:{
        fontSize: 12,
        color: '#4A4A4A',
        textAlignVertical: 'center',
        marginLeft: 10,
        marginBottom:50,
    },
    photoContainer:{
            position: 'absolute',
            right: 30,
            marginTop:5,
    },
   

});

export default Contact;
