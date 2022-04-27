import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../Utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: verticalScale(62),
    width: '100%',
    backgroundColor: '#FFFFFF',
    //  elevation:1.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderTopColor: 'white',
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  header_calendar: {
    flex: 1,
    flexDirection: 'row',
    borderTopColor: 'white',

    borderRightColor: 'white',
    borderLeftColor: 'white',
  },
  main_content: {
    flex: 1,
  },
  profile_image: {
    height: verticalScale(50),
    width: scale(50),
    borderRadius: verticalScale(25),
  },
});
