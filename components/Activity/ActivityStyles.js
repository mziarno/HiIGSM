import { StyleSheet, Platform } from 'react-native';
import colors from '../../components/colors';



const styles = StyleSheet.create({

    textStyle: {
        top: '15%',
        left: 20,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.grey,
        textAlign: 'left',
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
    },

    textDesc2: {
        fontSize: 17,
        color: colors.grey,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10
    },

    textDesc: {
        top: '40%',
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.grey,
        textAlign: 'center',
    },

    textStyleSmall: {
        left: 20,
        top: '55%',
        fontSize: 12,
        color: colors.grey,
        flex: 1,
        position: 'absolute',
    },

    textStyleSmall2: {
        left: 20,
        top: '25%',
        fontSize: 13,
        color: colors.grey,
        flex: 1,
        position: 'absolute',

    },

    textStyleSmall3: {
        left: '35%',
        top: '25%',
        fontSize: 13,
        color: colors.grey,
        flex: 1,
        position: 'absolute',

    },

    textStyleSmall4: {
        left: '35%',
        top: '55%',
        fontSize: 13,
        color: colors.grey,
        flex: 1,
        position: 'absolute',
    },

    textStyleSmall5: {
        top: '65%',
        fontSize: 13,
        color: colors.grey,
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        marginBottom: 5,
    },

    containerStyle: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        borderRadius: 1,
        elevation: 3,
    },

    containerStyle2: {

        backgroundColor: colors.white,
        top: '5%',
        height: "30%",
        width: '94%',
        borderRadius: 5,
        elevation: 3,
        marginLeft: '3%',
        alignItems: 'center'
    },

    containerStyle3: {
        backgroundColor: colors.white,
        width: '45%',
        height: 60,
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 5,
        left: 3,
        justifyContent: 'center',
        elevation: 3,
    },

    containerStyle4: {
        backgroundColor: colors.white,
        width: '45%',
        height: 60,
        marginTop: 5,
        borderRadius: 5,
        justifyContent: 'center',
        right: 3,
        elevation: 3,
    },

    containerStyle5: {
        backgroundColor: colors.white,
        top: 70,
        height: 60,
        width: '94%',
        borderColor: colors.white,
        borderBottomWidth: 0,
        borderRadius: 5,
        position: 'absolute',
        elevation: 3,
    },


})

export default styles;