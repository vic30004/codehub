import React, { useContext,Fragment} from 'react'
import AuthContext from '../context/auth/AuthContext'
import './style.css'


const Form = ({ state, onChange, onClick }) => {
    const authContext = useContext(AuthContext)
    const { isAuthenticated } = authContext

    return (
    <Fragment>
        <div className='forum-post-wrapper'>
            {isAuthenticated ?
            <div>
                <h2>Have a question? Looking for some help? Want to share something?</h2>
                <h2>Post below using the field!</h2> 
                <form className='form-field'>
                    
                    <textarea className='textarea-field'
                        value={state.post}
                        name="post"
                        onChange={onChange}
                        placeholder="...topic"
                        cols="60" rows="5"
                    >
                    </textarea>
                    <div> <button className='forum-post-btn'
                        onClick={onClick}>Submit post
                </button></div>
                   

                </form>
           </div>: "" } 
        </div>
        </Fragment>

    )

}

export default Form