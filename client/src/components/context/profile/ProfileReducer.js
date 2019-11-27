import {
  GET_PROFILES,
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  ADD_EDU,
  ADD_EXP,
  DELETE,
  SET_CURRENT,
  SET_ALERT,
  REMOVE_ALERT,
  CLEAR_CURRENT,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_GITHUB
} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
      case GET_PROFILES:
        return {
          ...state,
          profiles:payload,
          loading: false
        }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload
      };

    case SET_ALERT:
      return {
        ...state,
        errorState: payload
      };
    case ADD_EDU:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case ADD_EXP:
      return {
        ...state,
        profile: payload,
        loading: false
      };
      case GET_GITHUB:
        return {
          ...state,
          repo: payload,
          loading:false
        }

    default:
      return state;
  }
};
