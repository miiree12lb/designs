import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./css/slider.css";

export default function Slider() {
  const location = useLocation();
  const { images, title } = location.state || { images: [], title: "No Title" };

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomContainerRef = useRef(null);
  const zoomResultRef = useRef(null);
  const zoomImgRef = useRef(null);

  // Function to go to next or previous slide
  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setSlideIndex(newIndex);
  };

  // Function to select a specific slide
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
    <h2>{title}</h2>
    <div className="slider-page">
      <div className="slider-container">
        <div className="slider-container-container">
          <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>

          {images.map((img, index) => (
            <div
              className={`slider-image ${index === slideIndex ? "show" : ""}`}
              key={index}
            >
              <img src={img} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
            </div>
          ))}

          <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>
        </div>

        <div className="row">
          {images.map((img, index) => (
            <div className="column" key={index}>
              <img
                className={`demo cursor ${index === slideIndex ? "active" : ""}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                style={{ width: "100%" }}
                onClick={() => currentSlide(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
