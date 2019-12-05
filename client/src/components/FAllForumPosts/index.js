import React, {useContext,useEffect} from 'react'
import FEachForumPost from '../FEachForumPost'
import AuthContext from '../context/auth/AuthContext'
import './style.css'


const Forums = ({getForms,posts }) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loadUser}=authContext;

    useEffect(()=>{
        if(localStorage.token){
             loadUser()
        //eslint-disabled-next-line 
        }
      
    },[])

    const forum =
        posts && posts.length > 0 ? posts.map(post => (
            <FEachForumPost
            posts={post}
            refresh={getForms}
       
            />
         

        )) : "no Data";
    

    return (
        <>
        {isAuthenticated ?  forum : <div className='empty-forum-display'>
            <h1>Please Login To Access Our Forums</h1>
            <div className="forum-login-btn"> <a href='/login'>Login Here</a></div>
        </div> }
  
        </>
    )
}

export default Forums


