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

const TaskAddressModal = props => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardDidHide = ()=> {
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
    <Modal isVisible={props.modalAddress} style={style.modalContainer}>
      <View style={style.closeBtnView}>
        <Button
          style={[style.closeBtn, isAndroid && {top: 10}]}
          onPress={() => {
            props.toggleModalAddress(false);
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
          {bottom: keyboardHeight},
        ]}>
        <View style={{backgroundColor: '#fff', alignItems: 'flex-end'}}>
          <Button
            transparent
            style={style.saveBtn}
            onPress={() => {
              props.toggleModalAddress(false);
            }}>
            <Text style={style.saveBtnText}>Save</Text>
          </Button>
        </View>
        <View style={style.textfieldContainer}>
          <TextInput
            autoFocus
            name="taskAdd"
            value={props.taskAdd}
            onChangeText={text => props.setTaskAddress(text)}
            placeholder="Write task address..."
            maxLength={300}
            style={{
              borderWidth: 0,
              height: 45,
              fontSize: 20,
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TaskAddressModal;
