import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, scale} from '../../Utils/scaling';

const styles = StyleSheet.create({
  userProfile: {
    height: verticalScale(150),
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  upPart: {
    width: '200%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: scale(20),
    elevation: 0,
    backgroundColor: '#F5F6FA',
  },

  iconView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: verticalScale(71),
  },
  myProfileText: {
    fontSize: moderateScale(24),
    marginTop: scale(6),
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginLeft: scale(20),
  },

  signout: {
    fontSize: moderateScale(16),
    color: '#BB0B0B',
    fontFamily: 'Helvetica',
    marginTop: verticalScale(4),
  },

  changePicture: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    flex: 1,
  },
  changePictureText: {
    fontWeight: 'bold',
    color: '#A2A2A2',
    fontFamily: 'Helvetica',
    fontSize: moderateScale(16),
  },

  /*--------Completed tasks component ----*/

  completedText: {
    padding: scale(20),
    fontSize: moderateScale(18),
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  completedTasks: {
    height: verticalScale(94),
    paddingRight: scale(8),
    paddingLeft: scale(20),
    marginBottom: verticalScale(20),
  },
  picTextView: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: verticalScale(20),
  },
  picture: {
    height: verticalScale(94),
    width: '25%',
  },
  description: {
    width: '75%',
    height: verticalScale(94),
    paddingLeft: scale(10),
    flex: 1,
  },
  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginBottom: verticalScale(10),
  },
  data: {
    paddingLeft: scale(20),
    paddingRight: scale(18),
  },
  descText: {
    fontSize: moderateScale(16),
    fontFamily: 'Helvetica',
  },
  timeView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: verticalScale(18),
    height: verticalScale(21),
  },

  blueText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#0B47BB',
  },
  blueText2: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#0B47BB',
    marginLeft: scale(20),
  },
  addressView: {
    width: '100%',
    borderBottomWidth: 0.2,
    height: verticalScale(43),
    borderBottomColor: '#A2A2A2',
    marginBottom: verticalScale(20),
  },
  blueText3: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: '#0B47BB',
  },

  // modal code
  main_content: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  modal_style: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
  },
  x_button_view: {
    flex: 1,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },
  modal_x_button: {
    backgroundColor: '#FFFFFF',
    height: verticalScale(30),
    alignSelf: 'flex-start',
    width: scale(30),
    borderRadius: verticalScale(15),
    justifyContent: 'center',
    alignItems: 'center',
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
    // paddingVertical:verticalScale(10)
  },
  modal_save_button: {
    height: verticalScale(20),
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  modal_view_input: {
    height: verticalScale(70),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
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
  modal_close_text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: verticalScale(16),
  },
  modal_close_button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: verticalScale(5),
    marginBottom: 0,
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
  modal_signout_text_container: {
    height: 'auto',
    width: '100%',
    paddingVertical: verticalScale(10),
    alignItems: 'flex-start',
    paddingHorizontal: scale(0),
  },
  modal_signout_text_button: {
    fontSize: verticalScale(16),
    fontWeight: 'bold',
  },
  modal_signout_view_text: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: scale(15),
  },
});

export default styles;
