import React from 'react'
import './style.css'

const CommentLabel = ({activeComment,onChange,submitComment,state,id}) => {
    return(
        <div className='entire-comment-form-wrapper'>
            <div className='comment-toggle-btn' onClick={activeComment}><h2>Click to add a comment</h2></div>
            {
                state.displayInput && <div>
                    <form className='form-field'>
                    <textarea
                        name="comment"
                        value={state.comment}
                        onChange={onChange}
                        placeholder="...comment"
                        cols="60" rows="5"
                    >
                    </textarea>
                    <br/>
                    <button
                        className ='forum-post-btn' onClick={() => submitComment(id, {post:state.comment})}>Submit Comment</button>
                  </form>
                </div>
            }
        </div>
    )
}

export default CommentLabel