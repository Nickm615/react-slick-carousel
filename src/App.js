import './App.css';
import { useState } from 'react';
import Slider from "react-slick";
import fenway from "./assets/fenway.jpg";
import minuteMaid from "./assets/minute-maid.jpg";
import pnc from "./assets/pnc.jpg";
import truist from "./assets/truist.jpg";
import yankee from "./assets/yankee.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [fenway, minuteMaid, pnc, truist, yankee]

function App() {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick = {onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick = {onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  // react slick requires this settings object
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next)=> setImageIndex(next)
  }

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx)=>(
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
