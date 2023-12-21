import { useState } from "react";
import { dogPictureCarousel } from "../constants/data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DogPicturesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = dogPictureCarousel.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
  };

  if (dogPictureCarousel.length <= 0) {
    console.error("No dog pictures present in the dogPictureCarousel data");
    return null;
  }

  return (
    <div>
      <div className="slider | overflow-hidden mb-3">
        <IoIosArrowBack
          className="arrow left-arrow"
          onClick={prevSlide}
          alt="Previous Slide"
        />
        <IoIosArrowForward
          className="arrow right-arrow"
          onClick={nextSlide}
          alt="Next Slide"
        />

        {dogPictureCarousel.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide rounded-xl ${
              index === currentSlide ? "active" : ""
            }`}
          >
            {index === currentSlide && (
              <img
                className="slider-img"
                style={{ borderRadius: "inherit" }}
                src={slide.img}
                alt=""
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3 items-center overflow-hidden">
        {dogPictureCarousel.map((slide, index) => (
          <img
            className={`w-[100px] h-[100px] object-cover rounded-lg cursor-pointer ${
              currentSlide === index ? "border-4 border-[#f5bc50]" : ""
            }`}
            key={slide.id}
            src={slide.img}
            alt=""
            loading="lazy"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DogPicturesCarousel;
