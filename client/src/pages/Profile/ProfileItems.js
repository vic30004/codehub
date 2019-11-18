import React from 'react'
import {Link} from 'react-router-dom';


const ProfileItems = ({profiles}) => {
    const{company,
        website,
        location,
        avatar,
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
    return (
        <div className='card'>
            <div className="profile-items text-center">
            <img src={user.avatar} className="profile-pic" alt="proile-pic"/>
            <div className="username">{user.name}</div>
            <Link to='#' className="profileBtn">Visit Profile</Link>
            </div>
        </div>
    )
}

export default ProfileItems
