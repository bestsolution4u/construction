import React from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import Modal from 'react-native-modal';
import style from './modalStyle';
import CardContainer from '../../../../Components/Common/CardContainer';
import Input from '../../../../Components/Common/Input';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Formik} from 'formik';
import {
  validationSchemaEmail,
  validationSchemaName,
} from '../../../../Utils/validation';

/**
 * "Name", "Email" and "Send invitation email" modal dialog component
 * @param {*} props
 *
 * Available props
 *
 * isVisible : bool	Show the modal?
 * onBackdropPress : func	() => null	Called when the backdrop is pressed
 * onClose : func    () => null Called when the close button(X) is pressed
 * onSave : func    () => null Called when the save button is pressed
 * label : string
 * value : string
 * placeholder : string
 * isEmail : bool	Is email input modal?
 */

const isAndroid = Platform.OS === 'android';

const InputModal = props => {
  const isEmailModal = props.isEmail;

  return (
    <Modal
      style={[
        style.modal_style,
        isAndroid && {justifyContent: 'flex-end', margin: 0, padding: 0},
      ]}
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}>
      <Formik
        initialValues={
          isEmailModal ? {email: props.value} : {name: props.value}
        }
        onSubmit={values => {
          props.onSave(isEmailModal ? values.email : values.name);
        }}
        validationSchema={
          isEmailModal ? validationSchemaEmail : validationSchemaName
        }>
        {({values, handleChange, errors, touched, handleSubmit}) => (
          <View style={{flex: 1}}>
            <View style={style.x_button_view}>
              <Button
                style={[style.modal_x_button, isAndroid && {top: 10}]}
                onPress={props.onClose}>
                <Icon name="close" size={25} />
              </Button>
            </View>
            <CardContainer style={style.modal_card_container}>
              <View style={style.modal_view_save}>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={style.modal_save_button}>
                  <Text style={style.modal_save_text}>Save</Text>
                </TouchableOpacity>
              </View>
              {!!props.label && (
                <Text style={style.modal_label}>{props.label}</Text>
              )}
              <View style={style.modal_view_input}>
                <Input
                  value={isEmailModal ? values.email : values.name}
                  onChangeText={handleChange(isEmailModal ? 'email' : 'name')}
                  placeholder={props.placeholder}
                />
                {isEmailModal && touched.email && errors.email && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                {!isEmailModal && touched.name && errors.name && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.name}
                  </Text>
                )}
              </View>
            </CardContainer>
          </View>
        )}
      </Formik>
    </Modal>
  );
};

export default InputModal;
