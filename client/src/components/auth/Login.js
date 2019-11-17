import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Register.css'

const Login = () => {

    const [formData, setFormData]=useState({
        username:'',
        password:'',
    })
    const {username, password} = formData

    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})
    const onClick = async(e) =>{
        e.preventDefault();
        console.log('Logged in')
    }
    return (
        <section id="login" >
        <div className="form-container ">
        <h2>Login</h2>
        <h4>Sign Into Your Account</h4>
        <input type="text" name="username" value={username} id="username" onChange={e=>onChange(e)} placeholder="Username"/>
        <input type="password" name="password" value={password} onChange={e=>onChange(e)} placeholder="Password" minLength='6'/>
        <a className="btn-register" onClick={e =>onClick(e)}>Login</a>
        <h5>Don't have an account? <Link to="/register">Register</Link></h5>

        </div>
    </section>
    )
    }
export default Login

