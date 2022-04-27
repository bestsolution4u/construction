import React, { Component } from 'react';
import { 
     View,
     Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    Platform,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import {Button} from 'native-base';

import {verticalScale,scale} from '../../Utils/scaling';
import style  from './style';

import CardContainer from '../../Components/Common/CardContainer';
import AssignedToContainer from '../../Components/Common/AssignedToContainer';
import ImageCompleted from '../../Components/Common/ImageCompleted';

import ViewPager from '@react-native-community/viewpager';
import MapView,{Circle} from 'react-native-maps';

import Modal from 'react-native-modal';
import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

let {height,width} = Dimensions.get('window');

let ASPECT_RATIO = width / height;
let LATITUDE_DELTA = 0.05; //zoom of map
let LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let polylineColors = ["#679BF0","#E0B03B","#BA2430"];
import {taskData} from './dataTaskDetails';

export default class AdminTaskDetailsCompleted extends Component{
    constructor(props){
        super(props);
        this.state={
          currentPage:0,
          showDelete:true,
          yPostion:0,
          deleteModalVisible:false,
          region:{},
          coords:[],
          apiDirections:false,
          polylineColors:polylineColors,
          responseData:{}
        }
    }
    


     componentDidMount= async ()=>{
      const {taskDetails} = taskData;
      this.props.navigation.setParams({taskCompletedDelete:this.onShowDeleteModal});

        try {
            Geolocation.getCurrentPosition(
              (position) => {
                const region = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                };
                this.setState({ region },()=>{
                    let origin = `${this.state.region.latitude}, ${this.state.region.longitude}`;
                    this.props.navigation.setParams({userLocation:this.state.region});
                
                    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${taskDetails.location}&alternatives=true&key=AIzaSyAgaJy8mY7URd4jX_rtr_Ab0m0fvBLeuxk`).then(response=>{ 
                      this.props.navigation.setParams({directionResponse:response});
                      this.setState({responseData:response});
                      let distance= parseInt(response.data.routes[0].legs[0].distance.text);
                      LATITUDE_DELTA= distance/90;

                      let points = Polyline.decode(response.data.routes[0].overview_polyline.points);
                      let coords = points.map(point => {
                          return  {
                              latitude : point[0],
                              longitude : point[1]
                          }
                        });
            
                        this.setState({coords},()=>{this.setState({apiDirections:true})});
                        let length = coords.length;
                        if(length >=1 ){
                          if(length>=3){
                              let j= 0;
                            for(let i = 2;i<length ; i++){
                               if(j>2){j=0;}
                                polylineColors.push(polylineColors[j])
                               j++;                            
                            }
                          }else {polylineColors.shift()}
                        }else {polylineColors=[polylineColors[0]];}
                          
                        this.setState({polylineColors});

                      }).then(()=>{
                        let region={
                          latitude:this.state.region.latitude,
                          longitude:this.state.region.longitude,
                          latitudeDelta:LATITUDE_DELTA,
                          longitudeDelta:LONGITUDE_DELTA,
                        }
                        this.setRegion(region);
                      }).catch(error=>{
                          console.log(error);
                      });
                });
              
              },
              (error) => {
                console.log("Error getting the current postion");
              }
            );
          } catch (e) {
            throw e;
          } 
     }
     onHandleMapPress=()=>{  
        // navigate to full size map
        this.props.navigation.navigate('FullMapDirectionAdmin',{ userLocation:this.state.region,response:this.state.responseData});
    }
     setRegion=(region)=>{ 
      
        const {coords} = this.state;
        const coordsLength = coords.length;

        let latitude = coordsLength%2===0?coords[coordsLength/2].latitude:coords[(coordsLength+1)/2].latitude;
        let longitude = coordsLength%2===0?coords[coordsLength/2].longitude:coords[(coordsLength+1)/2].longitude;

        setTimeout(() => this.map.animateToRegion(
          {
          latitude,
          longitude,
          latitudeDelta:region.latitudeDelta,
          longitudeDelta:region.longitudeDelta
        }
          ), 10);
        


     }

     _renderImageCompleted=()=>{

       const {completedImages} = taskData;
       return completedImages.map((item,index)=>(
         <ImageCompleted key={index} source={item.uri} />
       ));

     }

     onShowDeleteModal=()=>{
       this.setState({deleteModalVisible:true});
     }
     
     onHandlePressDelete=()=>{
      this.setState({deleteModalVisible:false})
     }
     onHandleChangeImage=(type)=>{
       const {images} = taskData;
       const {currentPage} = this.state;

        if(type==='left'){
           this.setState({currentPage:currentPage<=0?currentPage:currentPage-1})
           return ;
        }
        if(type ==='right'){
            this.setState({currentPage:currentPage>=images.length-1?currentPage:currentPage+1})
            return;
        }
    }
    
   _renderTaskImages =()=>{
     const {images} = taskData;
        if(images.length<1){
            return <View style={[style.header_image_background,{backgroundColor:'#A2A2A2'}]} />

        }
        return images.map((item,index)=>(
            <TouchableWithoutFeedback key={index} style={{flex:1}} onPress={()=>{this.props.navigation.navigate('BigImageScreenAdmin',{source:item.require}) }}>
                <ImageBackground key={index} source={item.require} style={[style.header_image_background,{flexDirection:'row'}]}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                        <TouchableOpacity onPress={()=>this.onHandleChangeImage('left')} style={style.arrow_change_image}>
                            <Image style={style.np_left_right_image} source={require('../../assets/images/np_arrow_left.png')} />
                        </TouchableOpacity>
                        </View>
                        <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
                        <TouchableOpacity  onPress={()=>this.onHandleChangeImage('right')} style={style.arrow_change_image}>
                            <Image style={style.np_left_right_image} source={require('../../assets/images/np_arrow_right.png')} />
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
              </TouchableWithoutFeedback>      
        ));
   }
   render(){

     const {taskDetails} = taskData;
         return(
            <View style={style.container}>
               <ScrollView>
                   <ViewPager onPageSelected={(e)=>{this.setState({currentPage:e.nativeEvent.position});}} ref={(ref)=>this.page=ref} initialPage={this.state.currentPage} showPageIndicator={true} style={style.header_image_background}>
                      {this._renderTaskImages()}
                   </ViewPager>
                  <View style={{flex:1}}>
                      <View style={style.details_view}>
                          <View style={style.details_title_view}>
                                  <Text style={{color:'#000000',fontWeight:'bold',fontSize:verticalScale(18),marginBottom:verticalScale(5)}}>
                                      {taskDetails.title}
                                  </Text>
                                  <Text style={{color:'#000000',fontSize:verticalScale(16),textAlign:'left'}}>
                                      {taskDetails.description}
                                  </Text>
                          </View>
                          <View style={style.row_details}>
                                  <View style={style.row_details_key_view}>
                                      <Text style={style.row_details_key}>
                                          Client Name 
                                      </Text>
                                  </View>
                                  <View style={style.row_details_value_view}>
                                      <Text style={style.row_details_value}>
                                          {taskDetails.clientName}
                                      </Text>  
                              </View>
                          </View>
                          <View style={style.row_details}>
                                  <View style={style.row_details_key_view}>
                                      <Text style={style.row_details_key}>
                                          Phone Number
                                      </Text>
                                  </View>   
                                  <View style={style.row_details_value_view}>
                                      <Text style={style.row_details_value}>
                                          {taskDetails.phoneNumber}
                                      </Text>  
                                  </View>
                          </View>
                          <View style={style.row_details}>
                                  <View style={style.row_details_key_view}>
                                      <Text style={style.row_details_key}>
                                          {`Date & Time`}
                                      </Text>
                                  </View>
                                  <View style={[style.row_details_value_view,{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}]}>
                                      <Text style={[style.row_details_value,{right:scale(15)}]}>
                                          {taskDetails.date} 
                                      </Text>  
                                      <Text style={[style.row_details_value,{textAlign:'right'}]}>
                                          {taskDetails.time}
                                      </Text>
                                  </View>
                          </View>
                      </View>
                      <View style={{height:verticalScale(179),width:'100%'}}>
                      <MapView 
                          showsTraffic={true}
                          showsBuildings={true}
                          onPress={this.onHandleMapPress}
                          showsMyLocationButton
                          style={{flex:1}}
                          ref={(ref)=>this.map=ref}
                          showsUserLocation={true}
                          scrollEnabled={false}
                          zoomControlEnabled={false}
                          zoomEnabled={false}
                          moveOnMarkerPress={false}
                          showsIndoorLevelPicker={true}
                          showsIndoors={true}
                          showsPointsOfInterest={true}
                          rotateEnabled={false}

                         >

                         
                                {Platform.OS==='ios'?
                                  <MapView.Polyline 
                                    coordinates={this.state.coords}
                                    strokeWidth={4} 
                                    geodesic={true}
                                    tappable ={true}
                                    strokeColors={this.state.polylineColors}
                                  />
                                
                                :
                                <MapView.Polyline 
                                  coordinates={this.state.coords}
                                  strokeWidth={4} 
                                  strokeColor='#679BF0'
                                  geodesic={true}
                                  tappable ={true}
                                  />
                                }
                                {this.state.apiDirections?<Circle 
                                   center={ 
                                      {
                                        latitude : this.state.coords[this.state.coords.length-1].latitude,
                                        longitude:this.state.coords[this.state.coords.length-1].longitude
                                      }
                                    }
                                    radius ={LATITUDE_DELTA*3000}
                                    strokeWidth={2}

                                 /> : null}
                         
                          {!!this.state.region.latitude && !!this.state.region.longitude &&
                             <MapView.Marker
                               coordinate={{"latitude":this.state.region.latitude,"longitude":this.state.region.longitude}}
                              title={"Your Location"} />}
                        </MapView>
                      </View>
                      <View style={{paddingHorizontal:scale(20),paddingTop:verticalScale(10),paddingBottom:verticalScale(30),justifyContent:'center',alignItems:'center',height:'auto',width:'100%'}}>
                        <View style={{paddingVertical:verticalScale(5),width:'100%',alignItems:'flex-start',justifyContent:'center'}}>
                            <Text style={{color:'#A2A2A2',fontSize:verticalScale(14)}}>
                            Assigned To:
                            </Text>
                        </View>
                       <AssignedToContainer styleContainer={{marginBottom:verticalScale(30)}} source={require('../../assets/images/profile_image_2.png')} email={"philip.stewart@mail.com"} taskStatusColor="#0AA074" taskStatus={"Completed"} taskStatusIcon={<Image  style={{tintColor:'white',height:verticalScale(5.5),width:scale(6)}} source={require('../../assets/images/np_done.png')} />} />
                        <View style={{height:verticalScale(110),alignItems:'flex-start'}}> 
                        <ScrollView contentContainerStyle={{justifyContent:'flex-start'}} showsHorizontalScrollIndicator={false} horizontal={true}>
                            
                              {this._renderImageCompleted()}
                            
                        </ScrollView>
                        </View>
                       <View style={{height:verticalScale(95),width:'100%',borderWidth:0.2,borderColor:'#A2A2A2',justifyContent:'flex-start',alignItems:'flex-start',paddingHorizontal:scale(20),paddingVertical:verticalScale(10)}}>
                          <Text style={{color:'#A2A2A2',fontSize:verticalScale(16)}}>
                             Owner was statisfied
                          </Text>
                       </View>
                      </View>
                  </View>
               </ScrollView>
               <Modal animationIn="fadeIn" animationOut="fadeOut" isVisible={this.state.deleteModalVisible} onBackdropPress={()=>{this.setState({deleteModalVisible:false});}}>
                     <CardContainer style={style.cardContainer}>
                       <View style={style.cardWrapper}>
                          <Text style={style.modal_title}>
                             Are you sure you want to delete?
                          </Text>
                         <View style={style.modal_view_content}>
                          <Text style={style.modal_content}>
                            This action will permanently delete selected tasks.
                          </Text>
                         </View>
                          <Button onPress={this.onHandlePressDelete} style={style.modal_delete}>
                            <Text style={style.text_delete}>
                               Delete
                            </Text>
                          </Button>
                          <Button onPress={()=>this.setState({deleteModalVisible:false})} style={style.modal_cancel}>
                            <Text style={style.text_cancel}>
                              Cancel
                            </Text>
                          </Button>
                       </View>
                     </CardContainer>
                  </Modal>
       </View>
        );
     }
    
}
