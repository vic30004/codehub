import {
  CREATE_PROFILE,
  DELETE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_PROFILE,
  ADD_EDU,
  ADD_EXP,
  GET_PROFILE,
  GET_PROFILES,
  AUTH_ERROR,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        errorState:payload
      };
    case REMOVE_ALERT:
      return {
          ...state,
          errorState:[]
      };

    default:
      return state;
  }
};
