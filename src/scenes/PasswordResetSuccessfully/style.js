import { StyleSheet } from 'react-native';
import { verticalScale, moderateScale, scale } from "../../Utils/scaling";


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: scale(20),
        paddingRight: scale(20),
    },
    modalView: {
        height: verticalScale(242),
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: scale(39),
        paddingLeft: scale(20),
        paddingRight: scale(20),
        width: '100%',
        alignItems: 'center',
    },
    iconView: {
        width: scale(48.2),
        height: verticalScale(32),
        marginBottom: verticalScale(20),
    },
    pwResset: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        color: '#0B47BB',
        textAlign: 'center',
        width: '100%',
        marginBottom: verticalScale(9),
    },
    description: {
        fontSize: moderateScale(17),
        fontWeight: 'normal',
        fontFamily: 'Helvetica',
        color: '#000000',
        textAlign: 'center',
        width: '100%',
        marginBottom: verticalScale(22),
    },
    button: {
        height:verticalScale(48),
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0B47BB',
        borderRadius:5,
    },
    buttonText : {
        fontSize:16,
        fontFamily:'Helvetica',
        fontWeight:'bold',
        color:'white',
    }

});

export default styles;