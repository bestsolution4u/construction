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

const ClientNameModal = props => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardDidShow = (e: KeyboardEvent)=> {
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
      isVisible={props.modalClientName}
      style={[
        style.modalContainer,
        isAndroid && {justifyContent: 'flex-end', margin: 0, padding: 0},
      ]}>
      <View style={style.closeBtnView}>
        <Button
          style={[style.closeBtn, isAndroid && {top: 10}]}
          onPress={() => {
            props.toggleClientNameModal(false);
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
        <Button
          transparent
          style={style.saveBtn}
          onPress={() => {
            props.toggleClientNameModal(false);
          }}>
          <Text style={style.saveBtnText}>Save</Text>
        </Button>
        <View style={style.textfieldContainer}>
          <TextInput
            autoFocus
            name="task"
            value={props.taskClientName}
            onChangeText={text => props.setTaskClientName(text)}
            placeholder="Write your task client name..."
            maxLength={50}
            style={[
              style.textfield,
              {paddingTop: 0, height: 50 },
            ]}
          />
        </View>
      </View>
    </Modal>
  );
}

export default ClientNameModal;
