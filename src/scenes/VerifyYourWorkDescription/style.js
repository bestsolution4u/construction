import {StyleSheet} from 'react-native';
import {verticalScale, scale, moderateScale} from '../../Utils/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleModal: {
    flex: 1,
    paddingRight: 0,
    paddingLeft: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
  },
  Xmodal: {
    flex: 1,
    paddingRight: 0,
    paddingLeft: 0,
  },
  viewModal: {
    height: verticalScale(175),
    backgroundColor: 'white',
    width: '100%',
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton: {
    backgroundColor: 'white',
    borderRadius: scale(29 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(29),
    width: scale(29),
    padding: 7,
    marginLeft: 5,
    marginTop: 35,
  },
  imageX: {
    tintColor: 'black',
    height: scale(14),
    width: scale(14),
  },
  InputDescription: {
    height: verticalScale(95),
    borderWidth: 0.2,
    width: '90%',
    borderColor: '#A2A2A2',
    borderRadius: 6,
    color: 'red',
    padding: 10,
  },
  buttonSave: {
    height: '25%',
    marginLeft: '80%',
  },
  TxtSave: {
    color: '#0B47BB',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});
export default style;
