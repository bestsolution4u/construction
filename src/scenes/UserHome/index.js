import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated,
  Platform,
  PermissionsAndroid,
  FlatList,
} from 'react-native';

import style from './style';
import {scale, moderateScale} from '../../Utils/scaling';
import TaskContainer from '../../Components/Common/TaskContainer';
import moment from 'moment';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Geolocation from 'react-native-geolocation-service';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as taskActions from '../../redux/actions/tasksActions';
import {getTaskButtonText, getTaskNextStatus} from './taskStatus';
import {successMessage, errorMessage} from '../../Utils/alerts';
import VerifyYourWork from '../Home/VerifyYourWork/index';
import {getData} from '../../redux/utils/storage';
import {map} from 'lodash';

let {width} = Dimensions.get('window');

const UserHome = props => {
  const [weekOffset, handleWeekOffset] = useState(0);
  const [weekDays, handleWeekDays] = useState([]);
  const [, handleMonth] = useState([]);
  const [selectedDay, handleSelectedDay] = useState(moment());
  const [hasLocationPermission, setLocationPermission] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [taskId, setTaskId] = useState(0);
  const [toggleCompleteModal, setToggleCompleteModal] = useState(false);
  const [toggleDescModal, setToggleDescModal] = useState(false);

  useEffect(() => {
    getData('User').then(user => {
      props.navigation.setParams({
        avatar: user.attributes.avatar,
      });
    });
  }, []);

  useEffect(() => {
    requestLocationPermission();
    trackLocation();
  }, [hasLocationPermission, selectedDay]);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android' && Platform.Version >= 23) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Construction needs to access to your location',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission(true);
        } else {
          setLocationPermission(false);
        }
      } else {
        setLocationPermission(true);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const trackLocation = () => {
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          props.taskActions.employeeTaskList({
            params: {
              latitude: latitude,
              longitude: longitude,
              date: selectedDay.format('YYYY-MM-DD'),
            },
            onSuccess: response => {
              setTaskData(response.data.data);
            },
            onFail: error => {
              console.log(error);
            },
          });
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  const getWeeks = offset => {
    let day = moment()
      .startOf('isoWeek')
      .add(offset, 'isoWeek')
      .startOf(1, 'day');

    let days = [];

    for (let i = 0; i < 7; i++) {
      days.push(day.clone());
      day.add(1, 'day');
    }

    let firstDayMonth = days[0].format('MMM');
    let lastDayMonth = days[6].format('MMM');
    if (firstDayMonth != lastDayMonth) {
      handleMonth([firstDayMonth, lastDayMonth]);
    } else {
      handleMonth([firstDayMonth]);
    }
    props.navigation.setParams({
      UserHomeDate:
        'Today, ' + moment().format('MMM') + ', ' + moment().format('DD'),
    });
    return days;
  };

  useEffect(() => {
    if (!weekDays || !weekDays.length) handleWeekDays(getWeeks(0));
  }, [weekDays]);

  const onSwipeLeft = () => {
    handleWeekOffset(weekOffset + 1);
    const week = weekDays;
    const end = week[6].clone();
    week.push(end.add(1, 'day'));
    week.shift();
    handleWeekDays(week);
  };

  const onSwipeRight = () => {
    handleWeekOffset(weekOffset - 1);
    const week = weekDays;
    var start = week[0].clone();
    week.unshift(start.add(-1, 'day'));
    week.pop();
    handleWeekDays(week);
  };

  const onSelectedDate = index => {
    let selDate = weekDays[index];
    if (selDate.format('MM-DD-YYYY') === moment().format('MM-DD-YYYY')) {
      props.navigation.setParams({
        UserHomeDate: `Today, ${moment().format('MMM')}, ${moment().format(
          'dddd',
        )} `,
      });
    } else {
      props.navigation.setParams({
        UserHomeDate: `${selDate.format('dddd')}, ${selDate.format(
          'MMM',
        )}, ${selDate.format('DD')}`,
      });
    }
    handleSelectedDay(selDate);
  };

  const _renderDates = () => {
    return (
      weekDays !== [] &&
      weekDays.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            onSelectedDate(index);
          }}
          key={index}
          style={[
            {
              width: width / 7,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <Text
            style={[
              {
                color:
                  item.format('YYYY-MM-DD') === selectedDay.format('YYYY-MM-DD')
                    ? 'white'
                    : '#A2A2A2',
                fontSize: moderateScale(17),
                fontWeight: 'bold',
              },
            ]}>
            {item.format('ddd')}
          </Text>
          <Text
            style={[
              {
                color:
                  item.format('YYYY-MM-DD') === selectedDay.format('YYYY-MM-DD')
                    ? 'white'
                    : '#A2A2A2',
                fontSize: moderateScale(17),
                fontWeight: 'bold',
              },
            ]}>
            {item.format('DD')}
          </Text>
        </TouchableOpacity>
      ))
    );
  };

  const onProcessTask = (id, status) => {
    if (getTaskNextStatus(status) === 'update') {
      successMessage({message: 'Task already completed.'});
      return;
    }
    if (getTaskNextStatus(status) === 'complete') {
      setTaskId(id);
      setToggleCompleteModal(true);
      return;
    }
    let addition = '?lat=' + latitude + '&lng=' + longitude;
    props.taskActions.employeeTaskProcess({
      params: {
        id: id,
        status: getTaskNextStatus(status),
        addition: addition,
      },
      onSuccess: response => {
        successMessage({message: 'Task updated successfully.'});
        setTaskData(
          taskData.map(item => {
            if (item.id === id) {
              return response.data.data;
            }
            return item;
          }),
        );
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  const onCompleteTask = (images, description) => {
    setToggleCompleteModal(false);
    const formData = new FormData();
    map(images, image => {
      formData.append('employee_images_feedback[]', {
        uri: image.uri,
        type: 'image/jpeg',
        name: `${moment().unix()}.jpg`,
      });
    });
    formData.append('employee_feedback', description);
    props.taskActions.employeeTaskComplete({
      params: {
        id: taskId,
        data: formData,
      },
      onSuccess: response => {
        successMessage({message: 'Task completed successfully.'});
        setTaskData(
          taskData.map(item => {
            if (item.id === id) {
              return response.data.data;
            }
            return item;
          }),
        );
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  };

  const swipeGesture = gestureName => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    switch (gestureName) {
      case SWIPE_LEFT:
        onSwipeLeft();
        break;
      case SWIPE_RIGHT:
        onSwipeRight();
        break;
    }
  };
  const renderBlankDates = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    return arr.map((item, index) => (
      <View
        style={[
          {width: width / 7, height: '100%'},
          weekDays.length > 6 &&
            weekDays[index].format('YYYY-MM-DD') ===
              selectedDay.format('YYYY-MM-DD') && {
              backgroundColor: '#0B47BB',
            },
        ]}
        key={index}
      />
    ));
  };
  return (
    <View style={style.container}>
      <GestureRecognizer onSwipe={swipeGesture} style={style.header}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            flexDirection: 'row',
          }}>
          {renderBlankDates()}
        </View>
        <Animated.View
          style={[
            {
              flex: 1,
              position: 'relative',
              overflow: 'visible',
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <View style={{flexDirection: 'row', height: '100%'}}>
            {_renderDates()}
          </View>
        </Animated.View>
      </GestureRecognizer>

      <View style={style.main_content}>
        <FlatList
          style={{flex: 1, backgroundColor: 'white'}}
          data={taskData}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TaskContainer
              title={item.attributes.title}
              description={item.attributes.description}
              buttonTitle={getTaskButtonText(item.attributes.status)}
              onPress={() => {
                onProcessTask(item.id, item.attributes.status);
              }}
              source={
                item.attributes.images_urls &&
                item.attributes.images_urls.length
                  ? item.attributes.images_urls[0]
                  : null
              }
              adress={item.attributes.address}
              time={item.attributes.time ? item.attributes.time : ''}
              date={item.attributes.date ? item.attributes.date : ''}
              buttonTextStyle={{fontWeight: 'bold'}}
              buttonStyle={{marginHorizontal: scale(20)}}
              onItemPress={() => {
                props.navigation.navigate('UserTaskDetails', {task: item});
              }}
            />
          )}
        />
      </View>
      <VerifyYourWork
        isModalVisible={toggleCompleteModal}
        isDescModalVisible={toggleDescModal}
        onHideModal={() => {
          setToggleCompleteModal(false);
        }}
        onCompleteTask={(images, description) => {
          onCompleteTask(images, description);
        }}
        onShowDescModal={() => setToggleDescModal(true)}
        onHideDescModal={() => setToggleDescModal(false)}
      />
    </View>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
