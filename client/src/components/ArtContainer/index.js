import React, { useContext, useEffect } from 'react';
import './style.css';
import AuthContext from '../context/auth/AuthContext';

const ArtContainer = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loadUser } = authContext

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);

  return (
    <div className='articles-body'>
      <div className='articles-header'>
      <h1>Top Trending Tech Articles</h1>
      <h2>Powered By HackerNoon</h2>
        </div>
      <div className='articles-container' {...props}></div>;
    </div>
  )
};

export default ArtContainer;
