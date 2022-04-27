import {api} from './api';
import {BASE_API_AUTH_URL} from './config';

export const signIn = params => {
  return api.post(`${BASE_API_AUTH_URL}/users/sign_in`, params);
};

export const signOut = () => {
  return api.delete(`${BASE_API_AUTH_URL}/users/sign_out`);
};

export const forgotPassword = params => {
  return api.post(`${BASE_API_AUTH_URL}/users/password`, {
    email: params.email,
    redirect_url: '/password/edit',
  });
};

export const updateProfileEmployee = params => {
  return api.patch(`${BASE_API_AUTH_URL}/users`, params);
};
