import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale, scale } from "../../../Utils/scaling";


const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    ressetpwView: {
        height: verticalScale(242),
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: verticalScale(39),
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    viewIcon: {
        width: verticalScale(48.2),
        height: verticalScale(32),
        marginBottom: verticalScale(10),
    },
    viewPassword: {
        width: '100%',
        marginBottom: verticalScale(10),
    },

    textPassword: {
        fontSize: moderateScale(18),
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#0B47BB',
        textAlign: 'center',
    },
    newPassword: {
        width: '100%',
        marginBottom: verticalScale(28),
    },

    newPasswordText: {
        fontSize: moderateScale(17),
        color: '#000000',
        textAlign: 'center',
    },
    button: {
        height: verticalScale(47),
        width: '100%',
        padding: 5,
        backgroundColor: '#0B47BB',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:verticalScale(30),
        borderRadius:5,
    },
    buttonText: {
        fontSize: moderateScale(18),
        color: 'white',
    }
});

export default styles;