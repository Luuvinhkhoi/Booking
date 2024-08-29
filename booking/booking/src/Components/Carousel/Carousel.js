import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../Main/Data";
import './Carousel.css'
export default function Carousel() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {data.map(item=>
            <div className="slider-item">
                <img src={item.imgSrc}></img>
                <span>{item.destTitle}</span>
            </div>
        )}
      </Slider>
    );
  }