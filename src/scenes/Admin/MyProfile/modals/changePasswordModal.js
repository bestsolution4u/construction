import React from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import Modal from 'react-native-modal';
import style from './modalStyle';
import CardContainer from '../../../../Components/Common/CardContainer';
import Input from '../../../../Components/Common/Input';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Formik} from 'formik';
import {validationSchemaChangePassword} from '../../../../Utils/validation';

/**
 * change password modal dialog component
 * @param {*} props
 *
 * Available props
 *
 * isVisible : bool	Show the modal?
 * onBackdropPress : func	() => null	Called when the backdrop is pressed
 * onClose : func    () => null Called when the close button(X) is pressed
 * onSave : func    () => null Called when the save button is pressed
 * currentPassword : string
 */

const isAndroid = Platform.OS === 'android';

const InputModal = props => (
  <Modal
    style={[
      style.modal_style,
      isAndroid && {justifyContent: 'flex-end', margin: 0, padding: 0},
    ]}
    isVisible={props.isVisible}
    onBackdropPress={props.onBackdropPress}>
    <Formik
      initialValues={{
        oldPassword: props.currentPassword,
        password: '',
        confirmPassword: '',
      }}
      onSubmit={values => {
        props.handleCurrentPassword(values.oldPassword);
        props.onSave(values.password);
      }}
      validationSchema={validationSchemaChangePassword(props.currentPassword)}>
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
            <View style={style.modal_view_input}>
              <Input
                value={props.oldPassword}
                onChangeText={handleChange('oldPassword')}
                placeholder={'Old Password'}
                secureTextEntry={true}
              />
              {touched.oldPassword && errors.oldPassword && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.oldPassword}
                </Text>
              )}
            </View>
            <View style={style.modal_view_input}>
              <Input
                value={props.password}
                onChangeText={handleChange('password')}
                placeholder={'New Password'}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View style={style.modal_view_input}>
              <Input
                value={props.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                placeholder={'Repeat New Password'}
                secureTextEntry={true}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
          </CardContainer>
        </View>
      )}
    </Formik>
  </Modal>
);

export default InputModal;
