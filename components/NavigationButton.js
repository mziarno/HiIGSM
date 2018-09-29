import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './nav_style'

export default class HomeButton extends Component {
	render() {
		const {color,  onPress} = this.props;
		return (                      
                <View style={styles.Button}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onPress()}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color={color}
                    size={36}/>
                  <Text style={styles.textStyle}>Home</Text>
                  </TouchableOpacity>  
                  </View>                 
		);
	}
}
HomeButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

 export class MapButton extends Component {
	render() {
		const {onPress, color} = this.props;
		return (       
                <View style={styles.Button}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onPress()}>
                <Icon 
                    name='marker' 
                    type='foundation'
                    color={color}
                    size={36}/>
                <Text style={styles.textStyle}>Map</Text>
                  </TouchableOpacity> 
                  </View>                                
		);
	}
}
MapButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

export class TimetableButton extends Component {
	render() {
		const {onPress, color} = this.props;
		return (          
                <View style={styles.Button}>
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => onPress()}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color={color}
                    size={36}/>
                <Text style={styles.textStyle}>Timetable</Text>
                  </TouchableOpacity>
                  </View>                 
		);
	}
}

TimetableButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
};

