import React, { Component } from 'react';
import './style.css';

const text = '/';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer-container'>
                <ul>
                    <li className='footer-list-item'>
                    <h4>text</h4>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'> 
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                </ul>
                <ul>
                    <li className='footer-list-item'>
                    <h4>text</h4>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                </ul>
                <ul>
                    <li className='footer-list-item'>
                    <h4>text</h4>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                </ul>
                <ul>
                    <li className='footer-list-item'>
                    <h4>text</h4>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                    <li className='footer-list-item'>
                        <a href={text}>text</a>
                    </li>
                </ul>
                <div className='footer-aside'>
                <h4>text</h4>
                    <p className='footer-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
            </div>
        )
    }
}
export default Footer;