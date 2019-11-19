import React from 'react';
import './style.css';

const VideoDetail = (props) => {
    const video = props.video;
    
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="youtube-iframe-container">
                <iframe className="youtube-iframe" allowFullScreen='allowFullScreen' src={url}></iframe>
            </div>
            <div className="youtube-details">
                <div className='home-vid-title'>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;