import React, {useContext,useEffect} from 'react'
import Posts from '../FPosts'
import AuthContext from '../../components/context/auth/AuthContext'



const Forums = ({ posts }) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loadUser}=authContext;

    useEffect(()=>{
        loadUser()
        //eslint-disabled-next-line
    },[])

    const forum =
        posts && posts.length > 0 ? posts.map(post => (
            <Posts
            posts={post}
       
            />
         

        )) : "no Data";
    

    return (
        <>
        {isAuthenticated ?  forum : 'Please Register to view the forum' }
  
        </>
    )
}

export default Forums


