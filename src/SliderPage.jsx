import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/slider.css"

export default function Slider() {
  const location = useLocation();
  const { images, title } = location.state || { images: [], title: "No Title" };
  
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      <h2>{title}</h2>
      <div className="container">
        <div className="slider-container">
          <a
            className="prev"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </a>

          <div className="slider-img">
            <img src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
          </div>
          
          <a
            className="next"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </a>
        </div>
        <div className="row">
          {images.map((img, index) => (
            <img
              className={`demo cursor ${index === slideIndex ? "active" : ""}`}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => currentSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}