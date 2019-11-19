import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
import axios from 'axios'
import AuthReducer from './AuthReducers';
import {
  REGISTER_USER,
  REGISTER_FAIL,  
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AuthState = props => {
  const initialState = {
    profiles: [],
    errorState: [],
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading:true,
    user:null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

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
        console.log(err.response.data.error)
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
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
