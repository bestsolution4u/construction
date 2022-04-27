import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Platform, Keyboard, KeyboardEvent} from 'react-native';
import {Button} from 'native-base';
import style from '../style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';

import {verticalScale} from '../../../Utils/scaling';

const isAndroid = Platform.OS === 'android';

const TaskTitleModal = props => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const onKeyboardDidShow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return (): void => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
    };
  }, []);
  return (
    <Modal
      isVisible={props.modalTaskTitle}
      onBackButtonPress={() => {
        props.onPressHideModal('modalTaskTitle');
      }}
      style={[style.modalContainer, isAndroid && {justifyContent: 'flex-end'}]}>
      <View style={style.closeBtnView}>
        <Button
          style={[style.closeBtn, isAndroid && {top: 10}]}
          onPress={() => {
            props.onPressHideModal('modalTaskTitle');
          }}>
          <Icon name="close" size={25} />
        </Button>
      </View>
      <View style={style.emptyView} />
      <View
        style={[
          isAndroid ? style.taskFieldContainer_android : style.taskFieldContainer,
          {bottom: keyboardHeight},
        ]}>
        <Button
          transparent
          style={style.saveBtn}
          onPress={() => {
            props.onPressHideModal('modalTaskTitle');
          }}>
          <Text style={style.saveBtnText}>Save</Text>
        </Button>
        <View
          style={[
            style.textfieldContainer,
            isAndroid && {paddingVertical: verticalScale(5)},
          ]}>
          <TextInput
            name="task"
            value={props.taskTitle}
            onChangeText={text => props.setTaskTitle(text)}
            placeholder="Write your task title..."
            maxLength={50}
            style={[style.textfield, isAndroid && {paddingTop: 0}]}
            autoFocus={true}
          />
          <View style={style.fieldLengthView}>
            <Text style={style.fieldLengthText}>
              {props.taskTitle.length} / 50
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskTitleModal;
