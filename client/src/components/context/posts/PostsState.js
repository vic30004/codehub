import React, { useReducer } from 'react';
import PostsContext from './PostsContext';
import axios from 'axios';
import uuid from 'uuid';
import setAuthToken from '../../../utils/SetAuthToken';
import PostsReducer from './PostsReducer';
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  SET_ALERT,
  REMOVE_ALERT,
  POST_ERROR,
  CREATE_POST,
  DELETE_POST,
  GET_POSTS,
  GET_POST,
  GET_USER_POSTS,
  UPDATE_LIKES
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

  const addComment = async (formData,postId) =>{
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(`/api/posts/comments/${postId}`,formData,config);
      dispatch({
        type:ADD_COMMENT,
        payload: res.data
      });
      setAlert('Comment Added','success')
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }

  // Delete Comment
  const deleteComment = async (postId,commentId) =>{
    try {
      const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
      dispatch({
        type:REMOVE_COMMENT,
        payload: commentId
      });
      setAlert('Comment Removed','success')
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }

    //Delete Posts

    const deletePost = async (id)=>{
      try {
        const res = await axios.delete(`/api/posts/${id}`)
        dispatch({
          type:DELETE_POST,
          payload: id
        })
        setAlert('Post Removed', 'success')
      } catch (err) {
        dispatch({
          type: POST_ERROR,
          payload: { msg: err.response, status: err.response }
        });
      }
    }

    // Add a post 

    const addPost = async (formData)=>{
      const config = {
        headers:{
          'Content-Type':"application/json"
        }
      }
      try {
        const res = await axios.post(`/api/posts`,formData,config);
        dispatch({
          type:CREATE_POST,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: POST_ERROR,
          payload: { msg: err.response, status: err.response }
        });
      }
    }

    // Get Post
    const getPost = async (id)=>{
      try {
        const res = await axios.get(`/api/posts/${id}`)
        dispatch({
          type:GET_POST,
          payload :res.data.data
        })
      } catch (err) {
        dispatch({
          type: POST_ERROR,
          payload: { msg: err.response, status: err.response }
        });
      }
    }

  // Add Likes 

  const addLikes = async (postId)=>{
    try {
      const res = await axios.put(`/api/posts/like/${postId}`)
      dispatch({
        type:UPDATE_LIKES,
        payload:{postId, likes:res.data}
      })
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }
  // Remove Likes 

  const removeLikes = async (postId)=>{
    try {
      const res = await axios.put(`/api/posts/unlike/${postId}`)
      dispatch({
        type:UPDATE_LIKES,
        payload:{postId, likes:res.data}
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
        getUserPosts,
        removeLikes,
        addLikes,
        deletePost,
        addPost,
        getPost,
        addComment,
        deleteComment
      }}
      
    >
    {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;