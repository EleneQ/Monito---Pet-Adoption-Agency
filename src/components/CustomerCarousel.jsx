import { useState, useEffect, useRef } from "react";
import { customerCarouselImages } from "../constants/data";

const CustomerCarousel = () => {
  const carousel = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(false);
  const [startScrollLeft, setStartScrollLeft] = useState(false);

  const dragStartHandler = (e) => {
    setIsDragging(true);

    setStartX(e.pageX);
    setStartScrollLeft(carousel.current.scrollLeft);
  };

  const draggingHandler = (e) => {
    if (!isDragging) return;
    carousel.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStopHandler = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", dragStopHandler);
    return () => {
      document.removeEventListener("mouseup", dragStopHandler);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);

    const containerWidth = carousel.current.offsetWidth;
    const slideWidth = carousel.current.children[0].offsetWidth;
    const scrollCenter =
      index * slideWidth - (containerWidth - slideWidth) / 2 + 50;

    carousel.current.scrollTo({
      left: scrollCenter,
      behavior: "smooth",
    });
  };

  return (
    <section className="padding-x max-width-center mt-[3rem] ml-8">
      <h2 className="text-xl font-bold text-[#00171F] mb-5">
        Our lovely customers
      </h2>
      <div
        ref={carousel}
        className={`flex gap-2 select-none overflow-x-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-pointer"
        }`}
        onMouseDown={dragStartHandler}
        onMouseMove={draggingHandler}
      >
        {customerCarouselImages.map((slide) => (
          <img
            key={slide.id}
            className="max-w-[220px] rounded-xl object-cover pointer-events-none select-none"
            src={slide.img}
            loading="lazy"
            alt=""
          />
        ))}
      </div>
      <div>
        <div className="flex gap-3 justify-center items-center mt-5">
          {customerCarouselImages.map((slide, index) => (
            <span
              className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
                index === currentSlide
                  ? "bg-primary-blue-9 w-[25px]"
                  : "bg-[#CCD1D2]"
              } `}
              key={slide.id}
              onClick={() => {
                goToSlide(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
