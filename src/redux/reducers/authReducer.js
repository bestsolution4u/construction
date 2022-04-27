import {
  SIGN_IN_SUCCESS,
  FORGET_PASSWORD,
  SIGN_OUT_SUCCESS,
  UPDATE_PROFILE_EMPLOYEE_SUCCESS,
} from '../actions/types';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  me: {},
  access_token: null,
  client: null,
  uid: null,
});

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.merge(
        {
          me: action.response ? action.response.data.data : null,
          access_token: action.access_token,
          client: action.client,
          uid: action.uid,
        },
        {deep: true},
      );

    case FORGET_PASSWORD:
      return state.merge({}, {deep: true});

    case SIGN_OUT_SUCCESS:
      return INITIAL_STATE;

    case UPDATE_PROFILE_EMPLOYEE_SUCCESS:
      return state.merge(
        {
          me: action.user,
        },
        {deep: true},
      );

    default:
      return state;
  }
};

export default authReducer;
