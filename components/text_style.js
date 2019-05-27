import { StyleSheet, Platform } from 'react-native';
import colors from './colors'


const text_style = StyleSheet.create({

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
