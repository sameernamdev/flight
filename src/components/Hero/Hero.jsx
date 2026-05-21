import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {

  const images = [
    "/img/img1.webp",
    "/img/img2.webp",
    "/img/img3.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // AUTO SLIDER
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1
          ? 0
          : prevSlide + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="hero">

      {/* IMAGE */}
      <img
        src={images[currentSlide]}
        alt="slider"
        className="hero-image"
      />

      {/* OVERLAY */}
      <div className="overlay">

        <h1>Explore The World</h1>

        <p>We give the best service</p>

      </div>

      {/* DOTS */}
      <div className="dots">

        {images.map((_, index) => (
          <span
            key={index}
            className={
              currentSlide === index
                ? "dot active-dot"
                : "dot"
            }
          ></span>
        ))}

      </div>

    </div>
  );
}

export default Hero;