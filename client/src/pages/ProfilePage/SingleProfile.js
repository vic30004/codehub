import React, { useEffect, Fragment, useContext } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';
import AuthContext from '../../components/context/auth/AuthContext';
import profilePage from './ProfilePage'
import ProfilePage from './ProfilePage';

const Profile = ({ match }) => {
  const profileContext = useContext(ProfileContext);

  const { getProfileById, profile, loading } = profileContext;
    console.log(match.params.id)
  useEffect(() => {
    getProfileById(match.params.id);
  }, []);
  console.log(profile)
  return <Fragment>
  {profile !== null && profile?<ProfilePage profile={profile}/>:''}
 
  </Fragment>;
};

export default Profile;
