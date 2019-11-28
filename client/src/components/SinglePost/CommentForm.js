import React, {useState,useContext} from 'react'
import PostsContext from '../context/posts/PostsContext'


const CommentForm = ({postId}) => {
    const [text,setText] = useState('')
    const postsContext = useContext(PostsContext);

    const {addComment} = postsContext

    return (
        <div>
            <div className='post-comment'>
            <h3>Comment</h3>

            <form action="" onSubmit={e=>{
                e.preventDefault();
                addComment({text},postId);
                setText('')
              }}>
                    <textarea
                      name='text'
                      placeholder='Add a Comment'
                      id=''
                      value={text}
                      cols='100'
                      rows='5'
                      onChange={e => setText(e.target.value)}
                    ></textarea>
                    <button>Post</button>
                    </form>
                  </div>
        </div>
    )
}

export default CommentForm
