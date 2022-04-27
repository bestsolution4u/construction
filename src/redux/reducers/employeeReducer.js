import {
  GET_COMPANY_EMPLOYEES,
  GET_COMPANY_EMPLOYEES_SUCCESS,
  DELETE_COMPANY_EMPLOYEES_SUCCESS,
} from '../actions/types';
import Immutable from 'seamless-immutable';
import {isUndefined} from 'lodash';

const INITIAL_STATE = Immutable({
  employees: [],
  meta: {
    loadingEmployees: false,
    loadedEmployees: false,
  },
});

const employeeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANY_EMPLOYEES:
      return state.merge({meta: {loadingEmployees: true}}, {deep: true});
    case GET_COMPANY_EMPLOYEES_SUCCESS:
      if (isUndefined(action.employees)) {
        return state.merge(
          {meta: {loadingEmployees: false, loadedEmployees: true}},
          {deep: true},
        );
      } else {
        return state.merge(
          {
            employees: Object.values(action.employees),
            meta: {loadingEmployees: false, loadedEmployees: true},
          },
          {deep: true},
        );
      }
    case DELETE_COMPANY_EMPLOYEES_SUCCESS:
      return state.update('employees', employees =>
        employees.filter(item => item.id !== action.id),
      );
    default:
      return state;
  }
};

export default employeeReducer;
