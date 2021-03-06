import React, { Fragment, useContext, useEffect, useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import Alert from '../AlertComponent/Alert';
import {Animated} from "react-animated-css";
import { Link } from 'react-router-dom';
import './Register.css';




const Register = props => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const authContext = useContext(AuthContext);

  const {
    setAlert,
    errorState,
    removeAlert,
    registerUser,
    isAuthenticated
  } = authContext;

  const { name, username, email, password, password2 } = formData;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onClick = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
      setTimeout(() => {
        removeAlert();
      }, 5000);
    } else {
      registerUser({
        name,
        username,
        email,
        password
      });
    }
  };

  return (

    <div className='register-wrapper'>
    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
    <section id='register'>
      <div className='form-register-container '>
      <div className='error-wrapper'>
      <h2 className='sign-up'>
      Sign Up
      {errorState.length > 0 || errorState !== null ? <Alert /> : ''}
      </h2>
      </div>
        <input
          type='text'
          name='name'
          value={name}
          id='name'
          onChange={e => onChange(e)}
          placeholder='Full Name'
        />
        <input
          type='text'
          name='username'
          value={username}
          id='username'
          onChange={e => onChange(e)}
          placeholder='Username'
        />
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={e => onChange(e)}
          placeholder='Email'
          required
        />
        <input
          type='password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
          placeholder='Password'
          minLength='6'
        />
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={e => onChange(e)}
          placeholder='Confirm Password'
          minLength='6'
        />
        <a className='form-btn-register' onClick={e => onClick(e)}>
          Register
        </a>
        <h5 className='form-register-header'>
          Already a member? <Link to='/login'>Login</Link>
        </h5>
      </div>
    </section>
    </Animated>
    </div>
  );
};

export default Register;
