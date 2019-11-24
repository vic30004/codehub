import React, { Component } from 'react'
import api from '../../api'
import Comments from '../FComments'
import CommentLabel from '../FCommentLabels'

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

      
        return (<div>
            <h1><img src={avatar}></img></h1>
            <h1>Written By : {name} </h1>
            <h1>The Post is : {post}</h1>
            <h2>Total Likes : {likes.length}</h2>
            <h2>Posted On : {date}</h2>
            <button onClick={() => this.addLike(_id)}>Upvote</button>

            <hr></hr>
            <h2>Comments</h2>
            {comments && comments.length > 0 ?
                comments.map(({ post,name,date,avatar }) => (
               <Comments 
               commentName={name}
               commentBody={post}
               commentAvatar={avatar}
               commentDate={date}
               id={_id}
               deleteComment={this.deleteComment}
               />)) : <h5>"No Comments"</h5>}

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