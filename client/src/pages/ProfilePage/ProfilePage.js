import React, { useState, useContext, Fragment, useEffect } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileGithub from './ProfileGithub';
import PostsContext from '../../components/context/posts/PostsContext';
import UserComments from '../../components/Comments/UserComments';
import './ProfilePage.css';

const ProfilePage = ({ profile },props) => {
  const [text, setText] = useState('');
  const profileContext = useContext(ProfileContext);
  const authContext = useContext(AuthContext);
  const postsContext = useContext(PostsContext);

  const { isAuthenticated, user, loadUser } = authContext;
  const { deleteExp, deleteEdu, loading, getCurrentProfile } = profileContext;
  const { addPost } = postsContext;

  const {
    company,
    website,
    location,
    status,
    username,
    skills,
    bio,
    githubusername,
    experience,
    twitter,
    facebook,
    youtube,
    instagram,
    education
  } = profile;
  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);

  return (
    <Fragment>
      {profile !== null ? (
        <section id='profilePage'>
          <div className='profile-container'>
            <div className='profile-head'>
              <img src={profile.user.avatar} alt='' className='profile-pic' />
              <h1>{profile.user.name}</h1> <p>{bio}</p>
              <ul className='skill-list'>
                {skills.map(skill => (
                  <li> {skill} </li>
                ))}
              </ul>
              {website ? (
                <Link to={website} className='websiteBtn'>
                  My Website
                </Link>
              ) : (
                ''
              )}
            </div>
            <div id='userInfo'>
              <ul className='list-items'>
                <h2>Where I work:</h2>
                <li>{company}</li>
                <h2> I am from:</h2>
                <li>{location}</li>
                <h2>My Github Username:</h2>
                <li> {githubusername}</li>
                <h2>Work Title</h2>
                <li>{status}</li>
              </ul>
            </div>

            <div id='profile-info'>
              <div className='experience'>
                
                {experience.length>0
                  ? 
                  <Fragment>
                  <h2>Experience</h2>
                  <div>
                  {experience.map(data => (
                      <Fragment key={data._id}>
                        <ul className="e-list">
                          <li><span>Title: </span>{data.title}</li>
                          <li><span>Company: </span>{data.company}</li>
                          <li><span>Location: </span>{data.location}</li>
                          <li><span>From: </span>{moment(data.from).format('MM/DD/YYYY')}</li>
                          <li><span>To: </span>{moment(data.to).format('MM/DD/YYYY')}</li>
                          <li><span>Job Description: </span>{data.description}</li>
                          
                        </ul>
                      </Fragment>
                    ))}
                    </div>
                    </Fragment>
                  :
                  <Fragment>
                  {profile.user._id===user.data._id?<Link to='/experience' className="addE">Add Experience</Link>:<h2>No Experience Yet!</h2>}
                </Fragment>
                }
                  </div>
                  <Fragment>
                  
                  
                  </Fragment>
                <div className='education'>
                  {education.length>0 ? (

                    <Fragment>
                    <h2>Education</h2>
                 <div>
                    {education.map(data => (
                     
                        
                        <ul className="e-list">
                          <li><span>School: </span>{data.school}</li>
                          <li><span>Degree: </span>{data.degree}</li>
                          <li><span>Field of Study: </span>{data.fieldofStudy}</li>
                          <li><span>From: </span>{moment(data.from).format('MM/DD/YYYY')}</li>
                          <li><span>To: </span>{moment(data.to).format('MM/DD/YYYY')}</li>
                          <li><span>Description: </span>{data.description}</li>
                        </ul>
                      
                    ))}
                    </div>
                    </Fragment>
                  ) : 
                  <Fragment>
                    {profile.user._id === user.data._id?<Link to='/education' className="addE">Add Education</Link>:<h2>No Education Yet!</h2>}
                    </Fragment>
                    
                  }
                </div>
              </div>
            </div>
          <section className='posts-container'>
            {isAuthenticated &&
            loading === false &&
            user.data._id === profile.user._id ? (
              <div className='post-comment'>
                <h1>Add A Posts</h1>
                <form
                  className='comment-form-container'
                  onSubmit={async e => {
                    e.preventDefault();
                    await addPost({ text });
                    await getCurrentProfile(profile.user._id);
                    setText('');
                  }}
                >
                  <textarea
                    name='text'
                    placeholder='Share Something'
                    id='post'
                    value={text}
                    cols='100'
                    rows='2'
                    onChange={e => setText(e.target.value)}
                  ></textarea>
                  <button className='experience-btn'>Post</button>
                </form>
              </div>
            ) : (
              ''
            )}

            <div className='comments'>
              <h2>Posts</h2>
              <UserComments userId={profile.user._id} />
            </div>
          </section>

          {profile.githubusername && (
            <ProfileGithub username={githubusername} />
          )}
        </section>
      ) : (
        <h1>Loading</h1>
      )}
    </Fragment>
  );
};

export default ProfilePage;
