import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, scale} from '../../../Utils/scaling';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    paddingTop: verticalScale(19),
    paddingLeft: scale(20),
    paddingRight: scale(20),
    margin: 0,
    justifyContent: 'center',
  },
  upperView: {
    height: verticalScale(32),
    // borderWidth: 1,
    // borderColor: 'white',
  },
  fullModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    width: '100%',
  },
  icon: {
    height: scale(28),
    width: scale(28),
    borderRadius: scale(28 / 2),
    padding: 8,
    marginTop: 20,
    backgroundColor: 'white',
  },

  /*-------- view modal ------- */
  middleView: {
    height: verticalScale(354),
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    paddingTop: verticalScale(20),
  },
  verifyText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginBottom: verticalScale(20),
  },

  addImageIcon: {
    width: scale(108),
    height: verticalScale(94),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 0.2,
    borderRadius: 5,
  },
  iconText: {
    fontSize: moderateScale(16),
    fontFamily: 'Helvetica',
    color: '#707070',
  },
  image: {
    width: scale(108),
    height: verticalScale(94),
    borderRadius: 5,
    marginLeft: scale(5),
  },

  /*-------------text are design ------------- */
  TextAreInput: {
    height: verticalScale(95),
    paddingLeft: scale(15),
    paddingTop: verticalScale(15),
    borderColor: '#A2A2A2',
    borderWidth: 0.2,
    width: '100%',
    marginBottom: verticalScale(15),
  },
  textAreaText: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    color: '#A2A2A2',
  },

  numView: {
    flex: 1,
    paddingTop: verticalScale(13),
    paddingRight: scale(13),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  num: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    color: '#A2A2A2',
    marginVertical: verticalScale(10),
  },
  /*------------------*/
  buttonView: {
    paddingLeft: scale(20),
    paddingHorizontal: scale(20),
    width: '100%',
  },
  button: {
    height: verticalScale(47),
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#0142BE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },

  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
