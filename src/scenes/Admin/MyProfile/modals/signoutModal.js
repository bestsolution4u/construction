import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import style from './modalStyle';
import CardContainer from '../../../../Components/Common/CardContainer';
import {Button} from 'native-base';

/**
 * signout modal dialog component
 * @param {*} props
 *
 * Available props
 *
 * isVisible : bool	Show the modal?
 * onBackdropPress : func	() => null	Called when the backdrop is pressed
 * onCancel : func    () => null Called when the close is pressed
 * onSignout: func    () => null Callend when the signout button is pressed
 */

const SignoutModal = props => (
  <Modal
    style={style.modal_confirm_dialog}
    onBackdropPress={props.onBackdropPress}
    isVisible={props.isVisible}>
    <CardContainer style={[style.modal_sentemail_container]}>
      <View style={style.modal_signout_text_container}>
        <View style={[style.modal_signout_view_text, {paddingRight: 0}]}>
          <Text
            style={style.modal_signout_title}>
            Are you sure you want to sign out?
          </Text>
        </View>
        <View style={style.modal_signout_view_text}>
          <Text
            style={style.modal_signout_message}>
            Signing out will exit you from this account.
          </Text>
        </View>
      </View>
      <View
        style={style.modal_signout_button_wrapper}>
        <Button onPress={props.onSignout} style={style.modal_signout_button}>
          <Text style={[style.modal_signout_text_button, {color: '#FFFFFF'}]}>
            Signout
          </Text>
        </Button>
        <Button
          onPress={props.onCancel}
          style={[
            style.modal_signout_button,
            style.modal_signout_cancel,
          ]}>
          <Text style={style.modal_signout_text_button}>Cancel</Text>
        </Button>
      </View>
    </CardContainer>
  </Modal>
);

export default SignoutModal;
