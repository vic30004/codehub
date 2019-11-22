import React, { useReducer } from 'react';
import uuid from 'uuid';
import ProfileContext from './ProfileContext'
import axios from 'axios'
import setAuthToken from '../../../utils/SetAuthToken'
import ProfileReducer from './ProfileReducer'
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
CLEAR_CURRENT,
PROFILE_ERROR,
CLEAR_PROFILE

} from '../types';

const ProfileState = props =>{

    const initialState ={
        profile:null,
        profiles:[],
        repos:[],
        loading:true,
        error:{}
    }


const [state, dispatch] = useReducer(ProfileReducer, initialState);


// Get the current user's profile 

const getCurrentProfile = async() =>{

    try {
        const res = await axios.get('/api/profile/me') 
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
    } catch (err) {
      console.log(err.response)
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
   
}

const clearProfile = ()=>{
  dispatch({
    type:CLEAR_PROFILE
  })
}
return (
    <ProfileContext.Provider
      value={{
        profile:state.profile,
        profiles:state.profiles,
        repos: state.repos,
        loading:state.loading,
        error:state.error,
        getCurrentProfile,
        clearProfile
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;