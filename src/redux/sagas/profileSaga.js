import {getCompanyProfileDataSuccess} from '../actions/profileActions';
import {put, call, takeLatest} from 'redux-saga/effects';
import {GET_COMPANY_PROFILE, UPDATE_COMAPNY_PROFILE} from '../actions/types';
import * as profileApi from '../services/profileApi';

export function* getCompanyProfileDataSaga(action) {
  try {
    const response = yield call(profileApi.getProfile, action.params);
    yield put(getCompanyProfileDataSuccess({response}));
    action.onSuccess && action.onSuccess(response.data);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchGetCompanyProfileData() {
  yield takeLatest(GET_COMPANY_PROFILE, getCompanyProfileDataSaga);
}

export function* updateCompanyProfileSaga(action) {
  try {
    const response = yield call(profileApi.updateProfile, action.params);
    action.onSuccess && action.onSuccess(response);
  } catch (error) {
    action.onFail && action.onFail(error);
  }
}

export function* watchUpdateCompanyProfile() {
  yield takeLatest(UPDATE_COMAPNY_PROFILE, updateCompanyProfileSaga);
}
