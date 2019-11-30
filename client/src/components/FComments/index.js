import React from 'react'

const Comments = ({commentName,id,commentBody,commentAvatar,commentDate,deleteComment}) =>{
    

    return(
        <div>
<h5><img src={commentAvatar}></img>{commentName}commented{commentBody}</h5>
<h6>Commented At : {commentDate}</h6>
{/* <button onClick={() => deleteComment(id)}>Delete</button> */}
</div>)
}

export default Comments

