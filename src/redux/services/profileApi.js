import {api} from './api';
import {BASE_API_AUTH_URL} from './config';

export const getProfile = params => {
  return api.get(`${BASE_API_AUTH_URL}/users`, params);
};

export const updateProfile = params => {
  return api.patch(`${BASE_API_AUTH_URL}/users`, params);
};
