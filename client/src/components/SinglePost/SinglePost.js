import React, {Fragment,useEffect,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'
import PostItem from '../Posts/PostItem'

const SinglePost = ({match}) => {
const postsContext = useContext(PostsContext)

const {getPost,loading,post} = postsContext
useEffect(()=>{
    getPost(match.params.id)
},[])



    return loading || post === null ? '':<Fragment>
    
    <PostItem post={post} showActions={false}/>
    </Fragment>
}

export default SinglePost
