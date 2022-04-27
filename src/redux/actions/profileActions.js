import {
  GET_COMPANY_PROFILE,
  GET_COMPANY_PROFILE_SUCCESS,
  UPDATE_COMAPNY_PROFILE,
} from './types';

export const getCompanyProfileData = ({params, onSuccess, onFail}) => ({
  type: GET_COMPANY_PROFILE,
  params,
  onSuccess,
  onFail,
});

export const getCompanyProfileDataSuccess = ({response}) => ({
  type: GET_COMPANY_PROFILE_SUCCESS,
  response,
});

export const updateCompanyProfile = ({params, onSuccess, onFail}) => ({
  type: UPDATE_COMAPNY_PROFILE,
  params,
  onSuccess,
  onFail,
});
