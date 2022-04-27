import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {verticalScale} from '../../Utils/scaling';
import style from './style';
import ImagePicker from 'react-native-image-picker';
import ViewPager from '@react-native-community/viewpager';
import {isEmpty, map} from 'lodash';
import moment from 'moment';

import {getTaskDetails} from '../../redux/selectors/index';
import TaskAddressModal from './modals/taskAddressModal';
import ClientNameModal from './modals/clientNameModal';
import TaskDescriptionModal from './modals/taskDescriptionModal';
import TaskTitleModal from './modals/taskTitleModal';
import PhoneNumberModal from './modals/phoneNumberModal';
import TaskDetails from './taskDetails';
import * as taskActions from '../../redux/actions/tasksActions';
import TaskDateModal from './modals/taskDateModal';
import TaskTimeModal from './modals/taskTimeModal';
import {errorMessage} from '../../Utils/alerts';

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
    quality: 0.2,
  },
};

const AdminCreateNewTask = props => {
  const [employee, setEmployee] = useState(undefined);
  const [data, setData] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalPhone, toggleModalPhone] = useState(false);

  const [taskTitle, setTaskTitle] = useState('');
  const [modalTaskTitle, toggleModalTitle] = useState(false);

  const [TaskDescription, setTaskDescription] = useState('');
  const [modalTaskDescription, toggleModalDescription] = useState(false);

  const [modalClientName, toggleClientNameModal] = useState(false);
  const [taskClientName, setTaskClientName] = useState('');

  const [modalAddress, toggleModalAddress] = useState(false);

  const [modalTime, toggleModalTime] = useState(false);
  const [modalDate, toggleModalDate] = useState(false);

  const [taskAdd, setTaskAddress] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  if (
    props.navigation.state.params &&
    props.navigation.state.params.isEdit &&
    taskTitle !== undefined &&
    isEmpty(taskTitle)
  ) {
    setTaskTitle(props.task.taskDetails.attributes.title);
    setTaskAddress(props.task.taskDetails.attributes.address);
    setTaskDescription(props.task.taskDetails.attributes.description);
    setTaskClientName(props.task.taskDetails.attributes.client_info.name);
    setPhoneNumber(props.task.taskDetails.attributes.client_info.phone);
    setTaskDate(props.task.taskDetails.attributes.date);
    setTaskTime(props.task.taskDetails.attributes.time);
    if (props.task.taskDetails.attributes.images_urls.length > 0) {
      setData(props.task.taskDetails.attributes.images_urls);
    }
    setEmployee(props.task.employeeDetails);
  }

  let page = React.createRef();

  const onSuccess = () => {
    props.fetchCompanyTasksList({
      onFail: error => {
        errorMessage({message: error.errorMessage});
      },
    });
    props.navigation.navigate('AdminAllTasks');
  };

  const onFail = error => {
    errorMessage({message: error.errorMessage});
  };

  const handleTasks = value => {
    const formData = new FormData();
    formData.append('employee_id', employee.id);
    formData.append('phone_number', phoneNumber);
    formData.append('title', taskTitle);
    formData.append('description', TaskDescription);
    formData.append('client_name', taskClientName);
    formData.append('address', taskAdd);
    formData.append('date', taskDate);
    formData.append('time', taskTime);
    if (data.length > 0) {
      map(data, image => {
        formData.append('images[]', {
          uri: image.uri,
          type: 'image/jpeg',
          name: `${moment().unix()}.jpg`,
        });
      });
    }
    let params = formData;
    if (props.navigation.state.params && props.navigation.state.params.isEdit) {
      params = {taskId: props.task.taskDetails.id, formData};
      props.updateTask(params, onSuccess, onFail);
    } else {
      props.createNewTask(params, onSuccess, onFail);
    }
  };

  useEffect(() => {
    page.setPage(data.length - 1);
  }, [data, page]);

  const onPressDeletImage = index => {
    let temp = data.filter((el, i) => i !== index);
    setData(temp);
  };

  const onPressShowModal = modalName => {
    if (modalName === 'modalPhone') {
      toggleModalPhone(true);
      return;
    }
    if (modalName === 'modalTaskTitle') {
      toggleModalTitle(true);
      return;
    }
    if (modalName === 'modalTaskDescription') {
      toggleModalDescription(true);
    }
  };

  const onPressHideModal = modalName => {
    if (modalName === 'modalPhone') {
      toggleModalPhone(false);
      return;
    }
    if (modalName === 'modalTaskTitle') {
      toggleModalTitle(false);
      return;
    }
    if (modalName === 'modalTaskDescription') {
      toggleModalDescription(false);
      return;
    }
  };

  const onPressAddImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // console.log("User cancelled image picker");
      } else if (response.error) {
        // console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        // console.log("User tapped custom button: ", response.customButton);
      } else {
        setData([
          ...data,
          {
            width: response.width,
            height: response.height,
            url: response.uri,
          },
        ]);
      }
    });
  };

  const onAssignTaskEmployee = () => {
    props.navigation.navigate('AdminAssignTask', {
      employee: employee,
      onSelectedEmployee: setEmployee,
    });
  };

  const _renderImages = () => {
    if (data.length >= 1) {
      return data.map((item, index) => (
        <ImageBackground
          key={index}
          source={{uri: item.url}}
          style={[style.header_image_background, {backgroundColor: '#A2A2A2'}]}>
          <View style={style.header_content}>
            <View style={style.header_add_view}>
              <TouchableOpacity
                onPress={onPressAddImage}
                style={style.header_add_button}>
                <Image
                  style={style.header_add_image}
                  source={require('../../assets/images/np_image_add.png')}
                />
                <Text>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={style.header_delete_view}>
              {data.length >= 1 && (
                <TouchableOpacity
                  onPress={() => onPressDeletImage(index)}
                  style={style.header_delete_button}>
                  <Text style={{color: '#FFFFFF', fontSize: verticalScale(16)}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ImageBackground>
      ));
    }
    return (
      <ImageBackground
        key={1}
        style={[style.header_image_background, {backgroundColor: '#A2A2A2'}]}>
        <View style={style.header_content}>
          <View style={style.header_add_view}>
            <TouchableOpacity
              onPress={onPressAddImage}
              style={style.header_add_button}>
              <Image
                style={style.header_add_image}
                source={require('../../assets/images/np_image_add.png')}
              />
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={style.header_delete_view}>
            {data.length >= 1 && (
              <TouchableOpacity
                onPress={onPressDeletImage}
                style={style.header_delete_button}>
                <Text style={{color: '#FFFFFF', fontSize: verticalScale(16)}}>
                  Delete
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={style.container}>
      <ScrollView>
        <ViewPager
          ref={pages => (page = pages)}
          style={style.header_image_background}>
          {_renderImages()}
        </ViewPager>
        <TaskDetails
          navigation={props.navigation}
          taskTitle={taskTitle}
          onPressShowModal={onPressShowModal}
          TaskDescription={TaskDescription}
          taskAdd={taskAdd}
          toggleModalAddress={toggleModalAddress}
          taskClientName={taskClientName}
          toggleClientNameModal={toggleClientNameModal}
          phoneNumber={phoneNumber}
          toggleModalDate={toggleModalDate}
          toggleModalTime={toggleModalTime}
          handleTasks={values => handleTasks(values)}
          taskDate={taskDate}
          taskTime={taskTime}
          employee={employee}
          onPressAssignTask={onAssignTaskEmployee}
          isEdit={
            props.navigation.state.params
              ? props.navigation.state.params.isEdit
              : false
          }
        />
      </ScrollView>
      {/* Modal for keyboard phone number */}
      <PhoneNumberModal
        onPressHideModal={onPressHideModal}
        toggleModalPhone={toggleModalPhone}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        modalPhone={modalPhone}
      />
      {/* modal task title */}
      <TaskTitleModal
        modalTaskTitle={modalTaskTitle}
        onPressHideModal={onPressHideModal}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
      />
      {/* modal for task description       */}
      <TaskDescriptionModal
        modalTaskDescription={modalTaskDescription}
        setTaskDescription={setTaskDescription}
        toggleModalDescription={toggleModalDescription}
        TaskDescription={TaskDescription}
      />
      {/* Client name modal  */}
      <ClientNameModal
        modalClientName={modalClientName}
        toggleClientNameModal={toggleClientNameModal}
        taskClientName={taskClientName}
        setTaskClientName={setTaskClientName}
      />
      {/* Address modal  */}
      <TaskAddressModal
        modalAddress={modalAddress}
        toggleModalAddress={toggleModalAddress}
        taskAdd={taskAdd}
        setTaskAddress={setTaskAddress}
      />
      {/* Date modal  */}
      <TaskDateModal
        modalDate={modalDate}
        toggleModalDate={toggleModalDate}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
      />
      {/* Time modal  */}
      <TaskTimeModal
        modalTime={modalTime}
        toggleModalTime={toggleModalTime}
        taskTime={taskTime}
        setTaskTime={setTaskTime}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    task: getTaskDetails(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewTask: (params, onSuccess, onFail) =>
      dispatch(taskActions.createNewTask({params, onSuccess, onFail})),
    updateTask: (params, onSuccess, onFail) =>
      dispatch(taskActions.updateTask({params, onSuccess, onFail})),
    fetchCompanyTasksList: (params = {}, onSuccess = () => {}, onFail) =>
      dispatch(taskActions.fetchCompanyTasksList({params, onSuccess, onFail})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreateNewTask);
