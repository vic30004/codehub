import React from 'react'
import HomeVideos from '../../components/HomeVideos'
import HomeSlider from '../../components/HomeSlider'
import HomeEvents from '../../components/HomeEvents'
import YouTubeApp from '../../components/YouTubeApp/YouTubeApp'

import './style.css'


class Home extends React.Component {

    render() {
        return(<div className="home-wrapper">
            <HomeSlider />
            <YouTubeApp />
            {/*<HomeVideos />*/}
            <HomeEvents />

        </div>)
    }

}


export default Home