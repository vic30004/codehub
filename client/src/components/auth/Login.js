import React, { Fragment, useContext, useEffect, useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import {Link} from 'react-router-dom'
import './Register.css'
import Alert from '../AlertComponent/Alert';


const Login = (props) => {

    const authContext = useContext(AuthContext);

    const {
        setAlert,
        errorState,
        removeAlert,
        login,
        isAuthenticated
      } = authContext;

      useEffect(() => {
        if (isAuthenticated) {
          props.history.push('/dashboard');
        }
        //eslint-disable-next-line
      }, [isAuthenticated, props]);
    

    const [formData, setFormData]=useState({
        username:'',
        password:'',
    })
    const {username, password} = formData

    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})
    const onClick = async(e) =>{
        e.preventDefault();
        if(username==='' || password ===''){
            setAlert('Please fill in all fileds','danger')
        }else{
            login({
                username,
                password
            })
        }
    }
    return (
        <section id="login" >
        <div className="form-container ">
        <Alert/>
        <h2>Login</h2>
        <h4>Sign Into Your Account</h4>
        <input type="text" name="username" value={username} id="username" onChange={e=>onChange(e)} placeholder="Username" required/>
        <input type="password" name="password" value={password} onChange={e=>onChange(e)} placeholder="Password" minLength='6' required/>
        <a className="btn-register" onClick={e =>onClick(e)}>Login</a>
        <h5 className='register-header'>Don't have an account? <Link to="/register">Register</Link></h5>

        </div>
    </section>
    )
    }
export default Login

