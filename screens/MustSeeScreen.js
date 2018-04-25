import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';


class MustSee extends Component {
  static navigationOptions = {
    title: 'MustSee',
    headerStyle: {
      backgroundColor: '#1D3557',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  render() {
    return (
      <View>

    <Text> MustSee </Text>
    </View>
    )
  }
}

export default MustSee;
