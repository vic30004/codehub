import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './AuthContext';
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
    errorState: []
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //REGISTER USER,

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
        removeAlert
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
