import {
  signInSuccess,
  signOutSuccess,
  updateProfileEmployeeSuccess,
} from '../actions/authActions';
import {put, call, takeLatest} from 'redux-saga/effects';
import {
  SIGN_IN,
  FORGOT_PASSWORD,
  SIGN_OUT,
  UPDATE_PROFILE_EMPLOYEE,
} from '../actions/types';
import {saveCredentials, clearCredentials} from '../utils/storage';
import {setCredentials} from '../services/api';
import * as authApi from '../services/authApi';

export function* signInSaga(action) {
  try {
    const response = yield call(authApi.signIn, action.params);
    const {headers} = response;
    const access_token = headers['access-token'],
      client = headers.client,
      uid = headers.uid;

    yield put(signInSuccess({response, access_token, client, uid}));

    saveCredentials(response.data.data.type, access_token, client, uid);
    setCredentials(access_token, client, uid);

    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signInSaga);
}

export function* signOutSaga(action) {
  try {
    yield call(authApi.signOut);

    clearCredentials();
    setCredentials(null, null, null);
    yield put(signOutSuccess());
    action.onSuccess && action.onSuccess();
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchSignOut() {
  yield takeLatest(SIGN_OUT, signOutSaga);
}

export function* forgotPasswordSaga(action) {
  try {
    const response = yield call(authApi.forgotPassword, {
      email: action.email,
    });

    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordSaga);
}

export function* updateProfileEmployeeSaga(action) {
  try {
    const response = yield call(authApi.updateProfileEmployee, action.params);
    const user = response.data.data;

    yield put(updateProfileEmployeeSuccess({user: user}));

    action.onSuccess && action.onSuccess(user);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchUpdateProfileEmployee() {
  yield takeLatest(UPDATE_PROFILE_EMPLOYEE, updateProfileEmployeeSaga);
}
