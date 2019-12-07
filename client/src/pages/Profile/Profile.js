import React, { Fragment, useContext,useEffect,useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileContext from '../../components/context/profile/ProfileContext';
import ProfileItems from './ProfileItems';
import Spinner from '../../components/Spinner/index'
import './Profile.css'

const Profile = () => {
  const authContext = useContext(AuthContext);
  const profileContext = useContext(ProfileContext);
  const {loadUser} =authContext

  const {getProfiles,profiles,loading} = profileContext;
  console.log(profiles)

    useEffect(()=>{
      if (localStorage.token) {
        loadUser();   
      }
        getProfiles()
    },[])

  return (
    <div id='profiles'>
    {!loading && profiles.length>0 ?<div className='profiles-container'>
        {profiles.length>0?profiles.map(profile => (
          <ProfileItems profiles={profile} />
        )):<h4>No Profiles Yet</h4>}
      </div> : <Spinner/>}
    
      
    </div>
  );
};

export default Profile;
