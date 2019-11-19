import React from 'react';
import VideoListItem from './video_list_item';
import './style.css';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}          
                key={video.etag} 
                video={video}
                 />
        );
    });

    return (
        <div className='youtube-list-container'>
        <ul className="youtube-list-group">
            {videoItems}
        </ul>
        </div>
    );
};

export default VideoList;