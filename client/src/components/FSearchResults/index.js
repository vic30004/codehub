import React from 'react'
import Posts from '../ForumPosts'


const allPosts = ({ posts, getForms }) => {

    return (
        <>
            {posts && posts.length > 0 ? posts.map(({ _id, author, post, comments,likes }) => (
                <Posts
                    key={_id}
                    getForms={getForms}
                    id={_id}
                    author={author}
                    body={post}
                    comments={comments}
                    likes={likes}
                />


            )) : "no Data"}
        </>
    )

}

export default allPosts