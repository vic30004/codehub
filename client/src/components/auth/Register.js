import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
const Register = () => {
    const [formData, setFormData]=useState({
        name:'',
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, username, email, password,password2} = formData

    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})

    const onClick = async(e) =>{
        e.preventDefault();
        if(password !== password2){
            console.log('Passwords do not match')
        }else{
            const newUser = {
                name,
                username,
                email,
                password
            }
            try{
                const config ={
                    headers:{
                        'Content-Type':'application/json'
                    }
                }

                const body = JSON.stringify(newUser);
                const url = '/api/users/register'
                const res = await fetch(url,{
                    method:'POST',
                    headers:config.headers,
                    body:body
                })
                return await res.json()
            }catch(err){
                console.error(err.response.data)
            }
        }
    }

    return (
        <section id="register" >
            <div className="form-container ">
            <h2>Sign Up</h2>
            <h4>Create Your Account</h4>
            <input type="text" name="name" value={name} id="name" onChange={e=>onChange(e)} placeholder="Full Name"/>
            <input type="text" name="username" value={username} id="username" onChange={e=>onChange(e)} placeholder="Username"/>
            <input type="email" name="email" id="email" value={email} onChange={e=>onChange(e)} placeholder="Email" required/>
            <h4>Use gravatar email for a profile picture</h4>
            <input type="password" name="password" value={password} onChange={e=>onChange(e)} placeholder="Password" minLength='6'/>
            <input type="password" name="password2" value={password2} onChange={e=>onChange(e)} placeholder="Confirm Password" minLength='6'/>
            <a className="btn-register" onClick={e =>onClick(e)}>Register</a>
            <h5>Already a member? <Link to="/login">Login in</Link></h5>
            </div>
        </section>
    )
}

export default Register
