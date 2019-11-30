import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import AuthContext from '../context/auth/AuthContext';


const UserCommentsItems = ({posts}) => {
const {data,_id,name,avatar,text,likes,user,comments} = posts
const authContext = useContext(AuthContext);
const { loading, loadUser } = authContext;

useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);

    return (
        <div className='post'>
        <div>
          <a href='profile.html'>
            <img src={avatar} alt='' />
            <h4>{name}</h4>
          </a>
        </div>
        <div>
          <p>{text}</p>
          <p>Posted on:{moment(data).format('MM/DD/YYYY')}</p>
          <button type='button'>
            <i className='fas fa-thumbs-up' />{' '}
            {likes.length > 0 && <span>{likes.length} </span>}
          </button>
          <button type='button'>
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/post/${_id}`}>
            Comments {comments.length > 0 && <span>{comments.length}</span>}{' '}
          </Link>
          {!loading && user === authContext.user.data._id && (
            <button type='button'>
              <i className='fas fa-times'></i>
            </button>
          )}
        </div>
      </div>
    )
}

export default UserCommentsItems
