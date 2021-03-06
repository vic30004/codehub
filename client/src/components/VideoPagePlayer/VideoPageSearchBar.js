import React from 'react';
import './style.css';

class VideoSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <div className="video-page-search-bar">
                <input               
                    value={this.state.term}
                    onChange={this.onInputChange}
                    placeholder="Search for something..." 
                />               
            </div>
        );        
    }

}

export default VideoSearchBar;