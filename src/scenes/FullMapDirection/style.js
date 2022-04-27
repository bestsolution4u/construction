import {StyleSheet} from 'react-native'
import {verticalScale,scale} from '../../Utils/scaling';

export default StyleSheet.create({
    map :{
        ...StyleSheet.absoluteFillObject,
    },
    header:{
        height:verticalScale(60),
        width:'100%',
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'flex-end',
        opacity:0.9,
        paddingHorizontal:scale(20),
        position:'absolute'
    },
    hedaer_button_done :{
        width:'auto',
        height:'100%',
        padding:verticalScale(10),
        justifyContent:'center',
        alignItems:'center',
    }

})