import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import './style.css';

class NavBar extends Component {

    render() {
        return (
            <div className='nav-wrapper'>
                <Link to='/' className='nav-logo'>codeHub
           </Link>
           <Link className="nav-button" to='/register'>Register</Link>
                <div className='nav-list'>
                    <ul className='nav-ul'>
                        <li className='nav-list-item'>
                            <Link to='/videos'>Videos</Link>
                        </li>
                        <li className='nav-list-item'>
                            <a href>Articles</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href>Events</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href>Forum</a>
                        </li>

                        <li className='nav-list-item'>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-input'>
                <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Search videos, content and more..."
                />
                </div>
                <a className='nav-upload-btn'>upload</a>
                <div>
                </div>
            </div>
        )
    }
}

export default NavBar;

