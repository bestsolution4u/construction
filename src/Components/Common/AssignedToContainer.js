import React, {memo} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {verticalScale, scale} from '../../Utils/scaling';
import colors from '../../Theme/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const getStatusColor = status => {
  switch (status) {
    case 'completed':
      return '#0aa074';
    case 'going_now':
      return '#0b47bc';
    case 'arrived':
      return '#bb0da8';
    case 'start':
      return '#5cbb0b';
    default:
      return colors.blue;
  }
};

export const getStatusIcon = status => {
  switch (status) {
    case 'completed':
      return 'ios-checkmark';
    case 'going_now':
      return 'ios-add';
    case 'arrived':
      return 'md-pin';
    case 'start':
      return 'md-navigate';
    default:
      return 'ios-add';
  }
};

export const getStatusName = status => {
  switch (status) {
    case 'completed':
      return 'Completed';
    case 'going_now':
      return 'Going Now';
    case 'arrived':
      return 'Arrived';
    case 'start':
      return 'Start';
    default:
      return 'Going Now';
  }
};

const AssignedToContainer = memo(
  ({styleContainer, source, email, taskStatus}) => {
    return (
      <View style={[style.container, styleContainer]}>
        <View style={style.left_view}>
          {source && <Image style={style.image} source={source} />}
        </View>
        <View style={style.right_view}>
          <View style={{height: 'auto', width: '100%'}}>
            <Text style={{color: '#000000', fontSize: verticalScale(16)}}>
              {email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: verticalScale(14),
                color: getStatusColor(taskStatus),
              }}>
              {getStatusName(taskStatus)}
            </Text>
            <View
              style={{
                marginLeft: 5,
                borderRadius: 20 / 2,
                height: 20,
                width: 20,
                padding: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: getStatusColor(taskStatus),
              }}>
              <Ionicons
                name={getStatusIcon(taskStatus)}
                style={{fontSize: 16, color: colors.white}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  },
);

const style = StyleSheet.create({
  container: {
    height: verticalScale(70),
    width: '100%',
    flexDirection: 'row',
    borderBottomColor: '#A2A2A2',
    borderBottomWidth: 0.2,
    marginBottom: verticalScale(10),
  },
  left_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
  },
  right_view: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  image: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(50 / 2),
  },
});

export default AssignedToContainer;
