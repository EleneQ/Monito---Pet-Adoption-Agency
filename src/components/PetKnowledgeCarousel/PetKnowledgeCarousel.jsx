import { Card, Button } from "..";
import { IoIosArrowForward } from "react-icons/io";
import { petKnowledge } from "../../constants/data";
import "./carousel.css";

const PetKnowledgeCarousel = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
      <p>You already Know?</p>
      <div className="capitalize flex items-center justify-between mb-5">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Useful pet knowledge
        </h2>
        <Button className={"hidden sm:flex"} outline={true}>
          View More
          <IoIosArrowForward />
        </Button>
      </div>
      <ul className="carousel">
        {petKnowledge.map((knowledge) => (
          <li className="card" key={knowledge.id}>
            <Card className={"shadow-card-shadow"}>
              <div>
                <img
                  className="max-w-full rounded-lg"
                  src={knowledge.img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-[13px] bg-[#00A7E7] px-4 py-[0.2rem] max-w-fit rounded-[30px] mt-4 mb-2 text-white">
                  Pet knowledge
                </p>
                <h3 className="font-bold text-lg mb-1">{knowledge.title}</h3>
                <p className="cutoff-text">{knowledge.content}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <Button className={"more-btn-stretch mt-5 flex-1 sm:hidden"} outline>
        View More
        <IoIosArrowForward />
      </Button>
    </section>
  );
};
export default PetKnowledgeCarousel;
