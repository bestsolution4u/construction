import {put, call, takeLatest} from 'redux-saga/effects';
import {
  UPDATE_TASK,
  CREATE_NEW_TASK_ADMIN,
  EMPLOYEE_COMPLETED_TASKS,
  TASK_DETAILS,
  EMPLOYEE_TASK_LIST,
  EMPLOYEE_TASK_PROCESS,
  COMPANY_TASK_LIST,
  COMPANY_TASK_DETAILS,
  EMPLOYEE_TASK_COMPLETE,
  COMPANY_TASK_DELETE,
} from '../actions/types';
import {
  updateTaskSuccess,
  updateTaskFail,
  fetchCompanyTasksSuccess,
  companyTaskDetailsSuccess,
  companyTaskDeleteSuccess,
} from '../actions/tasksActions';
import * as tasksApi from '../services/tasksApi';
import {setContentType} from '../services/api';
import normalize from 'json-api-normalizer';

export function* updateTaskSaga(action) {
  try {
    const response = yield call(tasksApi.updateTaskAdmin, action.params);
    yield put(updateTaskSuccess({response}));

    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    yield put(updateTaskFail({error}));
    action.onFail && action.onFail(error);
  }
}

export function* watchUpdateTask() {
  yield takeLatest(UPDATE_TASK, updateTaskSaga);
}

export function* createNewAdminTaskSaga(action) {
  try {
    const response = yield call(tasksApi.createNewTaskAdmin, action.params);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchCreateNewAdminTask() {
  yield takeLatest(CREATE_NEW_TASK_ADMIN, createNewAdminTaskSaga);
}

export function* _taskDetails(action) {
  try {
    const response = yield call(tasksApi.taskDetails, action.id);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchTaskDetails() {
  yield takeLatest(TASK_DETAILS, _taskDetails);
}

export function* companyTaskDetails(action) {
  try {
    const response = yield call(tasksApi.companyTaskDetails, action.params);
    let taskDetails = response.data.data;
    const employeeDetails = response.data.included.find(
      item => item.type === 'employees',
    );
    taskDetails = {taskDetails: taskDetails, employeeDetails: employeeDetails};
    yield put(companyTaskDetailsSuccess({taskDetails}));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchCompanyTaskDetails() {
  yield takeLatest(COMPANY_TASK_DETAILS, companyTaskDetails);
}

export function* employeeCompletedTasks(action) {
  try {
    const response = yield call(tasksApi.employeeCompletedTasks);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchEmployeeCompletedTasks() {
  yield takeLatest(EMPLOYEE_COMPLETED_TASKS, employeeCompletedTasks);
}

export function* employeeTaskList(action) {
  try {
    const response = yield call(tasksApi.employeeTaskList, action.params);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchEmployeeTaskList() {
  yield takeLatest(EMPLOYEE_TASK_LIST, employeeTaskList);
}

export function* companyTaskList(action) {
  try {
    const response = yield call(tasksApi.companyTaskList);
    let tasks = normalize(response.data).tasks;
    const employeeDetails = response.data.included.find(
      item => item.type === 'employees',
    );
    tasks = {tasks: tasks, employeeDetails: employeeDetails};
    yield put(fetchCompanyTasksSuccess({tasks}));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchCompanyTaskList() {
  yield takeLatest(COMPANY_TASK_LIST, companyTaskList);
}

export function* employeeTaskProcess(action) {
  try {
    const response = yield call(tasksApi.employeeTaskProcess, action.params);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchEmployeeTaskProcess() {
  yield takeLatest(EMPLOYEE_TASK_PROCESS, employeeTaskProcess);
}

export function* employeeTaskComplete(action) {
  try {
    setContentType(
      'multipart/form-data; boundary=--------------------------391620374543902864404403',
    );
    const response = yield call(tasksApi.employeeTaskComplete, action.params);
    setContentType('application/json');
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    setContentType('application/json');
  }
}

export function* companyTaskDelete(action) {
  try {
    const id = action.id;
    yield call(tasksApi.companyTaskDelete, id);
    yield put(companyTaskDeleteSuccess({id}));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchEmployeeTaskComplete() {
  yield takeLatest(EMPLOYEE_TASK_COMPLETE, employeeTaskComplete);
}
export function* watchCompanyTaskDelete() {
  yield takeLatest(COMPANY_TASK_DELETE, companyTaskDelete);
}
