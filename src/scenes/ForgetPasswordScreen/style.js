import { StyleSheet, Platform } from 'react-native';
import { verticalScale, moderateScale, scale } from "../../Utils/scaling";
import {isEqual} from 'lodash';

const platform = Platform.OS;

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        padding: 0,
        margin: 0,
        justifyContent: 'flex-end',
    },
    upperView: {
        flex:1,
    },
    iconView: {
        flex:1,
        paddingTop: verticalScale(19),
        paddingLeft: scale(13),
        width: '100%',
    },
    icon: {
        height: verticalScale(isEqual(platform, 'ios') ? 30 : 29),
        width: scale(isEqual(platform, 'ios') ? 35 : 29),
        borderRadius: 50,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    //input view component
    InputView: {
        height: verticalScale(146),
        width: '100%',
        paddingLeft: scale(20),
        paddingTop: verticalScale(20),
        paddingRight: scale(20),
        backgroundColor: 'white',
        paddingBottom:verticalScale(20),
    },
    sendView: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    sendText: {
        color: '#0B47BB',
        fontSize: moderateScale(16),
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },
    forgotView: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        marginBottom:verticalScale(20)
    },
    forgotText: {
        fontSize:moderateScale(18),
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
    },

    // input style 
    input : {
        height:verticalScale(47),
        width:'100%',
        borderWidth:0.2,
        borderColor:'#A2A2A2',
        paddingLeft:scale(20),
        paddingTop:verticalScale(16),
        paddingBottom:verticalScale(15),
        
    }
});

export default styles;