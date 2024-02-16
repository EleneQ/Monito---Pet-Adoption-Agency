import { useRef, useEffect } from "react";
import Card from "../../../components/Card";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { petKnowledge } from "../../../constants/data/petKnowledge";
import "./carousel.css";

const Carousel = () => {
  const carouselRef = useRef();

  useEffect(() => {
    const carousel = carouselRef.current;
    
    const arrowBtns = document.querySelectorAll(".arrow-btn");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;

    const computedStyles = window.getComputedStyle(carousel);
    const gap = parseInt(computedStyles.gap);

    let isDragging = false,
      startX,
      startScrollLeft;

    // arrow buttons
    arrowBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const scrollAmount =
          btn.id === "left" ? -firstCardWidth - gap : firstCardWidth + gap;

        carousel.scrollTo({
          left: carousel.scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      });
    });

    // scrolling behaviour
    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");

      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    return () => {
      arrowBtns.forEach((btn) => {
        btn.removeEventListener("click", () => {});
      });

      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, []);

  return (
    <div className="carousel-container">
      <IoIosArrowRoundBack id="left" className="arrow-btn" size={20} />
      <ul ref={carouselRef} className="carousel rounded-3xl">
        {petKnowledge.map((knowledge) => (
          <Card className={"card h-full"} key={knowledge.id}>
            <li>
              <img
                className="w-full rounded-lg"
                src={knowledge.img}
                alt=""
                loading="lazy"
              />
              <div>
                <p className="text-[13px] bg-[#00A7E7] px-4 py-[0.2rem] max-w-fit rounded-[30px] mt-4 mb-2 text-white">
                  Pet knowledge
                </p>
                <h3 className="font-bold text-lg mb-1">{knowledge.title}</h3>
                <p className="cutoff-text">{knowledge.content}</p>
              </div>
            </li>
          </Card>
        ))}
      </ul>
      <IoIosArrowRoundForward id="right" className="arrow-btn" />
    </div>
  );
};

export default Carousel;
