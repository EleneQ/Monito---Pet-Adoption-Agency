import { useState, useRef } from "react";
import { customerCarouselImages } from "../constants/data/customerCarousel";
import useCalcDraggableWidth from "../hooks/useCalcDraggableWidth";
import { motion } from "framer-motion";

const CustomerCarousel = () => {
  const slider = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  const width = useCalcDraggableWidth(slider);

  const handleDotClick = (index) => {
    const newScrollDistance =
      index * (slider.current.offsetWidth / customerCarouselImages.length);

    setCurrentSlide(index);
    setScrollDistance(-newScrollDistance);
  };

  return (
    <section className="padding-x max-width-center mt-[3rem] ml-8">
      <h2 className="text-xl font-bold text-[#00171F] mb-5">
        Our lovely customers
      </h2>
      
      <div ref={slider} className="cursor-pointer overflow-hidden">
        <motion.ul
          className="inline-flex gap-5 md:gap-8 rounded-2xl"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: scrollDistance }}
          transition={{ damping: 5, stiffness: 100 }}
        >
          {customerCarouselImages.map((slide, index) => (
            <motion.li
              key={slide.id}
              className={`w-[160px] md:w-[180px] lg:w-[200px] rounded-xl ${
                currentSlide === index ? "border-4 border-gold-3-accent" : ""
              } `}
            >
              <img
                className="w-[100%] h-[100%] object-cover pointer-events-none select-none"
                style={{ borderRadius: "inherit" }}
                src={slide.img}
                loading="lazy"
                alt=""
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* dot indicators */}
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
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerCarousel;
