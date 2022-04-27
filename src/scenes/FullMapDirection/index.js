import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import MapView, {Circle} from 'react-native-maps';
import style from './style';

let {height, width} = Dimensions.get('window');

let ASPECT_RATIO = width / height;
let LATITUDE_DELTA = 0.05; //zoom of map
let LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let polyColors = ['#679BF0', '#E0B03B', '#BA2430'];
import Polyline from '@mapbox/polyline';

export default class FullMapDirection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {},
      coords: [],
      apiDirections: false,
      polylineColors: polyColors,
    };
  }
  componentDidMount = () => {
    this.props.navigation.setParams({mapDirectionDone: this.onPressDone});
    let userLocation = this.props.navigation.state.params.userLocation;
    this.setState({region: userLocation}, () => {
      let response = this.props.navigation.state.params.response;
      const distance = parseInt(response.data.routes[0].legs[0].distance.text);
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

        let region = {
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        this.animateToRegion(region);
      });
    });
  };
  animateToRegion = region => {
    const coordsLength = this.state.coords.length;

    let latitude =
      coordsLength % 2 === 0
        ? this.state.coords[coordsLength / 2].latitude
        : this.state.coords[(coordsLength + 1) / 2].latitude;
    let longitude =
      coordsLength % 2 === 0
        ? this.state.coords[coordsLength / 2].longitude
        : this.state.coords[(coordsLength + 1) / 2].longitude;
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

  onPressDone = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={style.map}
          showsUserLocation
          ref={map => {
            this.map = map;
          }}
          showsIndoorLevelPicker={true}
          showsIndoors={true}
          showsPointsOfInterest={true}
          showsTraffic={true}
          showsBuildings={true}
          scrollEnabled>
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
              radius={LATITUDE_DELTA * 1000}
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
        <View style={style.header}></View>
      </View>
    );
  }
}