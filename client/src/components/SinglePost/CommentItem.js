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
        <div>
            <div>
                <Link to={`/profile/${comment.user}`}>
                <img src={avatar} alt=""/>
                <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p>{text}</p>
                <p>
                Posted on:{moment(data).format('MM/DD/YYYY')}
                </p>
                {!loading && comment.user === user.data._id &&(
                    <button onClick={e=>deleteComment(postId,_id)} type="button">
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CommentItem
