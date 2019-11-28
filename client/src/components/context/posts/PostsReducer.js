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
  GET_USER_POSTS,
  UPDATE_LIKES

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
        errorState: payload,
        loading: false
      };
    case GET_USER_POSTS: 
      return{
        ...state,
        posts:payload,
        loading:false
      }
    
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post=>post._id !== payload),
        loading:false
      
      }

      case CREATE_POST:
        return {
          ...state,
          posts: [payload,...state.posts ],
          loading:false
        }

    case UPDATE_LIKES:
      return {
        ...state,
        posts:state.posts.map(post => post._id === payload._id ? {...post, likes:payload.likes}:post),
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
