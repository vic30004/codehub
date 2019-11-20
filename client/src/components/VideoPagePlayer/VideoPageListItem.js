import React from 'react';
import './style.css'

const VideoPageListItem = (props) => {
    const video = props.video;
    const onUserSelected = props.onUserSelected;
    // console.log(video);    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (

        <div className='video-page-list-media-wrapper'>
    <li onClick={() => onUserSelected(video)} className="video-page-group-item">
        <div className="video-page-list media">
        <div className='video-page-media-list-wrapper'>
            <div className="video-page-media-left">
                <img className="video-page-media-object" src={imageUrl} />
            </div>
            <div className="video-page-media-body">
                <div className="video-page-media-heading">{video.snippet.title}</div>
                <div className='video-page-channel-detail'>{video.snippet.channelTitle}</div>
                <div className='video-page-main-detail'>{video.snippet.description}</div>
            </div>
        </div>
        </div>
    </li>
    </div>
    );
};

export default VideoPageListItem;