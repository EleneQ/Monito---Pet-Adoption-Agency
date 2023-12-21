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
    const slideWidth = carousel.current.children[index].offsetWidth;
    const scrollCenter =
      index * slideWidth - (containerWidth - slideWidth) / 2 + 50;

    carousel.current.scrollTo({
      left: scrollCenter,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
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
