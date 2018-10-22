import { StyleSheet, Platform } from 'react-native';
import colors from './colors'


const text_style = StyleSheet.create({


text: {
    fontSize: 17,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
},
notificationsText: {
    fontSize: 17,
        color: colors.grey,
        textAlign: 'center',
        textAlignVertical: 'center',
        top: 15

},

textDay: {
    fontSize: 17,
        color: colors.blue,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold'
},
    timeText: {
        fontSize: 12,
        color: colors.grey,
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
    eventText: {
        fontSize: 17,
        color: colors.grey,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10,
        //top: 5,

    },
    text1: {
        fontSize: 16,
        color: colors.blue,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 15,

    },
    text2: {
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center',
        marginBottom: 5,
    },
})


export default text_style;
