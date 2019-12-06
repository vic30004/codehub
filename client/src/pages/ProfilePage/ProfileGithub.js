import React, { useEffect, Fragment, useContext } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';

const ProfileGithub = ({ username }) => {
  const profileContext = useContext(ProfileContext);
  const { getGithub, repos } = profileContext;
  useEffect(() => {
    getGithub(username);
  }, []);
  return (
    <div id='github-profile'>
      

      {repos.length <=0
        ? <h1>No Repos</h1>
        : 
        <Fragment >
        <h1>Github Repos</h1>
        <div>
        {repos.map(repo => (
            <div className ='gitHub-repo' key={repo._id}>
              <div>
                <h4>
                  <a
                    href={repo.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {repo.name}
                  </a>
                </h4>
                <p>{repo.description}</p>
              </div>
              <div>
                <ul>
                    <li>Stars: {repo.stargazer_count?repo.stargazer_count:0 }</li>
                    <li>Watchers: {repo.watchers_count?repo.watchers_count:0 }</li>
                    <li>Forks: {repo.Forks_count ?repo.Forks_count:0 }</li>
                </ul>
              </div>
            </div>
          )
         
          )}
           </div>
           </Fragment>
        }
    </div>
  );
};

ProfileGithub.propTypes = {};

export default ProfileGithub;
