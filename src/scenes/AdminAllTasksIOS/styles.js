import {StyleSheet} from 'react-native';

import colors from '../../Theme/Colors';
import {verticalScale, moderateScale, scale} from '../../Utils/scaling';

const styles = StyleSheet.create({
  allTasksScreen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: scale(32),
    shadowColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    alignItems: 'center',
    borderBottomColor: '#00000029',
  },
  searchBarView: {
    borderWidth: 0.3,
    flexDirection: 'row',
    marginTop: 20,
    borderColor: '#c5c5c5',
  },
  searchBarInput: {
    borderWidth: 0,
    width: '90%',
    fontSize: 20,
    paddingLeft: 10,
  },
  listView: {
    backgroundColor: '#F5F6FA',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#c5c5c5',
  },
  listData: {
    borderBottomWidth: 0.5,
    borderColor: '#c5c5c5',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userEmail: {
    marginLeft: 20,
    fontSize: 18,
  },
  taskListContainerView: {
    marginTop: 10,
  },
  taskFRowView: {
    flexDirection: 'row',
  },
  taskFRowFCol: {
    width: '30%',
  },
  taskImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  taskFRowSCol: {
    width: '60%',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
  },
  taskSRow: {
    marginBottom: 10,
  },
  taskDetails: {
    color: colors.skyBlue,
    marginTop: 10,
    fontSize: 16,
  },
  taskTRow: {
    borderWidth: 0.5,
    borderColor: colors.lightGrey,
    padding: 10,
    flexDirection: 'row',
  },
  userProfileImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  taskStatus: {
    marginLeft: 20,
    fontSize: 15,
  },
  iconContainer: {
    marginLeft: 5,
    borderRadius: 20 / 2,
    height: 20,
    width: 20,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: colors.white,
  },
  userEmailStatusView: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  headerBtn: {
    flexDirection: 'row',
  },
  titleView: {
    alignItems: 'center',
    marginLeft: 15,
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  headerRightView: {
    flexDirection: 'row',
    marginRight: 5,
  },
  btn: {
    borderRadius: scale(40 / 2),
    width: scale(40),
    height: scale(40),
    marginLeft: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    padding: 13,
    backgroundColor: 'transparent',
  },
  imageIcon: {
    width: scale(40),
    height: scale(40),
    marginLeft: scale(-12),
    borderRadius: scale(40 / 2),
  },
  backBtn: {
    width: 30,
    justifyContent: 'flex-start',
    marginRight: 5,
    alignItems: 'center',
    marginLeft: -25,
  },
});

export default styles;
