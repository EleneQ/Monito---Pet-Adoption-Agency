import { useEffect, useRef, useState } from "react";
import Card from "../../../components/Card";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { petKnowledge } from "../../../constants/data/petKnowledge";
import { motion } from "framer-motion";
import useCalcDraggableWidth from "../../../hooks/useCalcDraggableWidth";
import "./carousel.css";

const Carousel = () => {
  const carouselRef = useRef();
  const width = useCalcDraggableWidth(carouselRef);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  //get card width on window resize
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelector(".card");
        if (card) {
          const cardWidth = card.clientWidth;
          setCardWidth(cardWidth);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    const newScrollDistance = Math.max(scrollDistance - (cardWidth + 25), 0);
    setScrollDistance(newScrollDistance);
  };

  const scrollRight = () => {
    const containerWidth = carouselRef.current.clientWidth;
    const scrollWidth = carouselRef.current.scrollWidth;
    const maxScrollDistance = scrollWidth - containerWidth;

    const newScrollDistance = Math.min(
      scrollDistance + (cardWidth + 25),
      maxScrollDistance
    );
    setScrollDistance(newScrollDistance);
  };

  return (
    <div className="relative">
      <IoIosArrowRoundBack
        id="left"
        className="arrow-btn"
        size={20}
        onClick={scrollLeft}
      />
      <div ref={carouselRef} className="cursor-pointer overflow-hidden">
        <motion.ul
          className="inline-flex gap-5 md:gap-8 rounded-2xl"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: -scrollDistance }}
          transition={{ damping: 5, stiffness: 100 }}
        >
          {petKnowledge.map((info) => (
            <Card
              className="card | w-[330px] md:w-[300px] rounded-xl"
              key={info.id}
            >
              <motion.li style={{ borderRadius: "inherit" }}>
                <img
                  className="w-full rounded-lg object-cover pointer-events-none select-none"
                  src={info.img}
                  alt=""
                  loading="lazy"
                />
                <div>
                  <p className="text-[13px] bg-[#00A7E7] px-4 py-[0.2rem] max-w-fit rounded-[30px] mt-4 mb-2 text-white">
                    Pet knowledge
                  </p>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="cutoff-text">{info.content}</p>
                </div>
              </motion.li>
            </Card>
          ))}
        </motion.ul>
      </div>
      <IoIosArrowRoundForward
        id="right"
        className="arrow-btn"
        onClick={scrollRight}
      />
    </div>
  );
};

export default Carousel;
