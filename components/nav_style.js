import {StyleSheet, Platform} from 'react-native';


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 10, 
    color:'#1D3557', 
    textAlign: 'center'
  },
  Button: {
      width: 70,
      height: 70,
      borderRadius: 150/2,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'visible',
      ...Platform.select({
        ios: {
          shadowColor: '#707070',
          shadowOffset: { height: 3 },
          shadowOpacity: 1,
          shadowRadius: 3,
        },
        android: {
          elevation: 2
        },
      }),
      
  },
  // MapBtn: {
  //   width: 69,
  //   height: 69,
  //   borderRadius: 150/2,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   overflow: 'visible',
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: '#707070',
  //       shadowOffset: { height: 3 },
  //       shadowOpacity: 1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 2
  //     },
  //   }),
  // },
  // TimetableBtn: {
  //   width: 69,
  //   height: 69,
  //   borderRadius: 150/2,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'absolute',
  //   overflow: 'visible',
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: '#707070',
  //       shadowOffset: { height: 3 },
  //       shadowOpacity: 1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 2
  //     },
  //   }),
    
  // },
  
  });

  
export default styles;