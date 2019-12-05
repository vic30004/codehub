import React, { useState, useContext, Fragment, useEffect } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthContext from '../../components/context/auth/AuthContext';
import ProfileGithub from './ProfileGithub';
import PostsContext from '../../components/context/posts/PostsContext';
import UserComments from '../../components/Comments/UserComments';
import './ProfilePage.css';

const ProfilePage = ({ profile }) => {
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
  console.log(skills);
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
                <h2 >Where I work:</h2>
                <li>{company}</li>
                <h2 > I am from:</h2>
                <li>{location}</li>
                <h2 >My Github Username:</h2>
                <li> {githubusername}</li>
                <h2 >Work Title</h2>
                <li>{status}</li>
              </ul>
            </div>
            <div className='profile-info'>
              <div className='experience'>
                <h4>Experience</h4>
                {experience
                  ? experience.map(data => (
                      <Fragment key={data._id}>
                        <h2>{data.title}</h2>
                        <ul>
                          <li>Company:{data.company}</li>
                          <li>Location:{data.location}</li>
                          <li>From:{moment(data.from).format('MM/DD/YYYY')}</li>
                          <li>To:{moment(data.to).format('MM/DD/YYYY')}</li>
                          <li>Job Description:{data.description}</li>
                          {isAuthenticated &&
                          loading === false &&
                          user.data._id === profile.user._id ? (
                            <button onClick={e => deleteExp(data._id)}>
                              Delete
                            </button>
                          ) : (
                            ''
                          )}
                        </ul>
                      </Fragment>
                    ))
                  : ''}
                <div className='education'>
                  {education ? (
                    education.map(data => (
                      <div>
                        <h4>Education</h4>
                        <ul>
                          <li>School:{data.school}</li>
                          <li>Degree:{data.degree}</li>
                          <li>Field of Study:{data.fieldofstudy}</li>
                          <li>From:{moment(data.from).format('MM/DD/YYYY')}</li>
                          <li>To:{moment(data.to).format('MM/DD/YYYY')}</li>
                          <li>Description:{data.description}</li>
                          {isAuthenticated &&
                          loading === false &&
                          user.data._id === profile.user._id ? (
                            <button
                              onClick={e => {
                                deleteEdu(data._id);
                                getCurrentProfile(user.data._id);
                              }}
                            >
                              Delete
                            </button>
                          ) : (
                            ''
                          )}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <Link to='/education'>Add Education</Link>
                  )}
                </div>
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
