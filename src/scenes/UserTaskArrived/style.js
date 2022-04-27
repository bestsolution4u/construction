import {StyleSheet} from 'react-native';
import {Header} from 'react-navigation';
import {verticalScale,scale} from '../../Utils/scaling';

export default StyleSheet.create({
    container : {
        flex:1, 
    },
    header : {
        height:verticalScale(60),
        width:'100%',
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'flex-start',
        opacity:0.9,
        paddingHorizontal:scale(10),
        position:'absolute'
    },
    header_arrow : {
        height:verticalScale(17),
        width:scale(17)
    },
    header_button_x : {
        width:'auto',
        height:'100%',
        padding:verticalScale(10),
        justifyContent:'center',
        alignItems:'center',
    },
    map :{
        ...StyleSheet.absoluteFillObject,
    }
});