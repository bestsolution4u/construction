import axios from 'axios';
import {get, isEmpty} from 'lodash';
import {loadCredentials, saveCredentials} from '../utils/storage';
import {BASE_API_URL} from './config';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(request => {
  console.log('[API Request]', request);

  return request;
});

api.interceptors.response.use(
  response => {
    console.log('[API Response]', response);

    const {headers} = response;
    const access_token = headers['access-token'],
      client = headers['client'],
      uid = headers['uid'],
      type = response.data.data ? response.data.data.type : '';

    if (type && access_token && client && uid) {
      loadCredentials().then(credentials => {
        if (!isEmpty(credentials)) {
          saveCredentials(type, access_token, client, uid);
          setCredentials(access_token, client, uid);
        }
      });
    }

    return response;
  },
  error => {
    console.log('[API ERROR]', error);
    console.log('[API Response]', error.response);

    const errorMessage = get(
      error,
      'response.data.error',
      get(error, 'response.data.errors.0', error.message || 'Unknown error'),
    );
    console.log('Error Message: ', errorMessage);
    error.errorMessage = get(errorMessage, 'detail', errorMessage);

    return Promise.reject(error);
  },
);

export function setCredentials(access_token, client, uid) {
  api.defaults.headers.common['token-type'] = 'Bearer';
  api.defaults.headers.common['access-token'] = access_token;
  api.defaults.headers.common['client'] = client;
  api.defaults.headers.common['uid'] = uid;
}

export function setContentType(type) {
  api.defaults.headers.post['Content-Type'] = type;
}
