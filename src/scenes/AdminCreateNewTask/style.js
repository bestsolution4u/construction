import {StyleSheet} from 'react-native';
import {verticalScale, scale, moderateScale} from '../../Utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header_image_background: {
    width: '100%',
    height: verticalScale(316),
    top: 0,
  },
  header_title: {
    width: '100%',
    height: verticalScale(67),
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    opacity: 0.9,
    paddingHorizontal: scale(10),
    zIndex: 100,
    elevation: 0,
    position: 'absolute',
  },
  main_content: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    backgroundColor: '#FFFFFF',
  },
  header_content: {
    flex: 1,
  },
  header_np_arrow_view: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  np_arrow: {
    width: scale(9),
    height: verticalScale(16),
  },
  header_title_text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: verticalScale(24),
  },
  header_title_view: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 'auto',
    height: '100%',
    paddingHorizontal: scale(10),
  },
  header_add_button: {
    width: scale(65),
    height: verticalScale(65),
    alignItems: 'center',
    borderRadius: verticalScale(10),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  header_add_image: {
    height: verticalScale(30),
    width: scale(34),
  },
  header_add_view: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },
  header_delete_view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
  },
  header_delete_button: {
    borderRadius: verticalScale(10),
    width: scale(65),
    height: verticalScale(29),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BB0B0B',
  },
  create_task_button: {
    width: '100%',
    elevation: 0,
    backgroundColor: '#0B47BB',
    borderRadius: verticalScale(5),
    height: verticalScale(47),
    marginTop: verticalScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  upperView: {
    flex: 1,
  },
  iconView: {
    flex: 1,
    paddingTop: verticalScale(19),
    paddingLeft: scale(13),
    width: '100%',
  },
  icon: {
    height: verticalScale(29),
    width: scale(29),
    borderRadius: 50,
    padding: 7,
    backgroundColor: 'white',
  },

  //input view component
  InputView: {
    height: verticalScale(146),
    width: '100%',
    paddingLeft: scale(20),
    paddingTop: verticalScale(20),
    paddingRight: scale(20),
    backgroundColor: 'white',
  },
  sendView: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row-reverse',
    marginBottom: verticalScale(27),
  },
  sendText: {
    color: '#0B47BB',
    fontSize: moderateScale(16),
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },

  // input style
  input: {
    height: verticalScale(47),
    width: '100%',
    borderWidth: 0.3,
    borderColor: '#A2A2A2',
    paddingLeft: scale(20),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(15),
    marginBottom: verticalScale(20),
  },
  modalContainer: {
    margin: 0,
  },
  closeBtnView: {
    flex: 1,
  },
  closeBtn: {
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  emptyView: {
    flex: 3,
  },
  taskFieldContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-end',
  },
  saveBtn: {
    width: 50,
  },
  saveBtnText: {
    fontSize: 18,
    color: '#2B4BBD',
    fontWeight: 'bold',
  },
  textfieldContainer: {
    borderWidth: 0.5,
    width: '100%',
    borderColor: 'lightgrey',
  },
  textfield: {
    borderWidth: 0,
    height: 35,
    fontSize: moderateScale(20),
    paddingLeft: 10,
    paddingTop: 10,
  },
  fieldLengthView: {
    alignItems: 'flex-end',
    paddingBottom: 5,
    paddingRight: 5,
  },
  fieldLengthText: {
    color: 'lightgrey',
  },
  taskFieldContainer_android: {
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    padding: 0,
    marginBottom: 0,
    width: '100%',
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(15),
    justifyContent: 'center',
  },
  validation_error: {
    fontSize: 10,
    color: 'red',
  },
});
