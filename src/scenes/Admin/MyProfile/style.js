import {StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../Utils/scaling';

import colors from '../../../Theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundHeader: {
    height: verticalScale(120),
    width: '100%',
    backgroundColor: '#F5F6FA',
    shadowColor: '#00000029',
    shadowOffset: {
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    height: verticalScale(60),
  },
  np_arrow_header: {
    width: scale(11),
    height: verticalScale(17),
    marginRight: 10,
    alignSelf: 'center',
  },
  header_left: {
    height: '100%',
    width: 'auto',
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_right: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    paddingHorizontal: scale(12),
  },
  header_title: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000000',
    left: 10,
  },
  sign_out_text: {
    fontSize: 16,
    color: '#BB0B0B',
    fontWeight: 'normal',
  },
  header_center_view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon_image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 60 / 2,
  },
  under_icon_view: {
    flexDirection: 'row',
    paddingHorizontal: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  change_profile_text: {
    color: '#A2A2A2',
    fontSize: 16,
    fontWeight: 'bold',
    right: 5,
  },
  arrow_right_icon: {
    top: 1,
  },
  invite_view: {
    height: verticalScale(120),
    width: '100%',
    borderBottomColor: '#A2A2A2',
    borderBottomWidth: 0.2,
    paddingVertical: verticalScale(14),
  },
  main_content: {
    flex: 1,
    marginHorizontal: scale(20),
  },
});
