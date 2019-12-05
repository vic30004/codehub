import React, { Component } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import img1 from '../../assets/images/Jeremy.jpg';
import img2 from '../../assets/images/Fred.jpeg';

// const img1 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9de04076-d795-40c9-ba72-35406342853e/eurostar19.jpg';
// const img2 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/37d3db7e-5762-4d22-974e-b9ca6bd1ee48/leaddevtx19.png';
const img3 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8fe47e61-afe9-43e9-8b23-41a053701cd9/agibri19.png';

class HomeEvents extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='event-wrapper'>

                <div className='header-wrapper'>
                    {/*<button className='more-btn'>+ more</button>*/}
                </div>
                <div className='event-slider-wrapper'>
                <div className='event-container'>
                <Slider
                    speed={500}
                    slidesToScroll={1}
                    slidesToShow={1}
                    infinite={true}
                    arrows={false}
                    // dots={true}
                    accessibility={true}
                    swipe={true}
                    autoplay={true}
                    autoplaySpeed={5000}
                >
                <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img1}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Jeremy Gilbert</h1>
                        <p className='event-description'>Salesforce System Admin at Liftoff Mobile. Studying Full stack web-development at Cal.</p>
                        </div>
                        </div>
                    <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img2}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Frederick Saba</h1>
                        <p className='event-description'>Full-Stack Developer with experience in Product Management & Production. Former professional tennis player.</p>
                        </div>
                        </div>
                    <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img3}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Victor Abu Akleh</h1>
                        <p className='event-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        </div>
                        <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img3}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Brian ?</h1>
                        <p className='event-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        </div>
                        <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img3}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Poonam ?</h1>
                        <p className='event-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        </div>
                </Slider>
                </div>
                <div className='founder-wrapper'>
                <h1 className='join'>Create community, grow your network.</h1>
                <hr className='founder-hr'/>
                <p className='invite'>Invite your team, wrangle feedback, share video files and get it done, faster.</p>
                </div>
                </div>
            </div>
        )
    }
}

export default HomeEvents;