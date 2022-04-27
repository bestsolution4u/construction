import React from 'react';
import {View, Text, Platform} from 'react-native';
import {Button, DatePicker} from 'native-base';
import style from '../style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';

const isAndroid = Platform.OS === 'android';

const TaskDateModal = props => (
  <Modal isVisible={props.modalDate} style={style.modalContainer}>
    <View style={style.closeBtnView}>
      <Button
        style={[style.closeBtn, isAndroid && {top: 10}]}
        onPress={() => {
          props.toggleModalDate(false);
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
            props.toggleModalDate(false);
          }}>
          <Text style={style.saveBtnText}>Save</Text>
        </Button>
      </View>
      <View style={style.textfieldContainer}>
        <DatePicker
          defaultDate={props.taskDate ? props.taskDate : new Date()}
          minimumDate={new Date(1990, 1, 1)}
          maximumDate={new Date(2030, 12, 31)}
          locale={'en'}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="Select date"
          textStyle={{color: 'black'}}
          placeHolderTextStyle={{color: '#d3d3d3'}}
          onDateChange={date => props.setTaskDate(date)}
          disabled={false}
        />
      </View>
    </View>
  </Modal>
);

export default TaskDateModal;
