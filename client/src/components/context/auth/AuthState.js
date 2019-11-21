import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
import axios from 'axios'
import setAuthToken from '../../../utils/SetAuthToken'
import AuthReducer from './AuthReducers';
import {
  REGISTER_USER,
  REGISTER_FAIL,  
  SET_ALERT,
  REMOVE_ALERT,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

const AuthState = props => {
  const initialState = {
    profiles: [],
    errorState: [],
    auth:null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading:true,
    user:null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);


  // Load user

  const loadUser = async()=>{
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }

    try{
      const res = await axios.get('/api/auth');

      dispatch({
        type:USER_LOADED,
        payload:res.data
      })
    }catch(err){
      dispatch({
        type:AUTH_ERROR
      })
    }

  }


  //REGISTER USER,
  const registerUser = async({name,email,username,password})=>{
        const config = {
            headers:{
                
                'Content-Type':'application/json'
        }    

    }

    const body =JSON.stringify({name,email,username,password})

    try{
        const res= await axios.post('/api/users/register',body,config);

        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
    }catch(err){
    const errors = err.response.data.error;
        loadUser()
    if(errors){
       setAlert(errors,'danger')
       setTimeout(()=>{
           removeAlert()
       },5000)
    }
        dispatch({
            type:REGISTER_FAIL
        })
    }

  }

  // Login User

  const login = async({username,password})=>{
    const config = {
        headers:{
            
            'Content-Type':'application/json'
    }    

}

const body =JSON.stringify({username,password})

try{
    const res= await axios.post('/api/auth/login',body,config);

    dispatch({
        type:LOGIN_SUCCESS,
        payload:res.data
    })
    loadUser();
}catch(err){
const errors = err.response.data.error;

if(errors){
   setAlert(errors,'danger')
   setTimeout(()=>{
       removeAlert()
   },5000)
}
    dispatch({
        type:LOGIN_FAIL,
        payload: err.response.data.error
    })
}

}

  // Logout
  const logout = ()=>{
    dispatch({
      type:LOGOUT
    })
  }

  // REGISTER_FAIL

  // REGISTER_FAIL

  // ADD EDU

  // ADD EXP

  // SET STATE

  // CLEAR STATE

  // DELETE PROGILE

  // SET ALERT

  const setAlert = (msg,alertType) =>{
    const id =uuid.v4();
    return dispatch({
        type:SET_ALERT,
        payload: {msg,alertType,id}
    })
  }

  // REMOVE ALERT
const removeAlert = () =>dispatch({ type:REMOVE_ALERT})
       
   
    

  return (
    <AuthContext.Provider
      value={{
        profiles: state.profiles,
        errorState:state.errorState,
        setAlert,
        removeAlert,
        registerUser,
        loadUser,
        login,
        logout,
        user:state.user,
        isAuthenticated: state.isAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
