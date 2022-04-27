import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Platform,
  Keyboard,
  KeyboardEvent,
} from 'react-native';
import {Button} from 'native-base';
import style from '../style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/EvilIcons';

const isAndroid = Platform.OS === 'android';

const TaskDescriptionModal = props => {
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
      isVisible={props.modalTaskDescription}
      style={[
        style.modalContainer,
        isAndroid && {justifyContent: 'flex-end', margin: 0, padding: 0},
      ]}>
      <View style={style.closeBtnView}>
        <Button
          style={[style.closeBtn, isAndroid && {top: 10}]}
          onPress={() => {
            props.toggleModalDescription(false);
          }}>
          <Icon name="close" size={25} />
        </Button>
      </View>
      <View style={style.emptyView} />

      <View
        style={[
          isAndroid
            ? style.taskFieldContainer_android
            : style.taskFieldContainer,
          {paddingTop: 5, bottom: keyboardHeight},
        ]}>
        <Button
          transparent
          style={style.saveBtn}
          onPress={() => {
            props.toggleModalDescription(false);
          }}>
          <Text style={style.saveBtnText}>Save</Text>
        </Button>
        <View style={style.textfieldContainer}>
          <TextInput
            autoFocus
            name="taskDesc"
            value={props.TaskDescription}
            onChangeText={text => props.setTaskDescription(text)}
            placeholder="Write task description..."
            maxLength={300}
            numberOfLines={5}
            multiline
            style={[style.textfield, {height: 90}]}
          />
          <View style={{alignItems: 'flex-end'}}>
            <Text
              style={[
                style.fieldLengthText,
                {paddingBottom: 5, paddingRight: 5},
              ]}>
              {props.TaskDescription.length} / 300
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDescriptionModal;
