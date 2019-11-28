import React, {Fragment,useEffect,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'
import PostItem from '../Posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
const SinglePost = ({match}) => {
const postsContext = useContext(PostsContext)

const {getPost,loading,post} = postsContext
useEffect(()=>{
    getPost(match.params.id)
},[])



    return loading || post === null ? '':<Fragment>
    
    <PostItem post={post} showActions={false}/>
    <CommentForm postId={post._id}/>
    <div className="comments">
    {post.comments.map(comment =>(
        <CommentItem key={comment._id} comment={comment} postId={post._id}/>
    ))}
    </div>
    </Fragment>
}

export default SinglePost
