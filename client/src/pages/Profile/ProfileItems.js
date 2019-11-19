import React from 'react'
import {Link} from 'react-router-dom';


const ProfileItems = ({profiles}) => {
    const{company,
        website,
        location,
        status,
        username,
        skills,
        user,
        bio,
        githubusername,
        experience,
        twitter,
        facebook,
        youtube,
        instagram} =profiles
        console.log(profiles)
    return (
        <div className='card'>
            <div className="profile-items text-center">
            {user|| user !== null ? <img src={user.avatar}/>:'' }
            {user|| user !== null ? <div className="username">{user.name}</div>:'' }
            {user|| user !== null ?<Link to='#' className="profileBtn">Visit Profile</Link>:'' }
       
            </div>
        </div>
    )
}

export default ProfileItems
