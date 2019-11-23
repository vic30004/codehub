import React, {useContext,useEffect} from 'react'
import Posts from '../FForm'
import AuthContext from '../../components/context/auth/AuthContext'
import Forum from '../../pages/Forum'


const Forums = ({ posts, getForms }) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated,loadUser}=authContext;

    useEffect(()=>{
        loadUser()
        //eslint-disabled-next-line
    },[])

    const forum =
        posts && posts.length > 0 ? posts.map(({ _id, author, post, comments,likes }) => (
            // <Posts
            //     key={_id}
            //     getForms={getForms}
            //     id={_id}
            //     author={author}
            //     body={post}
            //     comments={comments}
            //     likes={likes}
            // />
            <Forum/>

        )) : "no Data";
    

    return (
        <>
        {isAuthenticated ?  forum : 'Please Register to view the forum' }
  
        </>
    )
}

export default Forums


