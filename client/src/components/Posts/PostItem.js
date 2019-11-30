import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AuthContext from '../context/auth/AuthContext';
import PostsContext from '../context/posts/PostsContext';
import { GET_POSTS } from '../context/types';
import Alert from '../AlertComponent/Alert';

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
  console.log(authContext.user.data._id);
  return (
    <div className='post'>
      <Alert />
      <div>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p>{text}</p>
        <p>Posted on:{moment(data).format('MM/DD/YYYY')}</p>

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
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
}


export default PostItem;
