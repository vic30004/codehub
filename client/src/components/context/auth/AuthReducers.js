import {

  SET_ALERT,
  REMOVE_ALERT,
  REGISTER_USER,
  REGISTER_FAIL
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {

    case REGISTER_USER:
       localStorage.setItem('token',payload.token);
       return{
           ...state,
           ...payload,
           isAuthenticated:true,
           loading: true
       }

    case REGISTER_FAIL:
       localStorage.removeItem('token');
       return{
        ...state,
        token:null,
        isAuthenticated:false,
        loading: false
       }



    case SET_ALERT:
      return {
        ...state,
        errorState:payload
      };
    case REMOVE_ALERT:
      return {
          ...state,
          errorState:[]
      };

    default:
      return state;
  }
};
