import {StyleSheet, Platform} from 'react-native';
import {verticalScale, moderateScale, scale} from '../../Utils/scaling';
import {isEqual} from 'lodash';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  ViewMidle: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    width: '90%',
    height: '75%',
    alignContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(20),
    borderRadius: 3,
    marginVertical: scale(120),
  },
  buttonLogin: {
    height: verticalScale(47),
    width: scale(300),
    backgroundColor: '#0B47BB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    bottom: -40,
  },
  txtLogin: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  buttonForgotPassword: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scale(15),
  },
  txtForgetPassword: {
    fontSize: moderateScale(16),
    color: '#A2A2A2',
    opacity: 0.5,
    fontFamily: 'Helvetica',
  },
  txtCheckyouremails: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  ViewLogoHamati: {
    flex: 1,
    alignContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtHamatiRoffing: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginHorizontal: scale(10),
    fontSize: moderateScale(12),
  },
  txtSumbitWorkOn: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    bottom: '-3%',
    marginTop: isEqual(Platform.OS, 'ios') ? 50 : 0,
  },
  txtThego: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    bottom: '-3%',
  },
  txtIncorrect: {
    fontFamily: 'Helvetica',
    fontSize: moderateScale(12),
    width: 200,
    color: '#BB0B0B',
  },
  header: {
    marginLeft: 13,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    marginVertical: scale(20),
  },
  fieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputField: {
    height: 60,
    justifyContent: 'center',
  },
});

export default style;
