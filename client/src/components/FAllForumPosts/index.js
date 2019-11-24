import React, {useContext,useEffect} from 'react'
import FEachForumPost from '../FEachForumPost'
import AuthContext from '../context/auth/AuthContext'



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
        {isAuthenticated ?  forum : 'Please Register to view the forum' }
  
        </>
    )
}

export default Forums


