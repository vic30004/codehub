import React, { Fragment, useContext,useEffect,useState } from 'react';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileItems from './ProfileItems';
import './Profile.css'

const Profile = () => {
    const [profiles, setProfiles] = useState([])
  const authContext = useContext(AuthContext);

    useEffect(()=>{
        getProfiles()
    },[])

    const getProfiles =async()=>{
        const url='/api/profile'
        const res = await fetch(url)
        const data = await res.json();
        setProfiles(data.data)
    }
    const {    website,
        location,
        status,
        skills,
        bio,
        githubusername,
        experience,
        twitter,
        facebook,
        youtube,
        instagram} = profiles
        console.log(profiles)
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
