import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {verticalScale, scale} from '../../Utils/scaling';
import style from './style';
import MapView, {Circle} from 'react-native-maps';
import {Button} from 'native-base';

import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {getTaskButtonText, getTaskNextStatus} from '../UserHome/taskStatus';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as taskActions from '../../redux/actions/tasksActions';
import {successMessage, errorMessage} from '../../Utils/alerts';
import VerifyYourWork from '../Home/VerifyYourWork/index';
import moment from 'moment';
import {map, isEmpty} from 'lodash';

let {height, width} = Dimensions.get('window');

let ASPECT_RATIO = width / height;
let LATITUDE_DELTA = 0.05; //zoom of map
let LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let polyColors = ['#679BF0', '#E0B03B', '#BA2430'];
import {taskData} from './taskDetailsData';

class UserTaskDetails extends Component {
  constructor(props) {
    super(props);
    const {params} = props.navigation.state;
    this.state = {
      taskDetails: params ? params.task : null,
      currentPage: 0,
      region: {},
      coords: [],
      apiDirections: false,
      polylineColors: polyColors,
      responseData: {},
      toggleCompleteModal: false,
      toggleDescModal: false,
    };
  }

  componentDidMount = async () => {
    try {
      const {taskDetails} = this.state;
      Geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          this.setState({region}, () => {
            let origin = `${this.state.region.latitude}, ${this.state.region.longitude}`;
            this.props.navigation.setParams({userLocation: this.state.region});

            axios
              .get(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${taskDetails.location}&alternatives=true&key=AIzaSyAgaJy8mY7URd4jX_rtr_Ab0m0fvBLeuxk`,
              )
              .then(response => {
                this.props.navigation.setParams({directionResponse: response});
                this.setState({responseData: response});
                let distance = parseInt(
                  response.data.routes[0].legs[0].distance.text,
                );
                LATITUDE_DELTA = distance / 90;

                let points = Polyline.decode(
                  response.data.routes[0].overview_polyline.points,
                );
                let coords = points.map(point => {
                  return {
                    latitude: point[0],
                    longitude: point[1],
                  };
                });

                this.setState({coords}, () => {
                  this.setState({apiDirections: true});
                });
                let length = coords.length;
                let polylineColors = [];
                if (length >= 1) {
                  if (length >= 3) {
                    let j = 0;
                    for (let i = 2; i < length; i++) {
                      if (j > 2) {
                        j = 0;
                      }
                      polylineColors.push(polyColors[j]);
                      j++;
                    }
                  } else {
                    polylineColors.shift();
                  }
                } else {
                  polylineColors = [polyColors[0]];
                }

                this.setState({polylineColors});
              })
              .then(() => {
                let region = {
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                };
                this.setRegion(region);
              })
              .catch(error => {
                console.log(error);
              });
          });
        },
        error => {
          console.log('Error getting the current postion');
        },
      );
    } catch (e) {
      throw e;
    }
  };

  onHandleMapPress = () => {
    // navigate to full size map
    this.props.navigation.navigate('FullMapDirectionUser', {
      userLocation: this.state.region,
      response: this.state.responseData,
    });
  };

  setRegion = region => {
    const {coords} = this.state;
    const coordsLength = coords.length;

    let latitude =
      coordsLength % 2 === 0
        ? coords[coordsLength / 2].latitude
        : coords[(coordsLength + 1) / 2].latitude;
    let longitude =
      coordsLength % 2 === 0
        ? coords[coordsLength / 2].longitude
        : coords[(coordsLength + 1) / 2].longitude;

    setTimeout(
      () =>
        this.map.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        }),
      10,
    );
  };

  onProcessTask = (id, status) => {
    if (getTaskNextStatus(status) === 'update') {
      successMessage({message: 'Task already completed.'});
      return;
    }
    if (getTaskNextStatus(status) === 'complete') {
      this.setState({toggleCompleteModal: true});
      return;
    }
    let addition =
      '?lat=' +
      this.state.region.latitude +
      '&lng=' +
      this.state.region.longitude;
    this.props.taskActions.employeeTaskProcess({
      params: {
        id: id,
        status: getTaskNextStatus(status),
        addition: addition,
      },
      onSuccess: response => {
        successMessage({message: 'Task updated successfully.'});
        this.setState({taskDetails: response.data.data});
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  onCompleteTask = (id, images, description) => {
    this.setState({toggleCompleteModal: false});

    const formData = new FormData();
    map(images, image => {
      formData.append('employee_images_feedback[]', {
        uri: image.uri,
        type: 'image/jpeg',
        name: `${moment().unix()}.jpg`,
      });
    });
    formData.append('employee_feedback', description);
    this.props.taskActions.employeeTaskComplete({
      params: {
        id: id,
        data: formData,
      },
      onSuccess: response => {
        successMessage({message: 'Task completed successfully.'});
        this.setState({taskDetails: response.data.data});
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  onHandleChangeImage = type => {
    const {images} = taskData;
    if (type === 'left') {
      const {currentPage} = this.state;
      this.setState(
        {currentPage: currentPage <= 0 ? currentPage : currentPage - 1},
        () => {
          this.page.setPage(this.state.currentPage);
        },
      );
      return;
    }
    if (type === 'right') {
      const {currentPage} = this.state;
      this.setState(
        {
          currentPage:
            currentPage >= images.length - 1 ? currentPage : currentPage + 1,
        },
        () => {
          this.page.setPage(this.state.currentPage);
        },
      );
      return;
    }
  };

  _renderTaskImages = () => {
    let images = [];
    const isImageFromProps =
      !isEmpty(this.state.taskDetails) &&
      !isEmpty(this.state.taskDetails.attributes.images_urls);
    if (isImageFromProps) images = this.props.taskDetails.attributes.images_urls;
    else images = taskData.images;
    if (images.length < 1) {
      return (
        <View
          style={[style.header_image_background, {backgroundColor: '#A2A2A2'}]}
        />
      );
    }
    return images.map((item, index) => (
      <TouchableWithoutFeedback
        key={index}
        style={{flex: 1}}
        onPress={() => {
          this.props.navigation.navigate('BigImageScreenUser', {
            source: item,
          });
        }}>
        <ImageBackground
          source={item}
          style={[style.header_image_background, {flexDirection: 'row'}]}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => this.onHandleChangeImage('left')}
              style={style.arrow_change_image}>
              <Image
                style={style.np_left_right_image}
                source={require('../../assets/images/np_arrow_left.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => this.onHandleChangeImage('right')}
              style={style.arrow_change_image}>
              <Image
                style={style.np_left_right_image}
                source={require('../../assets/images/np_arrow_right.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    ));
  };

  render() {
    const {taskDetails} = this.state;
    return (
      <View style={style.container}>
        <ScrollView>
          <ViewPager
            onPageSelected={e => {
              this.setState({currentPage: e.nativeEvent.position});
            }}
            ref={ref => (this.page = ref)}
            initialPage={this.state.currentPage}
            showPageIndicator={true}
            style={style.header_image_background}>
            {this._renderTaskImages()}
          </ViewPager>
          <View style={{flex: 1}}>
            <View style={style.details_view}>
              <View style={style.details_title_view}>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontSize: verticalScale(18),
                    marginBottom: verticalScale(5),
                  }}>
                  {taskDetails.attributes.title}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: verticalScale(16),
                    textAlign: 'left',
                  }}>
                  {taskDetails.attributes.description}
                </Text>
              </View>
              <View style={style.row_details}>
                <View style={style.row_details_key_view}>
                  <Text style={style.row_details_key}>Client Name</Text>
                </View>
                <View style={style.row_details_value_view}>
                  <Text style={style.row_details_value}>
                    {taskDetails.attributes.client_info.name
                      ? taskDetails.attributes.client_info.name
                      : ''}
                  </Text>
                </View>
              </View>
              <View style={style.row_details}>
                <View style={style.row_details_key_view}>
                  <Text style={style.row_details_key}>Phone Number</Text>
                </View>
                <View style={style.row_details_value_view}>
                  <Text style={style.row_details_value}>
                    {taskDetails.attributes.client_info.phone
                      ? taskDetails.attributes.client_info.phone
                      : ''}
                  </Text>
                </View>
              </View>
              <View style={style.row_details}>
                <View style={style.row_details_key_view}>
                  <Text style={style.row_details_key}>{'Date & Time'}</Text>
                </View>
                <View
                  style={[
                    style.row_details_value_view,
                    {
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    },
                  ]}>
                  <Text style={[style.row_details_value, {right: scale(15)}]}>
                    {moment(taskDetails?.attributes?.date).format(
                      'MMM. DD, YYYY',
                    )}
                  </Text>
                  <Text style={[style.row_details_value, {textAlign: 'right'}]}>
                    {moment(taskDetails?.attributes?.time).format('h:mm a')}
                  </Text>
                </View>
              </View>
            </View>
            <View style={{height: verticalScale(179), width: '100%'}}>
              <MapView
                showsTraffic={true}
                showsBuildings={true}
                onPress={this.onHandleMapPress}
                showsMyLocationButton
                style={{flex: 1}}
                ref={ref => (this.map = ref)}
                showsUserLocation={true}
                scrollEnabled={false}
                zoomControlEnabled={false}
                zoomEnabled={false}
                moveOnMarkerPress={false}
                showsIndoorLevelPicker={true}
                showsIndoors={true}
                showsPointsOfInterest={true}
                rotateEnabled={false}>
                {Platform.OS === 'ios' ? (
                  <MapView.Polyline
                    coordinates={this.state.coords}
                    strokeWidth={4}
                    geodesic={true}
                    tappable={true}
                    strokeColors={this.state.polylineColors}
                  />
                ) : (
                  <MapView.Polyline
                    coordinates={this.state.coords}
                    strokeWidth={4}
                    strokeColor="#679BF0"
                    geodesic={true}
                    tappable={true}
                  />
                )}
                {this.state.apiDirections ? (
                  <Circle
                    center={{
                      latitude: this.state.coords[this.state.coords.length - 1]
                        .latitude,
                      longitude: this.state.coords[this.state.coords.length - 1]
                        .longitude,
                    }}
                    radius={LATITUDE_DELTA * 3000}
                    strokeWidth={2}
                  />
                ) : null}

                {!!this.state.region.latitude && !!this.state.region.longitude && (
                  <MapView.Marker
                    coordinate={{
                      latitude: this.state.region.latitude,
                      longitude: this.state.region.longitude,
                    }}
                    title={'Your Location'}
                  />
                )}
              </MapView>
            </View>
            <View
              style={{
                paddingHorizontal: scale(20),
                paddingTop: verticalScale(30),
                paddingBottom: verticalScale(30),
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                width: '100%',
              }}>
              <Button
                onPress={() => {
                  this.onProcessTask(
                    taskDetails.id,
                    taskDetails.attributes.status,
                  );
                }}
                style={{
                  justifyContent: 'center',
                  elevation: 0,
                  alignItems: 'center',
                  width: '100%',
                  borderRadius: verticalScale(5),
                  height: verticalScale(47),
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: verticalScale(16),
                    fontWeight: 'bold',
                  }}>
                  {getTaskButtonText(taskDetails.attributes.status)}
                </Text>
              </Button>
            </View>
          </View>
        </ScrollView>
        <VerifyYourWork
          isModalVisible={this.state.toggleCompleteModal}
          isDescModalVisible={this.state.toggleDescModal}
          onHideModal={() => {
            this.setState({toggleCompleteModal: false});
          }}
          onCompleteTask={(images, description) => {
            this.onCompleteTask(taskDetails.id, images, description);
          }}
          onShowDescModal={() => {
            this.setState({toggleDescModal: true});
          }}
          onHideDescModal={() => {
            this.setState({toggleDescModal: false});
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTaskDetails);
