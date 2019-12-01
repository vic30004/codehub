import React,{useEffect,useContext} from 'react';
import VideoPagePlayer from '../../components/VideoPagePlayer/VideoPagePlayer'
import './style.css';
import AuthContext from '../../components/context/auth/AuthContext';

const VideoPage = ()=>{

    const authContext = useContext(AuthContext)
    const {isAuthenticated,user,loadUser} =authContext

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
  }, []);
        return(
            <div className='video-wrapper'>
            <VideoPagePlayer/>
            </div>
        )
    
}

export default VideoPage;