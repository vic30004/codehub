import React, {Fragment,useEffect,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'
import PostItem from '../Posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
import Spinner from '../Spinner/index'
import './SingleComment.css'
const SinglePost = ({match}) => {
const postsContext = useContext(PostsContext)

const {getPost,loading,post} = postsContext
useEffect(()=>{
    getPost(match.params.id)
},[])



    return loading || post === null ? <Spinner/>:<div id="comments-section">
    <section id="userPost">
    <PostItem post={post} showActions={false}/>
    </section>
    
    <CommentForm postId={post._id}/>
    <div id="userPost">
    {post.comments.map(comment =>(
        <CommentItem  key={comment._id} comment={comment} postId={post._id}/>
    ))}
    </div>
    </div>
}

export default SinglePost
