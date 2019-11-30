import React, { Component } from 'react';
import VideoPageSearchBar from './VideoPageSearchBar';
import YTSearch from 'youtube-api-search';
import VideoPageList from './VideoPageList';
import VideoPageDetail from './VideoPageDetail';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';
// import API from '../../api'

// function AddVid(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="add-videos">
//     <div>test</div>
//     </div>
//   );
// }

class VideoPageApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
            // addVideo: true
        };

        // this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    componentDidMount() {
        this.videoSearch('Functional Programming');

    }


    // handleToggleClick() {
    //   this.setState(state => ({
    //     addVideo: !state.addVideo
    //   }));
    // }

    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm, maxResults: 20 }, (data) => {
            console.log(data);
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });

    }

    render() {
        return (
            //   <div className='video-page-wrapper'>
            //     <div className='header-wrapper'>
            //       <h1 className='container-header'>Search Videos</h1>
            //       <button type="button" onClick={this.handleToggleClick} className='more-btn'>+ more</button>
            //       </div>

            <div className='video-page-main-wrapper'>
                <div className='video-page-container'>
                    <div className='video-search-bar-container'>
                        <VideoPageSearchBar className='search-bar' onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
                    </div>
                    <VideoPageDetail video={this.state.selectedVideo} />
                    <div className='video-page-list-wrapper'>
                        <div className='video-page-list-container'>
                            <VideoPageList
                                onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
            //   </div>
        );
    }
}

export default VideoPageApp;
