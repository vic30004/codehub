import React, { Fragment, useContext,useEffect,useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileContext from '../../components/context/profile/ProfileContext';
import ProfileItems from './ProfileItems';
import './Profile.css'

const Profile = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const {getProfiles,profiles} = profileContext;

    useEffect(()=>{
        getProfiles()
    },[])

  return (
    <div id='profiles'>
      <div className='profiles-container'>
        {profiles.map(profile => (
          <ProfileItems profiles={profile} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
