import { Card, Button } from ".";
import { IoIosArrowForward } from "react-icons/io";

const PetKnowledgeCarousel = () => {
  return (
    <section>
      <p>You already Know?</p>
      <div className="capitalize">
        <h2 className="text-lg">Useful pet knowledge</h2>
        <Button>View more</Button>
      </div>
      <ul className="carousel"></ul>
    </section>
  );
};
export default PetKnowledgeCarousel;
