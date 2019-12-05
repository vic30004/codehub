import React from 'react'
import moment from 'moment'

const Comments = ({commentName,id,commentBody,commentAvatar,commentDate,deleteComment}) =>{
    

    return(
        <div>
<h5><img src={commentAvatar}></img>{commentName}commented{commentBody}</h5>
<h6>Commented At : {moment(commentDate).format('MM/DD/YYYY')}  </h6>

</div>)
}

export default Comments

