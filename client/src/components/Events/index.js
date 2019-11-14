import React, { Component } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const img1 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9de04076-d795-40c9-ba72-35406342853e/eurostar19.jpg';
const img2 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/37d3db7e-5762-4d22-974e-b9ca6bd1ee48/leaddevtx19.png';
const img3 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8fe47e61-afe9-43e9-8b23-41a053701cd9/agibri19.png';

class Events extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='event-wrapper'>

                <div className='header-wrapper'>
                    <h1 className='container-header'>Events</h1>
                    <button className='more-btn'>+ more</button>
                </div>
                <div className='event-container'>
                <Slider
                    speed={500}
                    slidesToScroll={1}
                    slidesToShow={1}
                    infinite={true}
                    arrows={true}
                    accessibility={true}
                    swipe={true}
                    autoplay={false}
                    autoplaySpeed={5000}
                >
                <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img1}></img>
                        <p>text here</p>
                    </div>
                    <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img2}></img>
                        <p>text here</p>
                    </div>
                    <div className='event-slider-page'>
                        <img className='event-slider-img' id='slider-img' src={img3}></img>
                        <p>text here</p>
                    </div>
                </Slider>
                </div>
            </div>
        )
    }
}

export default Events;