import './App.css';
import { useState } from 'react';
import Slider from "react-slick";
import fenway from "./assets/fenway.jpg";
import minuteMaid from "./assets/minute-maid.jpg";
import pnc from "./assets/pnc.jpg";
import truist from "./assets/truist.jpg";
import yankee from "./assets/yankee.jpg";

const images = [fenway, minuteMaid, pnc, truist, yankee]

function App() {
  // react slick requires this settings object
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <prevArrow />
  }

  return (
    <div className="App">
      <Slider>
        {images.map((img, index)=>(
          <div>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
