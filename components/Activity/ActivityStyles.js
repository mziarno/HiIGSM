import { StyleSheet } from 'react-native';
import colors from '../../components/colors';



const styles = StyleSheet.create({

    placeTextStyle: {
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


    detailsText: {
        // top: '40%',
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.grey,
        textAlign: 'center',
        padding: 15
    },

    addressText: {
        left: 20,
        bottom: 10,
        fontSize: 12,
        color: colors.grey,
        flex: 1,
        position: 'absolute',
    },
    timeText: {
        fontSize: 12,
        color: colors.grey,
        right: 20,
        bottom: 10,
        textAlign: 'right',
        position: 'absolute'
    },

    button:{
        justifyContent: 'space-around',
        borderRadius: 2,
        marginTop: '3%',
        borderWidth:1.5,
        marginLeft:'5%',
        marginRight: '5%',
        borderStyle:'solid', //'dotted',
        borderColor:colors.mintDark,
    },

    PlaceAddress: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        borderRadius: 1,
        shadowColor: colors.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },

    activitiesDetails: {
        backgroundColor: colors.white,
        top: '5%',
        width: '90%',
        marginLeft: '5%',
        alignItems: 'center'
    },

});

export default styles;