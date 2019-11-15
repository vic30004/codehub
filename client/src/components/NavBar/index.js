import React, { Component } from 'react';
import './style.css';

class NavBar extends Component {

    render() {
        return (
            <div className='nav-wrapper'>
                <div className='nav-logo'>codeHub
           </div>
                <button className='nav-button'>join</button>
                <div className='nav-list'>
                    <ul className='nav-ul'>
                        <li className='nav-list-item'>
                            <a href>Videos</a>
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
                <button className='nav-upload-btn'>upload</button>
                <div>
                </div>
            </div>
        )
    }
}

export default NavBar;

