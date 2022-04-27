import React, { Component } from 'react';
import {View} from 'react-native';
import style from './style';
import TaskContainer from '../../Components/Common/TaskContainer';
import { scale, verticalScale } from '../../Utils/scaling';
import MapView from 'react-native-maps';


export default class UserTaskArrived extends Component{
    constructor(props){
     super(props);
     this.state={
       isReady : false,
     };
     this.data={
         title:"Roof Repair",
         description:"Fix and repair roof top, owner will be there. We have Already contacted owner and is exp…",
         date:"Oct. 20, 2019",
         time:"2:00 p.m.",
         adress:"1552 Washington Street, Atlanta, GA",
         source:require('../../assets/images/task_image.png')
     }
    }

    render() {
      return (  
              <View style={{flex:1}}>
                <MapView  
                  style={style.map}
                  showsUserLocation
                  ref={(map)=>{this.map=map}}
                />
                <View style={{paddingHorizontal:scale(10),flex:1,justifyContent:'flex-end',paddingVertical:verticalScale(10)}}>
                  <TaskContainer onPress={()=>{}} date={this.data.date} time={this.data.time} title={this.data.title} description={this.data.description} adress={this.data.adress} source={this.data.source} />
                </View>
              </View>
      );
    };
}