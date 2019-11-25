import React, {useEffect,useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import ProfileContext from '../context/profile/ProfileContext'
import Profile from '../../pages/Profile/Profile'
import Alert from '../AlertComponent/Alert'
import AuthContext from '../context/auth/AuthContext'

const EditProfile = (props) => {
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
    const authContext = useContext(AuthContext);
    const{isAuthenticated,loadUser} = authContext
    const {createProfile,profile,getCurrentProfile,loading,history,edit}=profileContext

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
            if(localStorage.token && isAuthenticated){
                loadUser()
                getCurrentProfile()
            
            console.log(profile)
            setFormData({
                company: loading || !profile.company ? '' : profile.company,
                website: loading || !profile.website ? '' : profile.website,
                location: loading || !profile.location ? '' : profile.location,
                status: loading || !profile.status ? '' : profile.status,
                skills: loading || !profile.skills ? '' : profile.skills.join(','),
                githubusername:
                  loading || !profile.githubusername ? '' : profile.githubusername,
                bio: loading || !profile.bio ? '' : profile.bio,
                twitter: loading || !profile.social ? '' : profile.social.twitter,
                facebook: loading || !profile.social ? '' : profile.social.facebook,
                linkedin: loading || !profile.social ? '' : profile.social.linkedin,
                youtube: loading || !profile.social ? '' : profile.social.youtube,
                instagram: loading || !profile.social ? '' : profile.social.instagram
              });
            }else{
                props.history.push('/login');
            }
            

            
        }, [loading])

    const onChange = (e) => {
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    

    const onClick = async(e) =>{
        e.preventDefault();
        console.log(formData)
        createProfile({
            website,
            location,
            status,
            skills,
            company,
            bio,
            githubusername,
            twitter,
            facebook,
            youtube,
            instagram
        },history,edit)
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
        <a className="btn-register" onClick={e =>onClick(e)}>Update Profile</a>
        </div>
    </section>
        </div>
    )
}

export default EditProfile
