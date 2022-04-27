import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Button} from 'native-base';
import style from '../style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const isAndroid = Platform.OS === 'android';

const TaskTimeModal = props => (
  <Modal isVisible={props.modalTime} style={style.modalContainer}>
    <View style={style.closeBtnView}>
      <Button
        style={[style.closeBtn, isAndroid && {top: 10}]}
        onPress={() => {
          props.toggleModalTime(false);
        }}>
        <Icon name="close" size={25} />
      </Button>
    </View>
    <View style={style.emptyView} />
    <View
      style={
        isAndroid ? style.taskFieldContainer_android : style.taskFieldContainer
      }>
      <View style={{backgroundColor: '#fff', alignItems: 'flex-end'}}>
        <Button
          transparent
          style={style.saveBtn}
          onPress={() => {
            props.toggleModalTime(false);
          }}>
          <Text style={style.saveBtnText}>Save</Text>
        </Button>
      </View>
      <View style={[style.textfieldContainer, {bottom: 60, marginRight: 50}]}>
        <DateTimePicker
          mode="time"
          modalTransparent
          is24Hour={false}
          animationType={'fade'}
          androidMode={'default'}
          timeZoneOffsetInMinutes={0}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          value={props.taskTime ? props.taskTime : new Date()}
          onChange={(e, time) => props.setTaskTime(time)}
        />
      </View>
    </View>
  </Modal>
);

export default TaskTimeModal;
