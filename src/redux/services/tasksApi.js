import {api} from './api';
import {BASE_API_URL} from './config';

export const createNewTaskAdmin = params => {
  return api.post(`${BASE_API_URL}/company/tasks`, params);
};

export const updateTaskAdmin = params => {
  return api.patch(`${BASE_API_URL}/company/tasks/${params.taskId}`, params.formData);
};

export const employeeCompletedTasks = () => {
  return api.get(`/employee/tasks/completed`);
};

export const employeeTaskList = params => {
  return api.get(
    `/employee/tasks?lat=${params.latitude}&lng=${params.longitude}&date=${params.date}`,
  );
};

export const companyTaskList = () => {
  return api.get('/company/tasks');
};

export const companyTaskDetails = params => {
  return api.get(`/company/tasks/${params}`);
};

export const employeeTaskProcess = params => {
  return api.post(
    `${BASE_API_URL}/employee/tasks/${params.id}/${params.status}${
      params.addition ? params.addition : ''
    }`,
  );
};

export const employeeTaskComplete = params => {
  return api.post(
    `${BASE_API_URL}/employee/tasks/${params.id}/complete`,
    params.data,
  );
};

export const companyTaskDelete = id => {
  return api.delete(`${BASE_API_URL}/company/tasks/${id}`);
};
