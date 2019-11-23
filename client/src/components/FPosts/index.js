import React, { Component } from 'react'
import api from '../../api'
import Comments from '../FComments'
import CommentLabel from '../FCommentLabels'

class Post extends Component {

    constructor(props){
        super(props)
     

    }

    state = {
        comment: "",
        displayInput: false
    }

    addComment = async (id, comment) => {
        await api.addComment(id, comment)
        this.props.getForms()
        this.setState({ comment: "" })
    }

    commentUpdate = ({ target }) => this.setState({ [target.name]: target.value });

    handleCommentToggle = () => this.setState({ displayInput: !this.state.displayInput });

    deleteComment = async id => {
        try {
            await api.deleteComment(id)
            this.props.getForms()
        } catch (error) {
            console.warn(error)
        }
    }

    addLike = async id=> {
        try {
            await api.addLike(id)   
            this.props.getForms()
        } catch(err){
            console.warn(err)
        }
       
    }

    render() {
        console.log(this.props)
        const {_id,avatar,comments,date,likes,name,post} = this.props.posts

      
        return (<div>
            <h1>Written By : {name} <img src={avatar}></img></h1>
            <h1>The Post is : {post}</h1>
            <h2>Total Likes : {likes}</h2>
            <h2>Posted On : {date}</h2>
            <button onClick={() => this.addLike(_id)}>Upvote</button>

            <hr></hr>
            {/* <h2>Comments</h2>
            {comments && comments.length > 0 ?
                comments.map(({ comment, _id }) => (
               <Comments 
               key={_id}
               comment={comment}
               id={_id}
               deleteComment={this.deleteComment}
               />)) : <h5>"No Comments"</h5>}

            <CommentLabel 
            activeComment={this.handleCommentToggle}
            state={this.state}
            onChange={this.commentUpdate}
            submitComment={this.addComment}
            id={id}
            /> */}
        </div>
        )

    }
}


export default Post;