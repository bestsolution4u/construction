import {GET_COMPANY_PROFILE_SUCCESS} from '../actions/types';
import SeamlessImmutable from 'seamless-immutable';

const INITIAL_STATE = SeamlessImmutable({
  companyProfile: {},
});

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COMPANY_PROFILE_SUCCESS:
      return state.merge(
        {
          companyProfile: action.response ? action.response.data.data : null,
        },
        {deep: true},
      );

    default:
      return state;
  }
};

export default profileReducer;
