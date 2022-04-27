import React, {useState, useEffect} from 'react';
import {Text, View, TextInput} from 'react-native';
import {Button} from 'native-base';
import Icons from 'react-native-vector-icons/EvilIcons';
import {map, filter, includes, trim} from 'lodash';
import TasksListView from './TasksListView';
import styles from './styles';
import AdminAllTasksHeader from './customHeader';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as tasksActions from '../../redux/actions/tasksActions';
import * as profileActions from '../../redux/actions/profileActions';
import {getCompanyTasks} from '../../redux/selectors/index';
import {getData} from '../../redux/utils/storage';
import {errorMessage} from '../../Utils/alerts';

Icons.loadFont();

const AdminAllTasksIOS = props => {
  const [member, getMember] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showCompleted, toggleCompletedTask] = useState(false);

  useEffect(() => {
    getData('Admin').then(admin => setProfileImage(admin.attributes.avatar));
  }, []);

  let tasksList = props.tasks;
  if (showCompleted) {
    tasksList = filter(tasksList, {taskStatus: 'Completed'});
  }
  const onPressCreateTask = () => {
    props.navigation.navigate('AdminCreateNewTask');
  };
  const onPressCompleted = () => {
    toggleCompletedTask(true);
    // props.navigation.navigate('AdminCompletedTask');
  };
  const onPressLogoScreen = () => {
    props.navigation.navigate('AdminMyProfile');
  };
  if (member !== null && trim(member.length) > 0) {
    const tempTasksList = tasksList;
    tasksList = [];
    map(tempTasksList, data => {
      if (includes(data.employeeData.email, member)) {
        tasksList.push(data);
      }
    });
  }

  useEffect(() => {
    props.profileActions.getCompanyProfileData({
      params: {},
      onSuccess: res => setProfileImage(res.data.attributes.avatar),
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
    props.tasksActions.fetchCompanyTasksList({
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  }, []);
  return (
    <View style={styles.allTasksScreen}>
      <AdminAllTasksHeader
        profileImage={profileImage}
        showCompleted={showCompleted}
        onPressCreateTask={onPressCreateTask}
        onPressCompleted={onPressCompleted}
        onPressLogoScreen={onPressLogoScreen}
        toggleCompletedTask={toggleCompletedTask}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Search Tasks By </Text>
        <View style={styles.searchBarView}>
          <TextInput
            name="searchBar"
            value={member}
            placeholder="Search"
            onChangeText={text => getMember(text)}
            style={styles.searchBarInput}
          />
          <Button
            transparent
            onPress={() => {
              tasksList = props.tasks;
              getMember('');
            }}>
            <Icons name="close" size={20} />
          </Button>
        </View>
        <TasksListView
          tasksList={tasksList}
          onItemPress={id =>
            props.navigation.navigate('AdminTaskDetails', {id})
          }
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    tasks: getCompanyTasks(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tasksActions: bindActionCreators(tasksActions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminAllTasksIOS);
