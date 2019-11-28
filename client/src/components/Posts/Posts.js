import React, {Fragment,useEffect,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'
import AuthContext from '../context/auth/AuthContext'
import PostItem from './PostItem'

const Posts = () => {

    const postsContext = useContext(PostsContext)
    const authContext = useContext(AuthContext)
    const {loadUser} = authContext
    const {getPosts,posts,loading} = postsContext;

    useEffect(()=>{
        if (localStorage.token) {
            loadUser();  
            getPosts() 
          }
        
    },[])

    return loading ? '' : (
        <Fragment>
        <h1>Posts</h1>
        <p>
        <i className="fas fa-user"></i>Welcome to the Developer Community!
        </p>
        {/*PostForm*/}
        {posts.map(post => (
            <PostItem key={post._id} post ={post}/>
        ))}
        </Fragment>
    )
}

export default Posts
