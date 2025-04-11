import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fr from "../assets/fr.jpeg";
import so from "../assets/so.jpeg";
import jr from "../assets/jr.jpeg";
import sr from "../assets/Sr.jpeg";

const images = [fr, so, jr, sr];

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="w-full flex justify-center items-center py-10 px-[50px]">
      <div className="w-full max-w-sm"> {/* slightly smaller than md */}
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full aspect-square object-cover rounded-xl shadow-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;
