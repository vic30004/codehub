import React, { Component } from 'react';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';
import Image1 from '../../assets/images/InnerBanner-webdevelopment.jpg';
import Image2 from '../../assets/images/web-development-banner.jpg';
import Image3 from '../../assets/images/Web-Development.jpg';
// const Image1 = 'https://blog.eduonix.com/wp-content/uploads/2016/11/Full-Stack.png';
// const Image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmmNYkmFMs6dhvpDt0i14COhlj3dFHL3nJt1pV5mJEwMKt8OA&s';
// const Image3 = 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8fe47e61-afe9-43e9-8b23-41a053701cd9/agibri19.png';

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