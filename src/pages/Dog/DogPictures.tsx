import { useParams } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { RiShareLine } from "react-icons/ri";
import SocialLinks from "../../components/SocialLinks";
import { dogsInfo } from "../../constants/data/dogs";
import { DogImg, HeartImg } from "../../images";

const DogPictures = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { dogId } = useParams();

  const currentDog = dogsInfo.find((dog) => dog.id === dogId);

  if (!currentDog) {
    return <p>{"Dog not fount"}</p>;
  }

  const slidesLength = currentDog.images.length;
  const dogImg = currentDog.images[currentImgIndex];

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
      <div className="relative mx-auto mb-3 flex justify-center overflow-hidden">
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
              className="w-[550px] aspect-[1/0.9] object-cover"
              src={dogImg.img}
              alt={dogImg.desc}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center sm:justify-normal gap-3 items-center overflow-hidden">
        {currentDog.images.map((slide, index: number) => (
          <img
            key={slide.id}
            className={`min-w-[60px] w-[100px] aspect-square object-cover rounded-lg cursor-pointer ${
              currentImgIndex === index ? "border-4 border-gold-3-accent" : ""
            }`}
            src={slide.img}
            alt={slide.desc}
            onClick={() => setCurrentImgIndex(index)}
          />
        ))}
      </div>

      <div className="hidden md:flex gap-5 justify-between items-center text-[13.5px] font-bold text-primary-blue-9 py-2 px-4 bg-light-pink-gradient rounded-xl mt-4">
        <p className="flex gap-1">
          <img src={DogImg} alt="dog" />
          100% health guarantee for pets
        </p>
        <p className="flex gap-1">
          <img src={HeartImg} alt="dog" />
          100% guarantee of pet identification
        </p>
      </div>

      <div className="hidden md:flex mt-4">
        <div className="flex items-center justify-center gap-2 mr-5 text-primary-blue-9 font-semibold">
          <RiShareLine className="text-lg" />
          <p>Share:</p>
        </div>

        <SocialLinks className={"gap-5 text-[#99A2A5]"} iconSize={21} />
      </div>
    </div>
  );
};
export default DogPictures;
