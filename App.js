import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   scrollDay: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// const styles = StyleSheet.create({
//   buttonDay: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'left',
//     justifyContent: 'left',
//   }
// });
