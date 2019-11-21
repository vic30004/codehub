import React from 'react';
import './style.css';

const VideoPageDetail = (props) => {
    const video = props.video;
    
    if(!video){
        return <div>Loading...</div>;
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-page-detail">
            <div className="video-page-iframe-container">
                <iframe className="video-page-iframe" allowFullScreen='allowFullScreen' src={url}></iframe>
            </div>
            <div className="video-page-details">
                <div className='video-page-main-vid-title'>{video.snippet.title}</div>
                <div className='video-page-main-detail'>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoPageDetail;