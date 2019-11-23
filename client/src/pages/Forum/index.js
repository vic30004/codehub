import React, { Component } from 'react'
import Form from '../../components/FForm'
import Forums from '../../components/FSearchResults/index'
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
                <Form
                    onChange={this.handleFormChange}
                    onClick={this.handleFormSubmit}
                    state={this.state}
                />
                <Forums
                    getForms={this.getForms}
                    posts={this.state.posts} />
            </div>
        )
    }
}

export default Forum