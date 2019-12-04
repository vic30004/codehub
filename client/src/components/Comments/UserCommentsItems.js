import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import AuthContext from '../context/auth/AuthContext';
import PostsContext from '../context/posts/PostsContext';
import ProfileContext from '../context/profile/ProfileContext';
import ProfileGithub from '../../pages/ProfilePage/ProfileGithub'
import './Comments.css'

const UserCommentsItems = ({posts}) => {
const {data,_id,name,avatar,text,likes,user,comments} = posts
const authContext = useContext(AuthContext);
const postsContext = useContext(PostsContext);
const profileContext = useContext(ProfileContext)

const { loading, loadUser } = authContext;
const { profile } = profileContext;
const { addLikes, removeLikes, getUserPosts, deletePost,getPosts } = postsContext;


useEffect(() => {
    if (localStorage.token) {
      loadUser();
      getUserPosts(profile.user._id)
    }
    
  }, []);
console.log(profile)

    return (
      <div className='post'>
      {profile !== null ?
        <div className="post-card">
        <div className="user-info">
          <a href='profile.html'>
            <img src={avatar} alt='' />
            <h4>{name}</h4>
          </a>
        </div>
        <div className="comments-content">
          <p>{text}</p>
          <p>Posted on:{moment(data).format('MM/DD/YYYY')}</p>
          <div className="like-btn">
          <button type='button' type='button'
          onClick={e => {
            addLikes(_id);
            getUserPosts(profile.user._id);
          }}>
            <i className='fas fa-thumbs-up' />{' '}
            {likes.length > 0 && <span>{likes.length} </span>}
          </button>
          <button type='button' type='button'
          onClick={e => {
            getUserPosts(profile.user._id);
            removeLikes(_id);

          }}>
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/post/${_id}`}>
            Comments {comments.length > 0 && <span>{comments.length}</span>}{' '}
          </Link>
          {!loading && user === authContext.user.data._id && (
            <button type='button' onClick={e => {
              deletePost(_id);
            }}>
              <i className='fas fa-times'></i>
            </button>
          
          )}
           </div> 
        </div>
        </div>
        :<h1>Loading</h1>}
      </div>
    )
}

export default UserCommentsItems
