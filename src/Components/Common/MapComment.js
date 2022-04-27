import React,{memo} from 'react';
import {ImageBackground,View,Text,StyleSheet} from 'react-native';
import { verticalScale } from '../../Utils/scaling';
import IonIcon from 'react-native-vector-icons/FontAwesome5';

export default memo(({miles,minutes})=>{

    return(
        <ImageBackground  style={style.container} source={require('../../assets/images/map_comment_@.png')} >
          <View style={{flexDirection:'row',height:'auto'}}>
              <IonIcon size={19} color="black" name="car-side"/>
              <Text style={{color:'#E3473C',fontSize:13}}>
                  {minutes}
              </Text>
          </View>
          <View style={{flex:1}}>
              <Text style={{fontSize:14,color:'black'}}>
                  {miles}
              </Text>
          </View>
        </ImageBackground>
    );
});

const style = StyleSheet.create({
  container :{
       height:70,
       width:70,
      tintColor:'white',
      backgroundColor:'white'

      
  }
});