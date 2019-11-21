import React,{useContext,useEffect} from 'react'
import ProfileContext from '../../components/context/profile/ProfileContext';
import AuthProfileContext from '../../components/context/auth/AuthContext'
import AuthContext from '../../components/context/auth/AuthContext';


const Dashboard = (props) => {
    const profileContext = useContext(ProfileContext);
    const authContext = useContext(AuthContext);

    const {getCurrentProfile, profile} =profileContext

    useEffect(()=>{
        getCurrentProfile()
    },[])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
