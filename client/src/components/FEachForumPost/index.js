import React, { Component } from 'react'
import api from '../../api'
import FComments from '../FComments'
import CommentLabel from '../FCommentLabels'
import moment from 'moment'
import './style.css'


class FEachForumPost extends Component {


    state = {
        comment: "",
        displayInput: false
    }

    addComment = async (id, comment) => {
        await api.addComment(id, comment)
        this.props.refresh()
        this.setState({ comment: "" })
    }

    commentUpdate = ({ target }) => this.setState({ [target.name]: target.value });

    handleCommentToggle = () => this.setState({ displayInput: !this.state.displayInput });

    deleteComment = async id => {
        try {
            await api.deleteComment(id)
            this.props.refresh()
        } catch (error) {
            console.warn(error)
        }
    }

    addLike = async id=> {
        try {
            await api.addLike(id)   
            this.props.refresh()
        } catch(err){
            console.warn(err)
        }
       
    }

    render() {
        console.log(this.props)
        const {_id,avatar,refresh,comments,date,likes,name,post} = this.props.posts

      
        return (<div className='each-forum-post-wrapper'>

            <div className='forum-user-post-wrapper'>

            <div className='forum-user-info'>
            <h1><img className ='forum-post-pic'src={avatar}></img></h1>
            <h3>{name} </h3>
            </div>
        
            <div className='forum-post-info'>
            <h3 className='forum-post-data'>{post}</h3>
            <div className='likes-date-like-grid'>
            <h4>Likes : {likes.length}</h4>
            <h4>Posted On : {moment(date).format('MM/DD/YYYY')}</h4>
            <button className='forum-like-btn' onClick={() => this.addLike(_id)}>Upvote</button>
            </div>
        
            </div>

            </div>
           
           
            <h2 className='comment-header'>Comments</h2>
            {comments && comments.length > 0 ?
                comments.map(({ post,name,date,avatar }) => (
               <FComments 
               commentName={name}
               commentBody={post}
               commentAvatar={avatar}
               commentDate={date}
               id={_id}
               deleteComment={this.deleteComment}
               />)) : <h5 className='no-comments-display'>There are no comments for this post. Click below to post!</h5>}

            <CommentLabel 
            refresh={refresh}
            activeComment={this.handleCommentToggle}
            state={this.state}
            onChange={this.commentUpdate}
            submitComment={this.addComment}
            id={_id}
            />
        </div>
        )

    }
}


export default FEachForumPost;