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
        isAuthenticated,
        loadUser,
        token
      } = authContext;

      useEffect(() => {
        if (localStorage.token) {
                       loadUser()
          //eslint-disable-next-line
            if(isAuthenticated){
                props.history.push('/dashboard');
      
            }
         
        }
        
       
        
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
      
        <div className='login-wrapper'>
        <section id="login" >
        <div className='login-container'>
        <div className='error-wrapper'>
        <h2 className='login-h2'>Login</h2>
        <Alert/>
        </div>
        <input type="text" name="username" value={username} id="username" onChange={e=>onChange(e)} placeholder="Username" required/>
        <input id='password' type="password" name="password" value={password} onChange={e=>onChange(e)} placeholder="Password" minLength='6' required/>
        <a className="form-btn-register" onClick={e =>onClick(e)}>sign in</a>
        <h5 className='register-header'>Don't have an account? <Link to="/register">Register</Link></h5>
        </div>
        </section>
      
    </div>
    )
    }
export default Login

