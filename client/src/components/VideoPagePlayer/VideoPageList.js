import React from 'react';
import VideoPageListItem from './VideoPageListItem';
import './style.css';

const VideoPageList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoPageListItem 
                onUserSelected={props.onVideoSelect}          
                key={video.etag} 
                video={video}
                 />
        );
    });

    return (
        <div className='video-page-list-container'>
        <ul className="video-page-list-group">
            {videoItems}
        </ul>
        </div>
    );
};

export default VideoPageList;