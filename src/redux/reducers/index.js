import {combineReducers} from 'redux';
import tasksReducers from './tasksReducers';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import employeeReducer from './employeeReducer';

const allReducers = combineReducers({
  tasks: tasksReducers,
  auth: authReducer,
  profile: profileReducer,
  employees: employeeReducer,
});

export default allReducers;
