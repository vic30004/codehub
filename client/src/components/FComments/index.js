import React from 'react'
import moment from 'moment'
import './style.css'

const Comments = ({commentName,id,commentBody,commentAvatar,commentDate,deleteComment}) =>{
    

    return(
        <div className='each-comment-post-wrapper'>

            <div className='comment-user-info'>
            <h1><img className='comment-post-pic' src={commentAvatar}></img></h1>
            <h3>{commentName}</h3>
            </div>

            <div className='comment-post-info'>
            <h4>{commentBody}</h4>
            <h5>Commented On: {moment(commentDate).format('MM/DD/YYYY')}</h5>
            </div>



</div>)
}

export default Comments

