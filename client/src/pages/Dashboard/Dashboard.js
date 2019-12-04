import React, { useContext, useEffect, Fragment } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';
import AuthProfileContext from '../../components/context/auth/AuthContext';
import AuthContext from '../../components/context/auth/AuthContext';
import { Link } from 'react-router-dom';
import UserProfile from '../Profile/UserProfile';
import DashboardActions from './DashboardActions';
import './Dashboard.css';
import Quote from 'inspirational-quotes';

const Dashboard = props => {
  const profileContext = useContext(ProfileContext);
  const authContext = useContext(AuthContext);

  const { getCurrentProfile,profile, getGithub, loading } = profileContext;
  const { user, loadUser, token } = authContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
      getCurrentProfile()
    }
  }, []);

  let randomQuote = Quote.getRandomQuote;
  console.log(randomQuote);
  return (
    <section id='dashboard'>
    <div className="main-info">
    <h1>Dashboard </h1>
      <p className='userInfo'>
        <i className='fas fa-user'></i>Welcome{' '}
        <span className='userName'>{user && user.data.name} </span>
      </p>
    
      

      {profile !== null && !loading && profile ? (
        <Fragment id='profileEdit'>
          <div className='editBtn'>
            <DashboardActions />
          </div>

          <Link to={`/profile/${user.data._id}`} className='profileBtn'>
            Visit Profile
          </Link>

          
        </Fragment>
        
      ) : (
        <Fragment>
          <p>
            Welcome to codehub! We are so happy you decided to join. Please
            follow this link to set up your profile!
          </p>
          <Link to='/create-profile' className='profileBtn'>Create Profile </Link>
        </Fragment>
      )}
</div>
      {loading ? (
        ''
      ) : (
        <div id='quote'>
          <h2>Some Random Quote</h2>
          <p>{randomQuote()}</p>
        </div>
      )}
    </section>

    
  );
};

export default Dashboard;
