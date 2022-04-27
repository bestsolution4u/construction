import {StyleSheet} from 'react-native';
import {verticalScale,scale} from '../../Utils/scaling';

export default StyleSheet.create({
    container :{
      flex:1,
    },
    header_title :{
        width:'100%',
        height:verticalScale(67),
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        opacity:0.9,
        paddingHorizontal:scale(10),
        zIndex:100,
        elevation:0,
        position:'absolute',
    },
    header_np_arrow_view :{
        width:'auto',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:scale(10)
    },
    np_arrow : {
        width:scale(9),
        height:verticalScale(16),

    },
    header_title_text : {
        color:'#000000',
        fontWeight:'bold',
        fontSize:verticalScale(24),
     
    },
    header_title_view:{
        justifyContent:'center',
        alignItems:'flex-start',
        width:'auto',
        height:'100%',
        paddingHorizontal:scale(10)
    },
    header_image_background : { 
        width:'100%',
        height:verticalScale(316),
        top:0

      },
      arrow_change_image : {
          width:scale(33),
          height:verticalScale(28),
          backgroundColor:'#000000',
          opacity:0.4,
          justifyContent:'center',
          alignItems:'center',
          position: 'absolute',

      },
      np_left_right_image :{
        width:scale(8.7),height:verticalScale(16)
      },
      details_view:{
          height:'auto',
          width:'100%',
          paddingHorizontal:scale(19),
          paddingVertical:verticalScale(10),
      },
      details_title_view:{
          height:'auto',
          width:'100%',
          paddingVertical:verticalScale(15),
          borderBottomWidth:0.2,
          borderBottomColor:'#A2A2A2',
      },
      row_details : {
          height:verticalScale(45),
          width:'100%',
          flexDirection:'row',
      },
      row_details_key : {
          color:'#A2A2A2',
          fontSize:verticalScale(14),
          textAlign:'left',
      },
      row_details_value :{
          color:'#0B47BB',
          fontSize:verticalScale(16),
      },
      row_details_value_view :{
          flex:1,
          justifyContent:'center',
          alignItems:'flex-end',
          
      },
      row_details_key_view :{
          height:'100%',
          width:'auto',
          justifyContent:'center',
          alignItems:'flex-start'
      }
  
})