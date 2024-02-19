import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "./Carousel";
import Button from "../../../components/Button";

const ViewMoreButton = ({ className }) => {
  return (
    <Link to={"filters"}>
      <Button className={className} variant="outline">
        View More
        <IoIosArrowForward />
      </Button>
    </Link>
  );
};

const PetKnowledgeCarousel = () => {
  return (
    <section className="max-width-center padding-x mt-10">
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
