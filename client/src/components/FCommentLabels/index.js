import React from 'react'

const CommentLabel = ({activeComment,onChange,submitComment,state,id}) => {
    return(
        <div>
            <label onClick={activeComment}>Click to Add Comment</label>
            {
                state.displayInput && <div>
                    <input
                        name="comment"
                        value={state.comment}
                        placeholder="Comment Here"
                        onChange={onChange}
                    >
                    </input>
                    <br/>
                    <button
                        onClick={() => submitComment(id, {post:state.comment})}>Submit</button>
                    <hr></hr>
                </div>
            }
        </div>
    )
}

export default CommentLabel