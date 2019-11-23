import React from 'react'


const Form = ({ state, onChange, onClick }) => {
    return (
        <div>
            <form>
                <label>Name</label>
                <input
                    value={state.name}
                    name="name"
                    onChange={onChange}
                    placeholder="Name Here"
                >
                </input>
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

        </div>
    )
}

export default Form