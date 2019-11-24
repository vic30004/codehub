import React, { Component } from 'react'
import FCreateForumPost from '../../components/FCreateForumPost'
import FAllForumPosts from '../../components/FAllForumPosts/index'
import api from '../../api'


class Forum extends Component {

    state = {
        name: "",
        post: "",
        posts: []
    }

    

    componentDidMount() {
        this.getForms()
    }

    getForms = async () => {

        const { data: savedPosts } = await api.getForms()
        console.log(savedPosts)
        this.setState({ posts: savedPosts.data, name: "", post: "" }, () => console.log(this.state.posts))
        
    }

    handleFormChange = ({ target }) => this.setState({ [target.name]: target.value });


    handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await api.submitForm({
                name: this.state.name,
                post: this.state.post,
                
            })
            this.getForms();            
        } catch (error) {
            console.warn(error)
        }
    }

    render() {
        return (
            <div>
                <FCreateForumPost
                    onChange={this.handleFormChange}
                    onClick={this.handleFormSubmit}
                    state={this.state}
                />
                <FAllForumPosts
                    getForms={this.getForms}
                    posts={this.state.posts} />
            </div>
        )
    }
}

export default Forum