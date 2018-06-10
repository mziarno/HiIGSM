import { StyleSheet, Platform } from 'react-native';



const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },

  whiteBigContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 60,
    position: 'relative',
    marginTop: 5,
    marginBottom: 3,
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 5,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
  },
  white_Left_Container: {
    backgroundColor: '#ffffff',
    width: '40%',
    height: 70,
    position: 'absolute',
    marginRight: '5%',
    marginTop: 5,
    borderRadius: 5,
    left: '5%',
    justifyContent: 'flex-end',
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
  },
  white_Right_Container: {
    backgroundColor: '#ffffff',
    width: '40%',
    height: 70,
    position: 'absolute',
    marginLeft: '5%',
    marginTop: 5,
    borderRadius: 5,
    justifyContent: 'flex-end',
    right: '5%',

    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),

  },
  text1: {
    fontSize: 16,
    color: '#1D3557',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginLeft: 15,

  },
  text2: {
    fontSize: 14,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 5,
  },
  icon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'

  },
  greyMedium_Container: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 50,
    position: 'relative',
    marginTop: 5,
    marginBottom: 3,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'center',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
    margin: 3
  },
  whiteMedium_Container: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 5
      },
    }),
    marginTop: 10
  },
  greyBig_Container: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 70,
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 5,
    marginBottom: 3,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
   
  },

  notification: {
    backgroundColor: '#cc0033',//'#E63946', //'#990033',
    width: '100%',
    height: 40,
    position: 'relative',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center'

  },
  notificationContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 120,
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 7,
    borderRadius: 5,

    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
    marginTop: 10

  },
  day: {
    backgroundColor: '#1D3557',
    width: '90%',
    height: 40,
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 5,
    justifyContent: 'center'
  },

  firstContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 1,
    marginLeft: '0%',
    marginRight: '0%',
  },
  eventText: {
    fontSize: 17,
    color: '#4A4A4A',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginLeft: 10,
    top: 15,

  },
  timeText: {
    fontSize: 12,
    color: '#4A4A4A',
    right: 30,
    top: 10,
    position: 'absolute'

  },
  placeText: {
    fontSize: 12,
    color: '#4A4A4A',
    right: 30,
    position: 'absolute',
    top: 25
  },


  text: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  notificationsText: {
    fontSize: 17,
    color: '#4A4A4A',
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 15

  },

  textDay: {
    fontSize: 17,
    color: '#1D3557',
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold'
  },

  timetable_Container: {
    backgroundColor: '#ffffff',
    width: '90%',
    marginTop: 5,
    marginBottom: 3,
    height: 50,
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { height: 3 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3
      },
    }),
  },
  timetable_background: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '82%',
    position: 'relative',

    marginBottom: 7,
    borderRadius: 5,
  },
  scroll: {
    height: 200
  },
  pager: {

  }

})


export default styles;
