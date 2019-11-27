import React, { Fragment, useContext,useEffect,useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileContext from '../../components/context/profile/ProfileContext';
import ProfileItems from './ProfileItems';
import './Profile.css'

const Profile = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);

  const {getProfiles,profiles} = profileContext;
  console.log(profiles)

    useEffect(()=>{
        getProfiles()
    },[])

  return (
    <div id='profiles'>
      <div className='profiles-container'>
        {profiles.length>0?profiles.map(profile => (
          <ProfileItems profiles={profile} />
        )):<h4>No Profiles Yet</h4>}
      </div>
    </div>
  );
};

export default Profile;
