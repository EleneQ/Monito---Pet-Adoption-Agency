import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const ItemPictures = ({ itemsInfo, itemId, itemName, itemPictures }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const slidesLength = itemPictures.length;

  let currentItem = itemsInfo.find((item) => item.id === itemId);
  if (!currentItem) {
    return <p>{`${itemName} not fount`}</p>;
  }

  const showNext = () => {
    setCurrentImgIndex(
      currentImgIndex === slidesLength - 1 ? 0 : currentImgIndex + 1
    );
  };

  const showPrev = () => {
    setCurrentImgIndex(
      currentImgIndex === 0 ? slidesLength - 1 : currentImgIndex - 1
    );
  };

  return (
    <div>
      <div className="slider max-w-[550px] mx-auto | overflow-hidden mb-3">
        <IoIosArrowBack
          className="arrow left-arrow"
          onClick={showPrev}
          alt="Previous Slide"
        />
        <IoIosArrowForward
          className="arrow right-arrow"
          onClick={showNext}
          alt="Next Slide"
        />

        <AnimatePresence key={currentImgIndex}>
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="slider-img | object-cover"
              style={{ borderRadius: "inherit" }}
              src={itemPictures[currentImgIndex].img}
              alt=""
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 items-center ml-3 sm:ml-0 overflow-hidden">
        {itemPictures.map((slide, index) => (
          <img
            className={`min-w-[60px] w-[100px] aspect-square object-cover rounded-lg cursor-pointer ${
              currentImgIndex === index ? "border-4 border-gold-3-accent" : ""
            }`}
            key={slide.id}
            src={slide.img}
            alt=""
            loading="lazy"
            onClick={() => setCurrentImgIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemPictures;