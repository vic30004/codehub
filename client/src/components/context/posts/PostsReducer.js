import {
  ADD_COMMENT,
  POST_ERROR,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST,
  REMOVE_ALERT,
  SET_ALERT,
  GET_USER_POSTS

} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_USER_POSTS: 
      return{
        ...state,
        posts:payload,
        loading:false
      }

    case SET_ALERT:
      return {
        ...state,
        errorState: payload
      };
  
    case REMOVE_ALERT:
      return {
        ...state,
        errorState: []
      };

    default:
      return state;
  }
};
