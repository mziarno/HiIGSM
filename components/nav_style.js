import {StyleSheet, Platform} from 'react-native';
import {Dimensions} from 'react-native';

const nav_style = StyleSheet.create({
    container:{
      justifyContent: 'space-between',
    },
    
    HomeBtn: {
      width: 69,
      height: 69,
      borderRadius: 150/2,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      left: Dimensions.get('window').width*0.1,
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
  MustSeeBtn: {
    width: 69,
    height: 69,
    borderRadius: 150/2,
    backgroundColor: 'white',
    alignItems: 'center',
    position: 'absolute',
    left: Dimensions.get('window').width*0.4,
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
  TimeTable: {
    width: 69,
    height: 69,
    borderRadius: 150/2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: Dimensions.get('window').width*0.7,
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
  
  });

  
export default nav_style;