import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthContext from '../context/auth/AuthContext';
import PostsContext from '../context/posts/PostsContext';
import { GET_POSTS } from '../context/types';
import Alert from '../AlertComponent/Alert';
import './Posts.css'

const PostItem = ({
  post: { _id, text, user, name, avatar, likes, comments, data },
  showActions
}) => {
  const authContext = useContext(AuthContext);
  const { loading, loadUser } = authContext;
  const postsContext = useContext(PostsContext);
  const { addLikes, removeLikes, getPosts, deletePost } = postsContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);
  return (
    <div className='post2'>
      <Alert/>
      <div className="user-info">
      <div>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt='' />
        </Link>
        <h4>{name}</h4>
      </div>
      </div>
      <div className="post-content">
        <p>{text}</p>
        <h4>Posted on:{moment(data).format('MM/DD/YYYY')}</h4>
    </div>
        {showActions && (
          <Fragment>
            <button
              type='button'
              onClick={e => {
                addLikes(_id);
                getPosts();
              }}
            >
              <i className='fas fa-thumbs-up' />{' '}
              {likes.length > 0 && <span>{likes.length} </span>}
            </button>
            <button
              type='button'
              onClick={e => {
                removeLikes(_id);
                getPosts();
              }}
            >
              <i className='fas fa-thumbs-down' />
            </button>
            <Link to={`/post/${_id}`}>
              Comments {comments.length > 0 && <span>{comments.length}</span>}{' '}
            </Link>
            {!loading && user === authContext.user.data._id && (
              <button
                type='button'
                onClick={e => {
                  deletePost(_id);
                }}
              >
                <i className='fas fa-times'></i>
              </button>
            )}
          </Fragment>
        )}
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
}


export default PostItem;
