import {createSelector} from 'reselect';
import {map} from 'lodash';
import Immutable from 'seamless-immutable';

export const getTaskDetail = state => state.tasks.task;
export const getTaskDetails = state => state.tasks.taskDetails;

export const allCompanyTasks = state => state.tasks;
export const allCompanyTaskDetails = state => state.tasks.taskDetails;
export const allCompanyEmployees = state => state.employees;

const parseCompanyTasksData = tasks => {
  return map(tasks.tasks, (tasksData, id) => {
    let data = Immutable.asMutable(tasksData.attributes, {deep: true});
    let employeeData = Immutable.asMutable(tasks.employeeDetails.attributes, {
      deep: true,
    });
    data['id'] = id;
    data['employeeData'] = employeeData;
    return data;
  });
};

const parseCompanyTaskDetailsData = tasks => {
  if (!tasks.taskDetails) {
    return {};
  }

  let taskData = Immutable.asMutable(tasks.taskDetails.attributes, {
    deep: true,
  });

  let employeeData = Immutable.asMutable(tasks.employeeDetails.attributes, {
    deep: true,
  });
  let data = {taskData: taskData, employeeData: employeeData};
  return data;
};

const parseCompanyEmployeesData = employees => {
  return map(employees, employeesData => {
    let data = Immutable.asMutable(employeesData.attributes, {deep: true});
    data['id'] = employeesData.id;
    data['pressed'] = false;
    return data;
  });
};

export const getCompanyTasks = createSelector(allCompanyTasks, tasks => {
  return parseCompanyTasksData(tasks.tasks);
});

export const getCompanyTaskDetails = createSelector(
  allCompanyTaskDetails,
  taskDetails => {
    return parseCompanyTaskDetailsData(taskDetails);
  },
);

export const getCompanyEmployees = createSelector(
  allCompanyEmployees,
  employees => {
    return parseCompanyEmployeesData(employees.employees);
  },
);

export const getCompanyProfile = state => state.profile.companyProfile;
