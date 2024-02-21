import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { DogInfo, ItemPicture, ProductInfo } from "../types/types";

interface ItemPicturesProps {
  itemsInfo: DogInfo[] | ProductInfo[];
  itemId: string | undefined;
  itemName: string;
  itemPictures: ItemPicture[];
}

const ItemPictures = ({
  itemsInfo,
  itemId,
  itemName,
  itemPictures,
}: ItemPicturesProps) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const slidesLength = itemPictures.length;

  const currentItem = itemsInfo.find((item) => item.id === itemId);
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
      <div className="slider mx-auto | mb-3 relative flex justify-center overflow-hidden">
        <IoIosArrowBack
          className="arrow left"
          onClick={showPrev}
          alt="Previous Slide"
        />
        <IoIosArrowForward
          className="arrow right"
          onClick={showNext}
          alt="Next Slide"
        />

        <AnimatePresence key={currentImgIndex}>
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img
              style={{ borderRadius: "inherit" }}
              src={itemPictures[currentImgIndex].img}
              alt=""
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 items-center ml-3 sm:ml-0 overflow-hidden">
        {itemPictures.map((slide, index: number) => (
          <img
            className={`min-w-[60px] w-[100px] aspect-square object-cover rounded-lg cursor-pointer ${
              currentImgIndex === index ? "border-4 border-gold-3-accent" : ""
            }`}
            key={slide.id}
            src={slide.img}
            alt=""
            onClick={() => setCurrentImgIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemPictures;
