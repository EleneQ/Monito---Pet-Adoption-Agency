import { Button } from "../";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "./Carousel";

const PetKnowledgeCarousel = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
      <p>You already Know?</p>
      <div className="capitalize flex items-center justify-between">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Useful pet knowledge
        </h2>
        <Button className={"hidden sm:flex"} outline={true}>
          View More
          <IoIosArrowForward />
        </Button>
      </div>
      <Carousel />
      <Button className={"more-btn-stretch mt-5 flex-1 sm:hidden"} outline>
        View More
        <IoIosArrowForward />
      </Button>
    </section>
  );
};

export default PetKnowledgeCarousel;
