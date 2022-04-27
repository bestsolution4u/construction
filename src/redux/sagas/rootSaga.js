import {all} from 'redux-saga/effects';
import {
  watchSignIn,
  watchSignOut,
  watchForgotPassword,
  watchUpdateProfileEmployee,
} from './authSaga';
import {
  watchUpdateTask,
  watchCreateNewAdminTask,
  watchEmployeeCompletedTasks,
  watchEmployeeTaskList,
  watchEmployeeTaskProcess,
  watchCompanyTaskList,
  watchCompanyTaskDetails,
  watchEmployeeTaskComplete,
  watchCompanyTaskDelete,
} from './tasksSaga';
import {
  watchGetCompanyProfileData,
  watchUpdateCompanyProfile,
} from './profileSaga';
import {
  watchGetCompanyEmployees,
  watchInviteEmployeeToCompany,
  watchDeleteCompanyEmployee,
} from './employeeSaga';

export default function* rootSaga() {
  yield all([
    watchSignIn(),
    watchSignOut(),
    watchUpdateTask(),
    watchForgotPassword(),
    watchCreateNewAdminTask(),
    watchUpdateProfileEmployee(),
    watchEmployeeCompletedTasks(),
    watchGetCompanyProfileData(),
    watchUpdateCompanyProfile(),
    watchEmployeeTaskList(),
    watchEmployeeTaskProcess(),
    watchEmployeeTaskComplete(),
    watchCompanyTaskList(),
    watchGetCompanyEmployees(),
    watchCompanyTaskDetails(),
    watchInviteEmployeeToCompany(),
    watchDeleteCompanyEmployee(),
    watchCompanyTaskDelete(),
  ]);
}
