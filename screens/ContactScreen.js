import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import {WebBrowser} from "expo";

class ContactScreen extends React.Component {

    render() {
        return (
            <View>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => OpenAnything.Email('info@igsm2019.com')}>
                            <Text style={cont_styles.emailText}> E-mail: info@igsm2019.com </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+48692095473')}>
                            <Text style={cont_styles.nameText}> Marcelina Ziarno </Text>
                            <Text style={cont_styles.numberText}> +48 692 095 473 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/Marcka.jpg')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('+48514893673')}>
                            <Text style={cont_styles.nameText}> Monika Kwiatkowska </Text>
                            <Text style={cont_styles.numberText}> +48 514 893 673 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/Monix.jpg')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.singleContact}>
                        <TouchableOpacity onPress={() => OpenAnything.Call('112')}>
                            <Text style={cont_styles.nameText}> Emergency Call </Text>
                            <Text style={cont_styles.numberText}> 112 </Text>
                            <View style={cont_styles.photoContainer}>
                                <Image
                                    source={require('../assets/images/emergency.jpg')}
                                    style={{width: 60, height: 60, borderRadius: 30}}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.facebook.com/igsmwarsaw/')}>
                            <Text style={cont_styles.emailText}> Our Facebook Page!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/igsmwarsaw2019/')}>
                            <Text style={cont_styles.emailText}> Visit Our Instagram!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mailContainer}>
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://chat.whatsapp.com/CPsAboqS4N29dpDxalfZ6z')}>
                            <Text style={cont_styles.emailText}>Join our WhatsApp Group! </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default ContactScreen;
