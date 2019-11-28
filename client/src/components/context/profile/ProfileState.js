import React, { useReducer } from 'react';
import uuid from 'uuid';
import ProfileContext from './ProfileContext';
import axios from 'axios';
import setAuthToken from '../../../utils/SetAuthToken';
import ProfileReducer from './ProfileReducer';
import {
  GET_PROFILES,
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  ADD_EDU,
  ADD_EXP,
  DELETE,
  SET_ALERT,
  REMOVE_ALERT,
  SET_CURRENT,
  GET_GITHUB,
  CLEAR_CURRENT,
  PROFILE_ERROR,
  CLEAR_PROFILE
} from '../types';

const ProfileState = props => {
  const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  // Get the current user's profile

  const getCurrentProfile = async () => {
    try {
      const res = await axios.get('/api/profile/me');
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  };


  // Get All Profiles
  const getProfiles = async()=>{
    dispatch({type:CLEAR_PROFILE});

    try {
      const res= await axios.get('/api/profile')

      dispatch({
        type: GET_PROFILES,
        payload:res.data.data
      })

    } catch (err) {
      dispatch({
        type:PROFILE_ERROR,
        payload: {msg:err.response}
      })
    }
  }

// Get profile by id
const getProfileById = async (userId) =>{
  try {
    const res = await axios.get(`/api/profile?_id=${userId}`)
    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response, status: err.response }
    });
  }
}


  // Create Profile

  const createProfile = async ({
    website,
    location,
    status,
    skills,
    bio,
    company,
    githubusername,
    experience,
    twitter,
    facebook,
    youtube,
    instagram
  }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      website,
      location,
      status,
      skills,
      company,
      bio,
      githubusername,
      experience,
      twitter,
      facebook,
      youtube,
      instagram
    });

    try {
      const res = await axios.post('/api/profile', body, config);
      dispatch({
        type: CREATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  const clearProfile = () => {
    dispatch({
      type: CLEAR_PROFILE
    });
  };

  // Add Education
  const addEdu = async ({
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description
  }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      school,
      degree,
      fieldofstudy,
      from,
      to,
      description
    });
    try {
      const res = axios.put('/api/profile/education', body, config);
      dispatch({
        type: ADD_EDU,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  // Add exp
  const addExp = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = axios.put('/api/profile/experience', formData, config);
      dispatch({
        type: ADD_EXP,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  };

  // Delete Experience
  const deleteExp = async id => {
    try {
      const res = await axios.delete(`/api/profile/experience/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  };
  // Delete Education
  const deleteEdu = async id => {
    try {
      const res = await axios.delete(`/api/profile/education/${id}`);
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  };
  
  // Github repo 
  const getGithub = async(username)=>{
 

    try {
      const res = await axios.get(`/api/profile/github/${username}`)
      dispatch({
        type:GET_GITHUB,
        payload:res.data
      })
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response }
      });
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        profile: state.profile,
        profiles: state.profiles,
        repos: state.repos,
        loading: state.loading,
        error: state.error,
        getCurrentProfile,
        clearProfile,
        createProfile,
        addEdu,
        addExp,
        deleteEdu,
        deleteExp,
        getGithub,
        getProfiles,
        getProfileById
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};


export default ProfileState;
