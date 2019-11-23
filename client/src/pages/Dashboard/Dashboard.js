import React,{useContext,useEffect,Fragment} from 'react'
import ProfileContext from '../../components/context/profile/ProfileContext';
import AuthProfileContext from '../../components/context/auth/AuthContext'
import AuthContext from '../../components/context/auth/AuthContext';
import {Link} from 'react-router-dom'
import ProfilePage from '../ProfilePage/ProfilePage'


const Dashboard = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext);

    const {getCurrentProfile, profile} =profileContext
    const{user} = authContext

    useEffect(()=>{
        getCurrentProfile()
    },[])

    return (
        <div>
            <h1>Dashboard </h1>
            <p>
       <i className="fas fa-user"></i>Welcome{user && user.data.name} </p>

        {profile !== null  ? <Fragment><ProfilePage/></Fragment>: <Fragment>
            <p>Welcome to codehub! We are so happy you decided to join. Please follow this link to set up your profile!</p>
            <Link to="/create-profile">Create Profile </Link>
            </Fragment>}
       </div>
    )
}

export default Dashboard
