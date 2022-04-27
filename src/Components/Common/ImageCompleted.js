import React, { memo } from 'react';
import {View,Image,StyleSheet} from 'react-native';
import { scale, verticalScale } from '../../Utils/scaling';

export default memo(({containerStyle,source,imageStyle})=>{
   return(
       <View style={[style.container,containerStyle]}>
           <Image style={[style.image,imageStyle]} source={source} />
       </View>

   );
})

const style =StyleSheet.create({
   container : {
     height:'auto',
    width:'auto',
    paddingHorizontal:scale(5)
   },
   image :{
       height:verticalScale(94),
       width:scale(108),
       borderRadius:verticalScale(5),
   }
});
