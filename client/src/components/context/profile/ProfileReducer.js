import {
    GET_PROFILES,
    GET_PROFILE,
    CREATE_PROFILE,
    UPDATE_PROFILE,
    ADD_EDU,
    ADD_EXP,
    DELETE,
    SET_CURRENT,
    SET_ALERT,
    REMOVE_ALERT,
    CLEAR_CURRENT,
    PROFILE_ERROR,
    CLEAR_PROFILE
    } from '../types';


    export default (state, action) =>{
        const { type, payload } = action;

        switch (type) {
            case GET_PROFILE:
                return{
                    ...state,
                    profile:payload,
                    loading:false
                }
            case PROFILE_ERROR:
                return {
                    ...state,
                    error:payload,
                    loading:false
                }
                case CLEAR_PROFILE:
                        return {
                          ...state,
                          profile:null,
                          repos: [],
                          loading: false
                        }
               
        
            default:
             return state;
        }
    }