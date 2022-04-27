import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardEvent,
} from 'react-native';
import style from '../style';
import Modal from 'react-native-modal';
import {IMaskTextInput} from 'react-native-imask';
import {scale, verticalScale} from '../../../Utils/scaling';
import {Formik} from 'formik';
import {validationSchemaPhone} from '../../../Utils/validation';

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
      onBackButtonPress={() => {
        props.onPressHideModal('modalPhone');
      }}
      style={style.modalView}
      isVisible={props.modalPhone}>
      <TouchableOpacity
        onPress={() => {
          props.onPressHideModal('modalPhone');
        }}
        style={style.upperView}>
        <View style={style.iconView}>
          <TouchableOpacity
            onPress={() => {
              props.onPressHideModal('modalPhone');
            }}
            style={style.icon}>
            <Image
              style={{
                height: verticalScale(14.9),
                width: scale(14.9),
              }}
              source={require('../../../assets/images/np_x.png')}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Formik
        initialValues={{phone: props.phoneNumber}}
        onSubmit={values => {
          props.setPhoneNumber(values.phone);
          props.toggleModalPhone(false);
        }}
        validationSchema={validationSchemaPhone}>
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <View style={[style.InputView, {bottom: keyboardHeight}]}>
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
              style={style.sendView}>
              <Text style={style.sendText}>Save</Text>
            </TouchableOpacity>
            <IMaskTextInput
              mask="+{1} (000) 000 - 0000"
              radix="."
              value={values.phone}
              unmask={true}
              lazy={false}
              onAccept={value => {
                setFieldValue('phone', value);
              }}
              keyboardType={'phone-pad'}
              autoFocus
              placeholder="Enter Phone Number..."
              editable={true}
              style={[style.input, {marginBottom: 5}]}
            />
            {touched.phone && errors.phone && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.phone}</Text>
            )}
          </View>
        )}
      </Formik>
    </Modal>
  );
};

export default TaskDescriptionModal;
