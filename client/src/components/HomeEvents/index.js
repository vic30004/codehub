import React, { Component } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import img1 from '../../assets/images/Jeremy.jpg';
import img2 from '../../assets/images/Fred.jpeg';
import img3 from '../../assets/images/Victor.jpg';
import img4 from '../../assets/images/Brian.JPG';
import img5 from '../../assets/images/Poonam.jpg';

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
                <div className='founder-wrapper'>
                <h1 className='join'>Create a community, grow your network.</h1>
                <hr className='founder-hr'/>
                <p className='invite'>Invite your team, wrangle feedback, build something incredible, and get it done, faster.</p>
                </div>
                <div className='event-container-wrapper'>
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
                        <p className='event-description'>Studying Full-Stack Web Development at Cal.</p>
                        </div>
                        </div>
                        <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img4}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Brian Bat</h1>
                        <p className='event-description'>Studying Full-Stack Web Development at Cal.</p>
                        </div>
                        </div>
                        <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img5}></img>
                        <div classname='event-description-wrapper'>
                        <h1 className='event-title'>Poonam Mehra</h1>
                        <p className='event-description'>Studying Full-Stack Web Development at Cal.</p>
                        </div>
                        </div>
                </Slider>
                </div>
                <div className='founder-join'>
                <h1 className='join-h1'>Join us!</h1>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HomeEvents;