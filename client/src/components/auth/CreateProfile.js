import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const CreateProfile = () => {
    const [formData, setFormData]=useState({
        company:'',
        website:'',
        location:'',
        status:'',
        username:'',
        skills:'',
        bio: '',
        githubusername:'',
        experience:'',
        twitter:'',
        facebook:'',
        youtube:'',
        instagram:''

    })

    const {company,
        website,
        location,
        status,
        skills,
        bio,
        githubusername,
        experience,
        twitter,
        facebook,
        youtube,
        instagram} = formData

    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})

    const onClick = async(e) =>{
        e.preventDefault();
        console.log('Profile Created')
    }
        
    
    return (
        <div>
        <section id="register" >
        <div className="form-container ">
        <h2>Create Your Profile</h2>
        <h4>Lets Get Started !</h4>
        <select name="" id="">
        <option value="">Selete Professional Status</option>
        <option value="">Developer</option>
        <option value="">Student</option>
        <option value="">Teacher</option>
        <option value="">Other</option>
        </select>
        
        <input type="text" name="company" value={company} id="company" onChange={e=>onChange(e)} placeholder="Company"/>
        <input type="text" name="website" value={website} id="website" onChange={e=>onChange(e)} placeholder="Website"/>
        <input type="text" name="location" id="location" value={location} onChange={e=>onChange(e)} placeholder="Location" required/>
        <h4>Use gravatar email for a profile picture</h4>
        <input type="text" name="skills" value={skills} onChange={e=>onChange(e)} placeholder="Skills" />
        <input type="text" name="githubusername" value={githubusername} onChange={e=>onChange(e)} placeholder="GitHub Username" />
        <textarea name="bio" value={bio} onChange={e=>onChange(e)} id="bio" cols="30" rows="5" placeholder="A Short Bio"></textarea>

        <input type="text" name="twitter" value={twitter} id="twitter" onChange={e=>onChange(e)} placeholder="Twitter"/>
        <input type="text" name="facebook" value={facebook} id="facebook" onChange={e=>onChange(e)} placeholder="facebook"/>
        <input type="text" name="youtube" value={website} id="youtube" onChange={e=>onChange(e)} placeholder="Youtube"/>
        <input type="text" name="instagram" value={website} id="instagram" onChange={e=>onChange(e)} placeholder="Instagram"/>
        <a className="btn-register" onClick={e =>onClick(e)}>Creat Profile</a>
        </div>
    </section>
        </div>
    )
}

export default CreateProfile
