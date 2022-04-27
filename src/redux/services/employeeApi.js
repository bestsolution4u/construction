import {api} from './api';

export const getCompanyEmployees = () => {
  return api.get(`/company/employees`);
};

export const inviteEmployeeToCompany = params => {
  return api.post(`/company/employees?email=${params.email}`);
};

export const deleteEmployeeFromCompany = params => {
  return api.delete(`/company/employees/${params.id}`);
};
