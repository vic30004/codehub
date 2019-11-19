import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';


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

class YouTubeApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
      // addVideo: true
    };
    
    this.videoSearch('React Tutorials');
    // this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  // handleToggleClick() {
  //   this.setState(state => ({
  //     addVideo: !state.addVideo
  //   }));
  // }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm, maxResults: 6 }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });      
    });

  }
  
  render() {
    return (
      <div className='you-tube-wrapper'>
        <div className='header-wrapper'>
          <h1 className='container-header'>Search Videos</h1>
          <button type="button" onClick={this.handleToggleClick} className='more-btn'>+ more</button>
          </div>
        <div className='you-tube-vid-container'>
          <SearchBar className='search-bar' onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default YouTubeApp;
