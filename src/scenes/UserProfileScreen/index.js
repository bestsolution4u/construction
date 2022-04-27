import {verticalScale, scale} from '../../Utils/scaling';
import styles from './style';
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import UserProfile from './profileScreen';
import CompletedTasks from './completedTasks';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as taskActions from '../../redux/actions/tasksActions';
import {errorMessage} from '../../Utils/alerts';

const UserProfileScreen = props => {
  const [tasks, editTask] = useState([]);

  useEffect(() => {
    props.taskActions.employeeCompletedTasks({
      onSuccess: response => {
        editTask(response.data.data);
      },
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <UserProfile navigation={props.navigation} />
      <Text style={styles.completedText}>Completed Tasks</Text>
      <FlatList
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        data={[...tasks].reverse()}
        renderItem={({task, index}) => (
          <CompletedTasks
            key={index}
            navigation={props.navigation}
            title={task.title}
            description={task.description}
            date={task.date}
            time={task.time}
            address={task.address}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);
