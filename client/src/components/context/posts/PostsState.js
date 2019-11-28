import React, { useReducer } from 'react';
import PostsContext from './PostsContext';
import axios from 'axios';
import uuid from 'uuid';
import setAuthToken from '../../../utils/SetAuthToken';
import PostsReducer from './PostsReducer';
import {
  ADD_COMMENT,
  SET_ALERT,
  REMOVE_ALERT,
  POST_ERROR,
  CREATE_POST,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST,
  GET_USER_POSTS
} from '../types';
import ProfileContext from '../profile/ProfileContext';

const PostsState = props => {
  const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {},
    errorState: []
  };

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  // Get posts

  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({
        type: GET_POSTS,
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  };

  // Get Users Posts

  const getUserPosts = async (id)=>{
    try {
      const res = await axios.get(`/api/posts?user=${id}`)
      dispatch({
        type:GET_USER_POSTS,
        payload: res.data.data
      })
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }



  const setAlert = (msg, alertType) => {
    const id = uuid.v4();
    return dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id }
    });
  };




  // REMOVE ALERT
  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        errorState: state.errorState,
        loading: state.loading,
        error: state.error,
        setAlert,
        removeAlert,
        getPosts,
        getUserPosts
      }}
      
    >
    {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
