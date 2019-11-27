import React, { useContext, Fragment } from 'react';
import ProfileContext from '../../components/context/profile/ProfileContext';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import moment from 'moment'
import AuthContext from '../../components/context/auth/AuthContext';
const ProfilePage = ({profile}) => {
  const profileContext = useContext(ProfileContext);
  const authContext = useContext(AuthContext)

  const {isAuthenticated} =authContext
  const {deleteExp,deleteEdu } = profileContext;
  const {
    company,
    website,
    location,
    status,
    username,
    skills,
    user,
    bio,
    githubusername,
    experience,
    twitter,
    facebook,
    youtube,
    instagram,
    education
  } = profile;
console.log(profile)
  

  return (
    <Fragment>
    {profile!==null ?
      <section id='profilePage'>
      
      <div className='profile-container'>
    <div className='profile-head'>
    
      <img src={user.avatar} alt='' className="profile-pic" />
      <h1>{user.name}</h1> <p>{bio}</p>
      <ul>
        <li>
          <h4>{skills}</h4>
        </li>
      </ul>
      <Link to={website}>My website</Link>
    </div>

    <div className='profile-info'>
      <ul className='list-items'>
        <li>
          {' '}
          <h4>Where I work:</h4> {company}
        </li>
        <li>
          <h4> I am from:</h4> {location}
        </li>
        <li>
          {' '}
          <h4>My Github Username:</h4> {githubusername}
        </li>
        <li>
          <h4>Work Title</h4>
          {status}
        </li>
      </ul>
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
                  {isAuthenticated? <button onClick={e =>deleteExp(data._id)}>Delete</button> :''}

                </ul>
              </Fragment>
            ))
          : ''}
          <div className="education">
           {education
          ? education.map(data => (
              <div>
                <h4>Education</h4>
                <ul>
                  <li>School:{data.school}</li>
                  <li>Degree:{data.degree}</li>
                  <li>Field of Study:{data.fieldofstudy}</li>
                  <li>From:{moment(data.from).format('MM/DD/YYYY')}</li>
                  <li>To:{moment(data.to).format('MM/DD/YYYY')}</li>
                  <li>Description:{data.description}</li>
                  {isAuthenticated? <button onClick={e =>deleteEdu(data._id)}>Delete</button> :''}

                </ul>
              </div>
            ))
          : <Link to='/education'>Add Education</Link>}
          </div>
       
      </div>
    </div>
  </div>
  <section className='posts-container'>
    <div className='post-comment'>
      <h1>Add A Posts</h1>

      <textarea
        name=''
        placeholder='Share Something'
        id=''
        cols='100'
        rows='5'
      ></textarea>
      <button>Post</button>
    </div>

    <div className='comments'>
      <h2>Comments</h2>
      <div className='comment-container'>
      <div className="user-pic">
      <img src={user.avatar} alt='' />
      </div>
        <div className="content">
               <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptatem accusamus earum quibusdam! Repellat libero possimus
          earum mollitia sint id!
        </p>
        <h6>Added on: 11/22/2019</h6>
        </div>
 
      </div>
    </div>
  </section> 
  </section>
  :<h1>Loading</h1>}
  </Fragment>
  );
};

export default ProfilePage;
