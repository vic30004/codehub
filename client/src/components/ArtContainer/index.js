import React, { useContext, useEffect } from 'react';
import './style.css';
import AuthContext from '../context/auth/AuthContext';

const ArtContainer = props => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated,user,loadUser} =authContext

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);

  return <div className='articles-container' {...props}></div>;
};

export default ArtContainer;
