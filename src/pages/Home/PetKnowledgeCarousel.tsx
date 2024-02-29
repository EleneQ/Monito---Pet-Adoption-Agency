import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import React, { TouchEvent, useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { petKnowledge } from "../../constants/data/petKnowledge";
import Button from "../../components/Button";

interface ViewMoreButtonProps {
  className: string;
}

const ViewMoreButton = ({ className }: ViewMoreButtonProps) => {
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
  const carouselRef = useRef<HTMLUListElement>(null);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [firstCardWidth, setFirstCardWidth] = useState(0);

  //get 1st card width
  useEffect(() => {
    const calculateFirstCardWidth = () => {
      if (!carouselRef.current) return;

      const firstCard = carouselRef.current.querySelector(
        ".card"
      ) as HTMLDivElement;
      setFirstCardWidth(firstCard.offsetWidth);
    };
    calculateFirstCardWidth();

    window.addEventListener("resize", calculateFirstCardWidth);
    return () => window.removeEventListener("resize", calculateFirstCardWidth);
  }, []);

  const dragStart = (
    e:
      | React.MouseEvent<HTMLUListElement, MouseEvent>
      | TouchEvent<HTMLUListElement>
  ) => {
    if (!carouselRef.current) return;
    const touch = "touches" in e ? e.touches[0] : e;

    setIsDragging(true);
    setStartX(touch.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (
    e:
      | React.MouseEvent<HTMLUListElement, MouseEvent>
      | TouchEvent<HTMLUListElement>
  ) => {
    if (!isDragging || !carouselRef.current) return;
    const touch = "touches" in e ? e.touches[0] : e;

    const mousePosDiff = touch.pageX - startX;
    carouselRef.current.scrollLeft = startScrollLeft - mousePosDiff;
  };

  const scroll = (value: -1 | 1) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += firstCardWidth * value;
    }
  };

  return (
    <section className="max-width-center padding-x mt-10">
      <p>You already Know?</p>
      <div className="capitalize flex items-center justify-between">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Useful pet knowledge
        </h2>

        <ViewMoreButton className={"hidden sm:flex"} />
      </div>

      {/* Carousel */}
      <div className="w-full relative">
        <IoIosArrowRoundBack
          id="left"
          className="arrow-btn"
          onClick={() => scroll(-1)}
        />

        <ul
          ref={carouselRef}
          className={`pet-knowledge-carousel ${isDragging ? "dragging" : ""}`}
          onMouseDown={dragStart}
          onTouchStart={dragStart}
          onMouseMove={dragging}
          onTouchMove={dragging}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {petKnowledge.map((info) => (
            <Card key={info.id} className="card">
              <li>
                <img
                  className="w-full h-[245px] rounded-lg object-cover pointer-events-none"
                  src={info.img}
                  alt=""
                />

                <div>
                  <p className="text-[13px] bg-[#55a7c7] px-4 py-[0.2rem] max-w-fit rounded-[30px] mt-4 mb-2 text-white">
                    Pet knowledge
                  </p>
                  <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                  <p className="cutoff-text">{info.content}</p>
                </div>
              </li>
            </Card>
          ))}
        </ul>

        <IoIosArrowRoundForward
          id="right"
          className="arrow-btn"
          onClick={() => scroll(1)}
        />
      </div>

      <ViewMoreButton className={"more-btn-stretch mt-5 flex-1 sm:hidden"} />
    </section>
  );
};

export default PetKnowledgeCarousel;
