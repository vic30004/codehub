import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import AuthContext from '../context/auth/AuthContext';

const NavBar = () => {
  const authContext = useContext(AuthContext);

  const {isAuthenticated,logout,user} = authContext
  

    const onLogout=()=>{
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
            <a href>Articles</a>
          </li>
          <li className='nav-list-item'>
            <a href>Events</a>
          </li>
          <li className='nav-list-item'>
            <a href>Forum</a>
          </li>
      
        </ul>
      </div>
      <div className='nav-input'>
        {/*<input
                type="text"
                className="input"
                id="addInput"
                placeholder="Search videos, content and more..."
                />*/}
      </div>
      {isAuthenticated ? authLinks: guestLinks}
      <div>
      
      </div>
    </div>
  );
};

export default NavBar;
