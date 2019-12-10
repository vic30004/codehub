import React, {useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import ProfileContext from '../context/profile/ProfileContext'
import Profile from '../../pages/Profile/Profile'
import Alert from '../AlertComponent/Alert'

const CreateProfile = (props) => {
    const [formData, setFormData]=useState({
        company:'',
        website:'',
        location:'',
        status:'',
        skills:'',
        bio: '',
        githubusername:'',
        experience:'',
        twitter:'',
        facebook:'',
        youtube:'',
        instagram:''

    })

    const profileContext = useContext(ProfileContext);
    const {createProfile,profile}=profileContext

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

        useEffect(() => {
            if (profile !==null) {
              props.history.push('/dashboard');
            }
            //eslint-disable-next-line
          }, [profile, props]);

    const onChange = (e) => setFormData({...formData,[e.target.name]:e.target.value})

    const onClick = async(e) =>{
        e.preventDefault();
        createProfile({
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
            instagram
        })
    }
        
    
    return (
        <div>
        <Alert/>
        <section id="register" >
        <div className="form-container ">
        <h2>Create Your Profile</h2>
        <h4>Lets Get Started !</h4>
        <select name="status" id="status" value={status} onChange={e=>onChange(e)}>
        <option value="">Selete Professional Status</option>
        <option value="Developer">Developer</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Other">Other</option>
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
        <input type="text" name="youtube" value={youtube} id="youtube" onChange={e=>onChange(e)} placeholder="Youtube"/>
        <input type="text" name="instagram" value={instagram} id="instagram" onChange={e=>onChange(e)} placeholder="Instagram"/>
        <a className="btn-register" onClick={e =>onClick(e)}>Create Profile</a>
        </div>
    </section>
        </div>
    )
}

export default CreateProfile
