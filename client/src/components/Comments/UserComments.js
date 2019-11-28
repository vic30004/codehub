import React, {useContext,useEffect} from 'react'
import PostsContext from '../context/posts/PostsContext'
import UserCommentsItems from './UserCommentsItems'
const UserComments = ({userId}) => {
    const postsContext = useContext(PostsContext)
    const {getUserPosts, posts} = postsContext

    useEffect(()=>{
        getUserPosts(userId)
    },[])
    console.log(posts)
    return (
        <div>
        {posts ? posts.map(data=>(
            <UserCommentsItems posts ={data}/>
        )):''}
        </div>
    )
}

export default UserComments
