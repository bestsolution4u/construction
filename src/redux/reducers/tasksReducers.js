import {
  UPDATE_TASK,
  COMPANY_TASK_LIST,
  FETCH_COMPANY_TASKS_SUCCESS,
  COMPANY_TASK_DETAILS,
  COMPANY_TASK_DETAILS_SUCCESS,
  COMPANY_TASK_DELETE_SUCCESS,
} from '../actions/types';
import Immutable from 'seamless-immutable';
import {isUndefined} from 'lodash';

const INITIAL_STATE = Immutable({
  task: {
    title: 'Roof Repair',
    description:
      'Fix and repair roof top, owner will be there. We have Already contacted owner and is expecting you.',
    clientName: 'John Doe',
    phoneNumber: '808-910-1200',
    date: 'Oct. 20, 2019',
    time: '2:00 p.m.',
  },
  tasks: [],
  taskDetails: {},
  meta: {
    loadingTasks: false,
    loadedTasks: false,
  },
});

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TASK:
      return state.merge(
        {
          task: action.task,
        },
        {deep: true},
      );
    case COMPANY_TASK_LIST:
      return state.merge({meta: {loadingTasks: true}}, {deep: true});
    case FETCH_COMPANY_TASKS_SUCCESS:
      if (isUndefined(action.tasks)) {
        return state.merge(
          {meta: {loadingTasks: false, loadedTasks: true}},
          {deep: true},
        );
      } else {
        return state.merge(
          {tasks: action.tasks, meta: {loadingTasks: false, loadedTasks: true}},
          {deep: true},
        );
      }
    case COMPANY_TASK_DETAILS:
      return state.merge({meta: {loadingTasks: true}}, {deep: true});
    case COMPANY_TASK_DETAILS_SUCCESS:
      if (isUndefined(action.taskDetails)) {
        return state.merge(
          {meta: {loadingTasks: false, loadedTasks: true}},
          {deep: true},
        );
      } else {
        return state.merge(
          {
            taskDetails: action.taskDetails,
            meta: {loadingTasks: false, loadedTasks: true},
          },
          {deep: true},
        );
      }
    case COMPANY_TASK_DELETE_SUCCESS:
      return state.update('tasks', tasks => ({tasks: tasks.tasks.without(action.id), employeeDetails: tasks.employeeDetails}));
    default:
      return state;
  }
};

export default tasksReducer;
