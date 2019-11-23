import React from 'react'

const Comments = ({id,comment,deleteComment}) =>{
    

    return(
        <div>
<h5>{comment}</h5>
<button
    onClick={() => deleteComment(id)}>Delete</button></div>)
}

export default Comments

