import React,{useContext,useEffect} from 'react'
import HomeVideos from '../../components/HomeVideos'
import HomeSlider from '../../components/HomeSlider'
import HomeEvents from '../../components/HomeEvents'
import YouTubeApp from '../../components/YouTubeApp/YouTubeApp'
import AuthContext from '../../components/context/auth/AuthContext'
import './style.css'


const Home = () => {
    const authContext = useContext(AuthContext);
    const {loadUser} = authContext

    useEffect(()=>{
        if(localStorage.token){
              loadUser()
        //eslint-disabled-next-line
        }
      
    },[])

        return(<div className="home-wrapper">
            <HomeSlider />
            <YouTubeApp />
            {/*<HomeVideos />*/}
            <HomeEvents />

        </div>)

}


export default Home