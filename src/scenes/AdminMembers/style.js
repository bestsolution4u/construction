import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../Utils/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: verticalScale(70),
    width: '100%',
    elevation: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  header_left: {
    width: 'auto',
    height: '100%',
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: verticalScale(15),
  },
  header_right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: scale(10),
  },
  header_right_text_button: {
    height: '100%',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  np_arrow_header: {
    height: verticalScale(17),
    width: scale(9),
  },
  header_title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    left: 20,
    alignSelf: 'center',
  },
  delete_text: {
    color: '#BB0B0B',
    fontSize: 16,
    fontWeight: 'normal',
  },
  main_content: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  search_view: {
    height: verticalScale(130),
    width: '100%',
    paddingVertical: verticalScale(20),
    borderBottomColor: '#A2A2A2',
    borderBottomWidth: 0.2,
  },
  search_text: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: verticalScale(15),
  },
  cardContainer: {width: '100%', alignSelf: 'center'},
  cardWrapper: {
    paddingHorizontal: scale(0),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
    width: '100%',
  },
  modal_delete: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(5),
    backgroundColor: '#BB0B0B',
    width: '100%',
    elevation: 0,
  },
  modal_cancel: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  modal_title: {
    color: '#000000',
    fontSize: verticalScale(18),
    fontWeight: 'bold',
  },
  modal_content: {
    color: '#000000',
    fontSize: verticalScale(17),
    textAlign: 'center',
  },
  modal_view_content: {
    width: '100%',
    paddingHorizontal: scale(15),
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  text_delete: {
    color: 'white',
    fontSize: verticalScale(16),
    fontWeight: 'bold',
  },
  text_cancel: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: verticalScale(16),
  },
});

export default style;
