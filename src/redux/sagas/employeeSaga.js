import {
  getCompanyEmployeesSuccess,
  deleteCompanyEmployeeSuccess,
} from '../actions/employeeActions';
import {put, call, takeLatest} from 'redux-saga/effects';
import {
  GET_COMPANY_EMPLOYEES,
  INVITE_EMPLOYEE_TO_COMPANY,
  DELETE_COMPANY_EMPLOYEE,
} from '../actions/types';
import * as employeeApi from '../services/employeeApi';
import normalize from 'json-api-normalizer';

export function* getCompanyEmployeesSaga(action) {
  try {
    const response = yield call(employeeApi.getCompanyEmployees);
    const employees = normalize(response.data).employees;
    yield put(getCompanyEmployeesSuccess({employees}));
    action.onSuccess && action.onSuccess(response.data.data);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchGetCompanyEmployees() {
  yield takeLatest(GET_COMPANY_EMPLOYEES, getCompanyEmployeesSaga);
}

export function* deleteCompanyEmployeeSaga(action) {
  try {
    yield call(employeeApi.deleteEmployeeFromCompany, action.params);
    yield put(deleteCompanyEmployeeSuccess(action.params.id));
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchDeleteCompanyEmployee() {
  yield takeLatest(DELETE_COMPANY_EMPLOYEE, deleteCompanyEmployeeSaga);
}

export function* inviteEmployeeToCompanySaga(action) {
  try {
    const response = yield call(
      employeeApi.inviteEmployeeToCompany,
      action.params,
    );
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchInviteEmployeeToCompany() {
  yield takeLatest(INVITE_EMPLOYEE_TO_COMPANY, inviteEmployeeToCompanySaga);
}
