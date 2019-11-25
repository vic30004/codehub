import React from 'react'
import {Link} from 'react-router-dom'

const DashboardActions = () => {
    return (
        <div className="dash-button">
            <Link to='/edit-profile'><i className="fas fa-user-circle"></i>Edit Profile</Link>
            <Link to='/experience'><i className="fas fa-black-tie"></i>Add Experience</Link>
            <Link to='/education'><i className="fas fa-graduation-cap"></i>Add Education</Link>
        </div>
    )
}

export default DashboardActions
