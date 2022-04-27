import {StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../Utils/scaling';

export default StyleSheet.create({
  modal_style: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  x_button_view: {
    flex: 1,
  },
  modal_x_button: {
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  modal_card_container: {
    borderRadius: 0,
    height: 'auto',
    width: '100%',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  modal_view_save: {
    height: verticalScale(40),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modal_save_button: {
    height: verticalScale(20),
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modal_save_text: {
    color: '#0B47BB',
    fontWeight: 'bold',
    fontSize: verticalScale(16),
  },
  modal_view_input: {
    height: verticalScale(70),
    width: '100%',
    paddingVertical: verticalScale(5),
    marginBottom: verticalScale(5),
  },
  modal_label: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modal_confirm_dialog: {
    margin: 0,
    flex: 1,
    paddingHorizontal: scale(20),
  },
  modal_sentemail_container: {
    height: 'auto',
    width: '100%',
    paddingVertical: verticalScale(10),
    marginLeft: 0,
    marginRight: 0,
  },
  sentEmail_main: {
    height: 'auto',
    width: '100%',
    paddingVertical: verticalScale(15),
    flexDirection: 'row',
    marginBottom: verticalScale(20),
  },
  modal_approved_container: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  modal_succes_text: {
    textAlign: 'left',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: verticalScale(18),
  },
  modal_recieved_message: {
    textAlign: 'left',
    color: '#0B47BB',
    fontSize: verticalScale(17),
  },
  modal_close_button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: verticalScale(5),
    marginBottom: 0,
  },
  modal_close_text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: verticalScale(16),
  },
  modal_invite_success_image: {
    height: 98,
    width: 95,
  },
  modal_invite_success_text_wrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  modal_invite_success_text_success: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  modal_invite_success_text_login: {
    justifyContent: 'flex-end',
    top: verticalScale(5),
  },
  modal_signout_text_container: {
    height: 'auto',
    width: '100%',
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    paddingHorizontal: scale(0),
  },
  modal_signout_view_text: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: scale(15),
  },
  modal_signout_button: {
    height: verticalScale(47),
    width: '100%',
    backgroundColor: '#BB0B0B',
    borderRadius: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
  },
  modal_signout_text_button: {
    fontSize: verticalScale(16),
    fontWeight: 'bold',
  },
  modal_signout_title: {
    color: '#000000',
    fontSize: verticalScale(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    textAlign: 'left',
  },
  modal_signout_message: {
    color: '#000000',
    fontSize: verticalScale(18),
    textAlign: 'left',
  },
  modal_signout_button_wrapper: {
    height: 'auto',
    width: '100%',
    paddingVertical: verticalScale(10),
  },
  modal_signout_cancel: {
    backgroundColor: 'transparent',
    top: verticalScale(10),
  },
});
