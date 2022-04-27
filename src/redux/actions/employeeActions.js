import {
  GET_COMPANY_EMPLOYEES,
  GET_COMPANY_EMPLOYEES_SUCCESS,
  INVITE_EMPLOYEE_TO_COMPANY,
  DELETE_COMPANY_EMPLOYEE,
  DELETE_COMPANY_EMPLOYEES_SUCCESS,
} from './types';

export const getCompanyEmployees = ({params, onSuccess, onFail}) => ({
  type: GET_COMPANY_EMPLOYEES,
  params,
  onSuccess,
  onFail,
});

export const deleteCompanyEmployee = ({params, onSuccess, onFail}) => ({
  type: DELETE_COMPANY_EMPLOYEE,
  params,
  onSuccess,
  onFail,
});

export const deleteCompanyEmployeeSuccess = id => ({
  type: DELETE_COMPANY_EMPLOYEES_SUCCESS,
  id,
});

export const inviteEmployeeToCompany = ({params, onSuccess, onFail}) => ({
  type: INVITE_EMPLOYEE_TO_COMPANY,
  params,
  onSuccess,
  onFail,
});

export const getCompanyEmployeesSuccess = ({employees}) => ({
  type: GET_COMPANY_EMPLOYEES_SUCCESS,
  employees,
});
