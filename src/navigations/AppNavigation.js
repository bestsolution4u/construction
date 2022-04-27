import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {verticalScale, moderateScale, scale} from '../Utils/scaling';
import styles2 from '../scenes/UserProfileScreen/style';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AdminAllTasksIOS from '../scenes/AdminAllTasksIOS';
import styles from './Styles/AppNavigationStyles';
import AdminMyProfile from '../scenes/Admin/MyProfile';
import LoginScreen from '../scenes/LoginScreen';
import AdminAssignTask from '../scenes/AdminAssignTask';
import AdminCreateNewTask from '../scenes/AdminCreateNewTask';
import AdminMembers from '../scenes/AdminMembers';
import AdminTaskDetails from '../scenes/AdminTaskDetails';
import AdminTaskDetailsCompleted from '../scenes/AdminTaskDetailsCompleted';
import FullMapDirection from '../scenes/FullMapDirection';
import UserHome from '../scenes/UserHome';
import UserTaskArrived from '../scenes/UserTaskArrived';
import UserTaskDetails from '../scenes/UserTaskDetails';
import UserProfileScreen from '../scenes/UserProfileScreen';
import BigImageScreen from '../scenes/BigImageScreen';
import AdminCompletedTask from '../scenes/AdminCompletedTask';
import FlashMessage from 'react-native-flash-message';

const UserStack = createStackNavigator(
  {
    UserHome: {
      screen: UserHome,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerLeft: () => (
          <View style={{paddingLeft: scale(20), justifyContent: 'center'}}>
            <Text
              style={{
                color: '#000000',
                fontSize: verticalScale(24),
                fontWeight: 'bold',
              }}>
              {navigation.getParam('UserHomeDate')}
            </Text>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: scale(10),
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserProfileScreen');
              }}>
              <Image
                style={{
                  height: scale(45),
                  width: scale(45),
                  borderRadius: scale(45 / 2),
                }}
                source={{uri: navigation.getParam('avatar')}}
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {
          elevation: 0,
          height: scale(100),
        },
      }),
    },
    UserProfileScreen: {
      screen: UserProfileScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerLeft: () => (
          <View style={styles2.upPart}>
            <View style={styles2.iconView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Image
                  source={require('../assets/images/np_arrow_header.png')}
                  style={{
                    height: verticalScale(15.33),
                    width: scale(8.77),
                    marginTop: verticalScale(6),
                  }}
                />
              </TouchableOpacity>
              <Text style={styles2.myProfileText}>My Profile</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              paddingRight: scale(20),
              backgroundColor: '#F5F6FA',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={navigation.getParam('showModal')}
              style={styles2.iconView}>
              <Text style={styles2.signout}>Sign out</Text>
            </TouchableOpacity>
          </View>
        ),
      }),
      headerStyle: {
        shadowOpacity: 0,
        elevation: 0,
      },
    },
    UserTaskArrived: {
      screen: UserTaskArrived,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity
            style={{paddingHorizontal: verticalScale(15)}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{height: verticalScale(16), width: scale(16)}}
              source={require('../assets/images/np_x_medium.png')}
            />
          </TouchableOpacity>
        ),
        headerStyle: {
          opacity: 0.9,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
      }),
    },
    UserTaskDetails: {
      screen: UserTaskDetails,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTransparent: true,
        headerBackground: () => (
          <View style={{backgroundColor: '#fff', opacity: 0.8, height: 100}} />
        ),
        headerTitleStyle: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: verticalScale(24),
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Task Details</Text>
            </View>
          </View>
        ),
      }),
    },
    BigImageScreenUser: {
      screen: BigImageScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTransparent: true,
        headerLeft: () => <View />,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: scale(20),
            }}>
            <Text style={{color: '#0B47BB', fontSize: verticalScale(16)}}>
              Done
            </Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          opacity: 0.9,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
      }),
    },
    FullMapDirectionUser: {
      screen: FullMapDirection,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => <View />,
        headerRight: () => (
          <TouchableOpacity
            style={{paddingHorizontal: scale(15)}}
            onPress={navigation.getParam('mapDirectionDone')}>
            <Text style={{color: '#0B47BB', fontSize: verticalScale(16)}}>
              Done
            </Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          opacity: 0.9,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
      }),
    },
  },
  {
    initialRouteName: 'UserHome',
  },
);

const AdminStack = createStackNavigator(
  {
    AdminAllTasks: {
      screen: AdminAllTasksIOS,
      navigationOptions: {
        headerShown: false,
        headerTitle: null,
      },
    },
    AdminCompletedTask: {
      screen: AdminCompletedTask,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTitleStyle: {
          fontFamily: 'Helvetica',
          fontWeight: 'bold',
          fontSize: moderateScale(24),
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Completed Tasks</Text>
            </View>
          </View>
        ),

        headerRight: () => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: scale(5),
              }}>
              <TouchableOpacity
                style={{marginRight: scale(10)}}
                onPress={() => {
                  navigation.navigate('AdminCreateNewTask');
                }}>
                <View
                  style={{
                    height: verticalScale(44),
                    width: verticalScale(44),
                    borderRadius: verticalScale(22),
                    backgroundColor: '#0B47BB',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('../assets/images/Plus.png')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginRight: scale(20)}}
                onPress={() => {
                  navigation.navigate('AdminMyProfile');
                }}>
                <View
                  style={{
                    height: verticalScale(44),
                    width: verticalScale(44),
                    borderRadius: verticalScale(22),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('../assets/images/LogoScreen.png')} />
                </View>
              </TouchableOpacity>
            </View>
          );
        },
      }),
    },
    BigImageScreenAdmin: {
      screen: BigImageScreen,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => <View />,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: scale(20),
            }}>
            <Text style={{color: '#0B47BB', fontSize: verticalScale(16)}}>
              Done
            </Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          opacity: 0.9,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
      }),
    },
    FullMapDirectionAdmin: {
      screen: FullMapDirection,
      navigationOptions: ({navigation}) => ({
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => <View />,
        headerRight: () => (
          <TouchableOpacity
            style={{paddingHorizontal: scale(15)}}
            onPress={navigation.getParam('mapDirectionDone')}>
            <Text style={{color: '#0B47BB', fontSize: verticalScale(16)}}>
              Done
            </Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          opacity: 0.9,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#FFFFFF',
        },
      }),
    },
    AdminTaskDetailsCompleted: {
      screen: AdminTaskDetailsCompleted,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTitleStyle: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: verticalScale(24),
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
          zIndex: 100,
          opacity: 1,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Task Details</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={navigation.getParam('taskCompletedDelete')}
            style={{paddingHorizontal: scale(10)}}>
            <Text style={{color: '#BB0B0B', fontSize: verticalScale(16)}}>
              Delete
            </Text>
          </TouchableOpacity>
        ),
      }),
    },
    AdminTaskDetails: {
      screen: AdminTaskDetails,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTransparent: true,
        headerBackground: () => (
          <View style={{backgroundColor: '#fff', opacity: 0.8, height: 100}} />
        ),
        headerTitleStyle: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: verticalScale(24),
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Task Details</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={navigation.getParam('taskDetailsDelete')}
            style={{paddingHorizontal: scale(10)}}>
            <Text style={{color: '#BB0B0B', fontSize: verticalScale(16)}}>
              Delete
            </Text>
          </TouchableOpacity>
        ),
      }),
    },
    AdminMembers: {
      screen: AdminMembers,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTitleStyle: {
          color: '#000000',
          fontWeight: 'bold',
          fontSize: verticalScale(24),
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Members</Text>
            </View>
          </View>
        ),
        headerRight: () => {
          return (
            <View>
              {navigation.getParam('deleteShow') ? (
                <TouchableOpacity
                  style={{paddingHorizontal: verticalScale(10)}}
                  onPress={navigation.getParam('deleteMemberPress')}>
                  <Text style={styles.delete_text}>Delete</Text>
                </TouchableOpacity>
              ) : (
                <View></View>
              )}
            </View>
          );
        },
      }),
    },
    AdminCreateNewTask: {
      screen: AdminCreateNewTask,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTitleStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: verticalScale(24),
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Create Project</Text>
            </View>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#fff',
          zIndex: 100,
          elevation: 0,
          shadowOpacity: 0,
        },
      }),
    },
    AdminAssignTask: {
      screen: AdminAssignTask,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerTitleStyle: {
          color: '#000000',
          fontSize: 24,
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>Assign Task</Text>
            </View>
          </View>
        ),
      }),
    },
    AdminMyProfile: {
      screen: AdminMyProfile,
      navigationOptions: ({navigation}) => ({
        headerTitle: null,
        headerStyle: {
          shadowOpacity: 0,
          backgroundColor: '#F5F6FA',
          elevation: 0,
        },
        headerLeft: () => (
          <View style={styles.header_left_container}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header_left_back_buton}>
              <Image
                source={require('../assets/images/np_arrow_header.png')}
                style={{
                  height: verticalScale(16.53),
                  width: scale(9.77),
                }}
              />
            </TouchableOpacity>
            <View style={styles.title_customized_view}>
              <Text style={styles.title_text_bold}>My Profile</Text>
            </View>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{paddingHorizontal: verticalScale(10)}}
            onPress={navigation.getParam('submit')}>
            <Text style={styles.sign_out_text}>Sign out</Text>
          </TouchableOpacity>
        ),
      }),
    },
  },
  {
    initialRouteName: 'AdminAllTasks',
  },
);

const AuthNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
      headerTitle: null,
    },
  },
});

const Navigation = createSwitchNavigator(
  {
    Auth: {
      screen: AuthNavigation,
    },
    Admin: {screen: AdminStack},
    User: {screen: UserStack},
  },
  {
    initialRouteName: 'Auth',
  },
);

export const AppContainer = createAppContainer(Navigation);

export const App = () => {
  return (
    <React.Fragment>
      <AppContainer />
      <FlashMessage position="top" />
    </React.Fragment>
  );
};
