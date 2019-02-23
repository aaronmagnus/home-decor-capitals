import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import '../../styles/Carousel.css';

class Carousel extends Component {
  constructor() {
    super();
    this.passDecorStyle = this.passDecorStyle.bind(this);
  }

  passDecorStyle(decorStyle){
    console.log(decorStyle);
  }

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
        {this.props.decorStyles.map((decorStyle) => (
          <div
            className={
              this.props.activeDecorStyle === decorStyle.toLowerCase() ? "n-carousel__item n-carousel__item--active" : "n-carousel__item"
            }
            onClick={this.passDecorStyle(decorStyle)}
          >
            <img alt="" src="http://placekitten.com/g/40/40" />
            <span>{decorStyle}</span>
          </div>
        ))}
      </Slider>
    );
  }
}

export default Carousel;