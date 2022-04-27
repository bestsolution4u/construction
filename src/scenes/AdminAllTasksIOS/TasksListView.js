import React, {memo} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../Theme/Colors';
import moment from 'moment';
import defaultImage from '../../assets/images/default.png';
Ionicons.loadFont();

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

const TasksListView = memo(({tasksList, onItemPress}) => {
  return (
    <View style={{flex: 1}}>
      {tasksList.length > 0 ? (
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={tasksList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.taskListContainerView}
              onPress={() => onItemPress && onItemPress(item.id)}>
              <View style={styles.taskFRowView}>
                <View style={styles.taskFRowFCol}>
                  <Image
                    source={
                      item.imagesUrls[0]
                        ? {
                            uri: item.imagesUrls[0].url,
                          }
                        : defaultImage
                    }
                    style={styles.taskImage}
                  />
                </View>
                <View style={styles.taskFRowSCol}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <Text numberOfLines={3} style={styles.taskDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
              <View style={styles.taskSRow}>
                <Text style={styles.taskDetails}>{`${moment(item.date).format(
                  'MMM. DD, YYYY',
                ) +
                  '    ' +
                  moment(item.time).format('h:mm a')}`}</Text>
                <Text style={styles.taskDetails}>{item.address}</Text>
              </View>
              <View style={styles.taskTRow}>
                <View style={styles.userProfileImage}>
                  <Image
                    source={{uri: item.employeeData?.avatar}}
                    style={styles.userProfileImage}
                  />
                </View>
                <View>
                  <Text style={styles.userEmail}>
                    {item.employeeData?.email}
                  </Text>
                  <View style={styles.userEmailStatusView}>
                    <Text
                      style={[
                        styles.taskStatus,
                        {color: getStatusColor(item.status)},
                      ]}>
                      {getStatusName(item.status)}
                    </Text>
                    <View
                      style={[
                        styles.iconContainer,
                        {backgroundColor: getStatusColor(item.status)},
                      ]}>
                      <Ionicons
                        name={getStatusIcon(item.status)}
                        style={styles.icon}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.listData}>
          <Text>No Record Found</Text>
        </View>
      )}
    </View>
  );
});

export default TasksListView;
