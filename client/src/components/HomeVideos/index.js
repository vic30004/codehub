import React, { Component } from 'react';
import './style.css';

// const KEY = 'AIzaSyD0CnCwP7x0CBn_gmfoCr1b-7YZpf2a9Ho';
// const ChannelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
// const Result = 10;

// var FinalURL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&channelId=${ChannelID}&part=snippet,id&sortorder=data&maxResults=${Result}`;

const vid1 = 'qvBZevK1HPo';
const vid2 = '7CqJlxBYj-M';
const vid3 = 'Wp6Z2wVyPeY';
const vid4 = 'Law7wfdg_ls';
const vid5 = 'G8uL0lFFoN0';
const vid6 = 'wi-MGFhrad0';
const vid7 = 'NCwa_xi0Uuc';
const vid8 = 'SWZ_4YBFBhs';

// https://www.googleapis.com/youtube/v3/search?key=

class TopVideos extends Component {
    // componentWillMount() {
    //     this.fetchPlaylistData();
    // }
    // fetchPlaylistData = async () => {
    //     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&channelId=${ChannelID}&part=snippet,id&sortorder=data&maxResults=${Result}`);
    //     const json = await response.json();
    //     this.setState({ videos: json['items'] });
    //     console.log(this.state.videos)
    // };
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         resultyt: []
    //     };

    // }

    render() {
        // console.log(FinalURL)
        // const videos = this.state.videos;
        return (
            <div className='video-wrapper'>

                <div className='header-wrapper'>
                    <h1 className='container-header'>Top Videos</h1>
                     <button className='more-btn'>+ more</button>
                </div>
                <div className='video-container'>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid1}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid2}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid3}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid4}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid5}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid6}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid7}`} />
                    </div>
                    <div className="video">
                        <iframe className='iframe' frameBorder="0" src={`https://www.youtube.com/embed/${vid8}`} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopVideos;