import React, { Fragment, useContext,useEffect,useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';



const Alert = () => {
    const authContext = useContext(AuthContext);
    const {errorState}= authContext;


    return (
        <div key={errorState.id}>
            <h4 className="alert-danger">{errorState.msg}</h4>
        </div>
    )
}

export default Alert
