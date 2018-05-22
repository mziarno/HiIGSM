import {StyleSheet, Platform} from 'react-native';



const styles = StyleSheet.create({


   
  background: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
         //height:250,
       },
  whiteBigContainer:{ 
       backgroundColor: '#fff',
       width: '90%',
       height: 70,
       position: 'relative',
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
           elevation: 5
           },
         }),
     },
  white_Left_Container:{
       backgroundColor: '#fff',
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
             elevation: 5
           },
         }),
     },
  white_Right_Container:{
       backgroundColor: '#fff',
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
             elevation: 5
           },
         }),
      
     },
  textGrey:{
       fontSize: 20,
       color: '#4A4A4A',
       fontWeight: 'bold',
       textAlignVertical: 'center',
       marginLeft: 15,
     
     },
  text2:{
       fontSize: 17,
       color: '#4A4A4A',
       textAlign: 'center',
       marginBottom: 5,
     },
  icon:{
       position: 'relative',
       alignItems: 'center'
     },
  greyMedium_Container:{
      backgroundColor: '#ECECEC',
      width: '90%',
      height: 50,
      position: 'relative',
      marginLeft: '5%',
      marginRight: '5%',
      //marginBottom: 20,
      borderRadius: 5,
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
      margin:3
  },
  whiteMedium_Container:{
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
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
  greyBig_Container:{        
      width: '90%',
      height: 70,
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
  notification:{
   backgroundColor: 'pink',
   width: '100%',
   height: 40,
   position: 'relative',
   borderTopLeftRadius: 5,
   borderTopRightRadius: 5,
   justifyContent: 'center'

 },
 notificationContainer:{
    backgroundColor: '#ECECEC',
    width: '90%',
    height: 120,
    position: 'relative',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 15,
    borderRadius: 5,
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
    marginTop:10

 },
 day:{
    backgroundColor: '#1D3557',
    width: '100%',
    height: 40,
    //position: 'relative',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    //top: -10,
    justifyContent: 'center'
    },

firstContainer:{
   backgroundColor: '#ECECEC', 
   width: '90%',
   height: 90,
   //position: 'absolute',
   marginLeft: '5%',
   marginRight: '5%',
   borderRadius: 5,
   marginBottom: 15,
   top:10,
   //justifyContent: 'center',
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
    },

    eventText: {
      fontSize: 17,
      color: '#4A4A4A',
      fontWeight: 'bold',
      textAlignVertical: 'center',
      marginLeft: 10,
      top: 15,
      
  },
  timeText:{
    fontSize: 12,
    color: '#4A4A4A',
    right: 30,
    top: 10,
    position: 'absolute' 

  },
  placeText:{
    fontSize: 12,
    color: '#4A4A4A',
    right: 30,
    position: 'absolute',
    top: 25
  },
  
text:{
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
},
    notificationsText:{
        fontSize: 17,
        color: '#4A4A4A',
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 15
    
    },

  })


export default styles;
