import {
  SIGN_IN,
  FORGOT_PASSWORD,
  SIGN_OUT,
  SIGN_IN_SUCCESS,
  UPDATE_PROFILE_EMPLOYEE,
  UPDATE_PROFILE_EMPLOYEE_SUCCESS,
  SIGN_OUT_SUCCESS,
} from './types';

export const signIn = ({params, onSuccess, onFail}) => ({
  type: SIGN_IN,
  params,
  onSuccess,
  onFail,
});

export const signInSuccess = ({response, access_token, client, uid}) => ({
  type: SIGN_IN_SUCCESS,
  response,
  access_token,
  client,
  uid,
});

export const signOut = ({onSuccess, onFail}) => ({
  type: SIGN_OUT,
  onSuccess,
  onFail,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const forgotPassword = ({email, onSuccess, onFail}) => ({
  type: FORGOT_PASSWORD,
  email,
  onSuccess,
  onFail,
});

export const updateProfileEmployee = ({params, onSuccess, onFail}) => ({
  type: UPDATE_PROFILE_EMPLOYEE,
  params,
  onSuccess,
  onFail,
});

export const updateProfileEmployeeSuccess = ({user}) => ({
  type: UPDATE_PROFILE_EMPLOYEE_SUCCESS,
  user,
});

