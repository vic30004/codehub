import React, {Fragment,useContext,useEffect} from 'react'
import PostsContext from '../context/posts/PostsContext';
import {Link} from 'react-router-dom'
import moment from 'moment'
import AuthContext from '../context/auth/AuthContext';

const CommentItem = ({postId, comment}) => {
    const postsContext = useContext(PostsContext);
    const authContext = useContext(AuthContext)
    const {deleteComment,loading} = postsContext
    const {user,loadUser} = authContext

    const {_id,text,name,avatar,data} = comment

    useEffect(()=>{
        if(localStorage.token){
            loadUser()
        }
    },[])
    return (
        <div className='post2'>
        <div className="user-info">
        <div>
          <Link to={`/profile/${comment.user}`}>
            <img src={avatar} alt='' />
          </Link>
          <h4>{name}</h4>
        </div>
        </div>
        <div className="post-content">
          <p>{text}</p>
          <h4>Posted on:{moment(data).format('MM/DD/YYYY')}</h4>
          {!loading && comment.user === user.data._id &&(
                    <button className='delete' onClick={e=>deleteComment(postId,_id)} type="button">
                        <i className="fas fa-times"></i>
                    </button>
                )}
      </div>
           </div>   
    )
}

export default CommentItem
