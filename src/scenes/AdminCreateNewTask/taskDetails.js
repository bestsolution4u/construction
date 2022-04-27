import React from 'react';
import {View, Text} from 'react-native';
import {verticalScale} from '../../Utils/scaling';
import {Button} from 'native-base';
import TaskInput from '../../Components/Common/TaskInput';
import style from './style';
import {formatPhoneNumber} from '../../Utils/formatter';
import moment from 'moment';
import {Formik} from 'formik';
import {validationSchemaCreateTask} from '../../Utils/validation';

const TaskDetails = props => (
  <Formik
    enableReinitialize
    initialValues={{
      title: props.taskTitle,
      description: props.TaskDescription,
      address: props.taskAdd,
      phone: props.phoneNumber,
      name: props.taskClientName,
      date: props.taskDate
        ? moment(props.taskDate).format('DD/MM/YYYY')
        : undefined,
      time: props.taskTime
        ? moment.utc(props.taskTime).format('hh:mm A')
        : undefined,
      employee: props.employee !== undefined ? props.employee.attributes.email : '',
    }}
    onSubmit={values => props.handleTasks(values)}
    validationSchema={validationSchemaCreateTask}>
    {({values, errors, touched, handleSubmit}) => (
      <View style={style.main_content}>
        <TaskInput
          required={true}
          value={values.title}
          placeholder={'Write your task title…'}
          maxLength={50}
          actualCharacters={values.title.length}
          maxCharacters={50}
          onPress={() => {
            props.onPressShowModal('modalTaskTitle');
          }}
        />
        {touched.title && errors.title && (
          <Text style={style.validation_error}>{errors.title}</Text>
        )}
        <TaskInput
          required={true}
          value={values.description}
          placeholder={'Write a description…'}
          maxLength={300}
          multiline={true}
          actualCharacters={values.description.length}
          maxCharacters={300}
          onPress={() => {
            props.onPressShowModal('modalTaskDescription');
          }}
        />
        {touched.description && errors.description && (
          <Text style={style.validation_error}>{errors.description}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Address'}
          value={values.address}
          onPress={() => {
            props.toggleModalAddress(true);
          }}
        />
        {touched.address && errors.address && (
          <Text style={style.validation_error}>{errors.address}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Phone Number'}
          onPress={() => {
            props.onPressShowModal('modalPhone');
          }}
          value={formatPhoneNumber(values.phone)}
        />
        {touched.phone && errors.phone && (
          <Text style={style.validation_error}>{errors.phone}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Client Name'}
          value={values.name}
          onPress={() => {
            props.toggleClientNameModal(true);
          }}
        />
        {touched.name && errors.name && (
          <Text style={style.validation_error}>{errors.name}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Date'}
          onPress={() => {
            props.toggleModalDate(true);
          }}
          value={values.date}
        />
        {touched.date && errors.date && (
          <Text style={style.validation_error}>{errors.date}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Time'}
          onPress={() => {
            props.toggleModalTime(true);
          }}
          value={values.time}
        />
        {touched.time && errors.time && (
          <Text style={style.validation_error}>{errors.time}</Text>
        )}
        <TaskInput
          required={true}
          placeholder={'Assign Task'}
          onPress={() => {
            props.onPressAssignTask();
          }}
          value={values.employee}
        />
        {touched.employee && errors.employee && (
          <Text style={style.validation_error}>{errors.employee}</Text>
        )}
        <Button onPress={handleSubmit} style={style.create_task_button}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: verticalScale(16),
              fontWeight: 'bold',
            }}>
            {props.isEdit ? 'Update' : 'Create'} Task
          </Text>
        </Button>
      </View>
    )}
  </Formik>
);

export default TaskDetails;
