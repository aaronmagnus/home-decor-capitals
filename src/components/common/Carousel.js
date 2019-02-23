import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 1,
      centerMode: true,
    };
    return (
      <Slider {...settings} className="n-carousel">
        {this.props.decorStyles.map((style) => (
          <div className="n-carousel__item">
            <img alt="" src="http://placekitten.com/g/40/40" />
            <span>{style}</span>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;