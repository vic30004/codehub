import React from 'react';
import VideoPagePlayer from '../../components/VideoPagePlayer/VideoPagePlayer'
import './style.css';

class VideoPage extends React.Component {
    render() {
        return(
            <div className='video-wrapper'>
            <VideoPagePlayer/>
            </div>
        )
    }
}

export default VideoPage;