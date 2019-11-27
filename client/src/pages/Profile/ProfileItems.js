import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItems = ({ profiles }) => {
  const { user } = profiles;
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
        {profiles.user || user !== null ? (
          <Link to='#' className='profileBtn'>
            Visit Profile
          </Link>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ProfileItems;
