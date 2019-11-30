import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItems = ({ profiles }) => {
  const { user,company,status,location,skills,username,_id } = profiles;
  return (
    <div className='card'>
      <div className='profile-items text-center'>
        {profiles.user || profiles !== null ? (
          <img src={profiles.user.avatar} />
        ) : (
          ''
        )}
        {profiles.user || user !== null ? (
          <div className='username'>{profiles.user.name}</div>
        ) : (
          ''
        )}
        <p>{status} {company && <span> at {company}</span>}</p>
        <p className="my-1"> {location && <span> at {location}</span>}</p>
        {profiles.user || user !== null ? (
          <Link to={`/profile/${user._id}`} className='profileBtn'>
            Visit Profile
          </Link>
        ) : (
          ''
        )}
        <ul>
        {skills.slice(0,4).map((skill,i)=>(
            <li ky={i}>
               <i className="fas fa-check"></i> {skill}
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileItems;
