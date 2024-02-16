import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "./Carousel";
import Button from "../../../components/Button";

const ViewMoreButton = ({ className }) => {
  return (
    <Link to={"filters"}>
      <Button className={className} outline>
        View More
        <IoIosArrowForward />
      </Button>
    </Link>
  );
};

const PetKnowledgeCarousel = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
      <p>You already Know?</p>
      <div className="capitalize flex items-center justify-between">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Useful pet knowledge
        </h2>
        <ViewMoreButton className={"hidden sm:flex"} />
      </div>
      <Carousel />
      <ViewMoreButton className={"more-btn-stretch mt-5 flex-1 sm:hidden"} />
    </section>
  );
};

export default PetKnowledgeCarousel;
