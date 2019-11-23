import React from 'react'
import Posts from '../ForumPosts'


const allPosts = ({ posts, getForms }) => {
    console.log(posts)
    return (
        <>
            {posts && posts.length > 0 ? posts.map((posts) => (
                <Posts
                    
                    posts={posts}
                />


            )) : "no Data"}
        </>
    )

}

export default allPosts