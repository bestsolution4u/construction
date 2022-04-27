import React from 'react';
import {View, Image, Text} from 'react-native';
import Modal from 'react-native-modal';
import style from './modalStyle';
import CardContainer from '../../../../Components/Common/CardContainer';
import {Button} from 'native-base';

/**
 * Send invite email success modal dialog component
 * @param {*} props
 *
 * Available props
 *
 * isVisible : bool	Show the modal?
 * onBackdropPress : func	() => null	Called when the backdrop is pressed
 * onClose : func    () => null Called when the close is pressed
 */

const InviteSuccessModal = props => (
  <Modal
    animationIn={'flipInX'}
    animationOut={'flipOutX'}
    style={style.modal_confirm_dialog}
    isVisible={props.isVisible}
    onBackdropPress={props.onBackdropPress}>
    <CardContainer style={style.modal_sentemail_container}>
      <View style={style.sentEmail_main}>
        <View style={style.modal_approved_container}>
          <Image
            style={style.modal_invite_success_image}
            source={require('../../../../assets/images/np_approved.png')}
          />
        </View>
        <View style={style.modal_invite_success_text_wrapper}>
          <View style={style.modal_invite_success_text_success}>
            <Text style={style.modal_succes_text}>
              Email Send Successfully!
            </Text>
          </View>
          <View style={style.modal_invite_success_text_login}>
            <Text style={style.modal_recieved_message}>
              New members receive login credentials.
            </Text>
          </View>
        </View>
      </View>
      <Button
        onPress={() => props.onClose && props.onClose()}
        style={style.modal_close_button}>
        <Text style={style.modal_close_text}>Close</Text>
      </Button>
    </CardContainer>
  </Modal>
);

export default InviteSuccessModal;
