import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AuthContext from '../context/auth/AuthContext';
import ProfileContext from '../context/profile/ProfileContext'

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const {isAuthenticated,logout,user} = authContext
  const {clearProfile} = profileContext
  

    const onLogout=()=>{
      clearProfile();
        logout();
        
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.data.name}</li>
            <li>
            <Link to='/dashboard'> Dashboard</Link>
            
            </li>
            <li>
                <a href="#!" onClick={onLogout}>
                <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>

    );



    const guestLinks = (
        <Fragment>
            
        <li>
        <Link className='nav-button' to='/register'>
        Register
      </Link>
        </li>
        <li className='nav-list-item'>
        <Link to='/login'>Login</Link>
      </li>
        </Fragment>
    )

  return (
    <div className='nav-wrapper'>
      <Link to='/' className='nav-logo'>
        codeHub
      </Link>
      <div className='nav-list'>
        <ul className='nav-ul'>
          <li className='nav-list-item'>
            <Link to='/videos'>Videos</Link>
          </li>
          <li className='nav-list-item'>
            <a href='/articles'>Articles</a>
          </li>
          <li className='nav-list-item'>
            <a href>Events</a>
          </li>
          <li className='nav-list-item'>
            <a href='/forum'>Forum</a>
          </li>
          <li className='nav-list-item'>
          <Link to='/profile'>Profiles</Link>
          </li>
      
        </ul>
      </div>
      <div className='nav-input'>

      </div>
      {isAuthenticated ? authLinks: guestLinks}
      <div>
      
      </div>
    </div>
  );
};

export default NavBar;
