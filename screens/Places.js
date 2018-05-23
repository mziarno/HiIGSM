import React, {Component} from 'react';
import {View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        Platform, 
        TouchableOpacity, 
        Image, 
        FlatList,
        StatusBar,
        Icon
        } from 'react-native';
import MapScreen from './Map';
import styles from '../components/styles';
import NavigationBtn from '../components/NavigationBtn';
import nav_style from '../components/nav_style';


const places = ['National Museum', 'Museum of the History of Polish Jews', 'Zachęta – National Gallery of Art', 'Foksal Gallery', 'Sisigmunt\'s Column']

class Places extends Component{
 

    render(){
       
        return(
            <View style={styles.background}>
            
            
            <FlatList
                data={places}
                // extraData={this.state}
                renderItem={({ item }) => (
                <View style={styles.greyMedium_Container}>
           
                <Text style={styles.text1}> {item} </Text>
                </View>
                )}
                />
        
        {/* <View style={{top: 230, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center',}}>
            
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
        
            </View> */}


        
            </View>


    )
    }
}


export default Places;


