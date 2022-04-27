import {
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  CREATE_NEW_TASK_ADMIN,
  EMPLOYEE_COMPLETED_TASKS,
  EMPLOYEE_TASK_LIST,
  EMPLOYEE_TASK_PROCESS,
  EMPLOYEE_TASK_COMPLETE,
  FETCH_COMPANY_TASKS_SUCCESS,
  COMPANY_TASK_LIST,
  COMPANY_TASK_DETAILS,
  COMPANY_TASK_DETAILS_SUCCESS,
  COMPANY_TASK_DELETE,
  COMPANY_TASK_DELETE_SUCCESS,
} from './types';

export const updateTask = ({params, onSuccess, onFail}) => ({
  type: UPDATE_TASK,
  params,
  onSuccess,
  onFail,
});

export const updateTaskSuccess = ({response}) => ({
  type: UPDATE_TASK_SUCCESS,
  response,
});

export const updateTaskFail = ({error}) => ({
  type: UPDATE_TASK_FAIL,
  error,
});

export const createNewTask = ({params, onSuccess, onFail}) => ({
  type: CREATE_NEW_TASK_ADMIN,
  params,
  onSuccess,
  onFail,
});

export const employeeCompletedTasks = ({onSuccess, onFail}) => ({
  type: EMPLOYEE_COMPLETED_TASKS,
  onSuccess,
  onFail,
});

export const employeeTaskList = ({params, onSuccess, onFail}) => ({
  type: EMPLOYEE_TASK_LIST,
  params,
  onSuccess,
  onFail,
});

export const employeeTaskProcess = ({params, onSuccess, onFail}) => ({
  type: EMPLOYEE_TASK_PROCESS,
  params,
  onSuccess,
  onFail,
});

export const employeeTaskComplete = ({params, onSuccess, onFail}) => ({
  type: EMPLOYEE_TASK_COMPLETE,
  params,
  onSuccess,
  onFail,
});

export const fetchCompanyTasksSuccess = ({tasks}) => ({
  type: FETCH_COMPANY_TASKS_SUCCESS,
  tasks,
});

export const fetchCompanyTasksList = ({params, onSuccess, onFail}) => ({
  type: COMPANY_TASK_LIST,
  params,
  onSuccess,
  onFail,
});

export const fetchCompanyTaskDetails = ({params, onSuccess, onFail}) => ({
  type: COMPANY_TASK_DETAILS,
  params,
  onSuccess,
  onFail,
});

export const companyTaskDetailsSuccess = ({taskDetails}) => ({
  type: COMPANY_TASK_DETAILS_SUCCESS,
  taskDetails,
});

export const companyTaskDelete = ({id, onSuccess, onFail}) => ({
  type: COMPANY_TASK_DELETE,
  id,
  onSuccess,
  onFail,
});

export const companyTaskDeleteSuccess = ({id}) => ({
  type: COMPANY_TASK_DELETE_SUCCESS,
  id,
});
