import React,{useContext} from 'react'
import AuthContext from '../context/auth/AuthContext'


const Form = ({ state, onChange, onClick }) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated} = authContext

    return (
        <div>
        {isAuthenticated ? 
            <form>
                <label>Create a Forum Post Here</label>
                <input
                    value={state.post}
                    name="post"
                    onChange={onChange}
                    placeholder="Create a Forum Here"
                >
                </input>
                <button
                    onClick={onClick}>Submit post
                </button>

            </form>
: ''}
        </div>
    )
}

export default Form