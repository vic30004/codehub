import React, {useState,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'
import './SingleComment.css'


const CommentForm = ({postId}) => {
    const [text,setText] = useState('')
    const postsContext = useContext(PostsContext);

    const {addComment} = postsContext

    return (
        <div id='posts-container'>
            <div className='post-comment'>
            <h3>Comment</h3>

            <form action="" 
            className='comment-form-container'
            onSubmit={e=>{
                e.preventDefault();
                addComment({text},postId);
                setText('')
              }}>
                    <textarea
                    
                      name='text'
                      placeholder='Add a Comment'
                      id='post'
                      value={text}
                      cols='100'
                      rows='5'
                      onChange={e => setText(e.target.value)}
                    ></textarea>
                    <button className='experience-btn'>Post</button>
                    </form>
                  </div>
        </div>
    )
}

export default CommentForm
