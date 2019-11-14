import React, { Component } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import Image1 from '../../assets/images/InnerBanner-webdevelopment.jpg';
import Image2 from '../../assets/images/web-development-banner.jpg';
import Image3 from '../../assets/images/Web-Development.jpg';

class Hero extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='slider-wrapper'>
                <Slider
                    speed={500}
                    slidesToScroll={1}
                    slidesToShow={1}
                    infinite={true}
                    dots={true}
                    arrows={false}
                    accessibility={true}
                    swipe={true}
                    autoplay={true}
                    autoplaySpeed={5000}
                >
                    <div className='slider-page'>
                        <img className='slider-img' id='slider-img' src={Image1}></img>
                    </div>
                    <div className='slider-page'>
                        <img className='slider-img' id='slider-img' src={Image2}></img>
                    </div>
                    <div className='slider-page'>
                        <img className='slider-img' id='slider-img' src={Image3}></img>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Hero;