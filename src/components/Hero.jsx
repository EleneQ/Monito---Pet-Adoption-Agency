// import { HeroImg, BigRectangleBeige, BigRectangleBlue } from "../images";

// import { HeroImg, BigRectangleBeige, BigRectangleBlue } from "../images";
// import ViewButton from "./Buttons/ViewButton";
import { Button } from "./";
import { FaRegCirclePlay } from "react-icons/fa6";
// import HeroImg from "../images/Hero/Hero.png";

// const Hero = () => {
//   return (
//     <section className="hero-section | bg-primary-beige-gradient pt-[6rem] h-[650px] overflow-hidden">
//       <div className="hero-section__container | h-full px-p-x-md lg:px-p-x-lg">
//         <div className="max-w-max-width mx-auto">
//           {/** making the text absolute and setting z-index so that it shows up on TOP of the backfround images */}
//           <div className="hero-section_content | mt-[4rem] max-w-[30rem] absolute z-10">
//             <h1 className="font-bold flex flex-col text-5xl text-primary-blue-10 capitalize leading-[1.5em]">
//               One more friend
//               <span className="text-4xl font-semibold">
//                 Thousands more fun!
//               </span>
//             </h1>
//             <p className="mt-8">
//               Having a pet means you have more joy, a new friend, a happy person
//               who will always be with you to have fun. We have 200+ different
//               pets that can meet your needs!
//             </p>
//             <ViewButton>
//               View Intro
//               <FaRegCirclePlay />
//             </ViewButton>
//             <button className="mt-7 text-white bg-primary-blue-9 rounded-[60px] px-7 py-[0.6rem] font-medium">
//               Explore Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Hero = () => {
  return (
    <section className="bg-primary-beige-gradient pt-[6rem] h-[650px] overflow-hidden rounded-ee-[40px] rounded-es-[40px]">
      {/** the max-width is so that the content doesn't go too far apart on bigger screens */}
      <div className="hero-section__container | flex h-full px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
        <div className="hero-section_content | mt-3 sm:mt-[4rem] max-w-[30rem] absolute z-10">
          <h1 className="font-extrabold flex flex-col sm:gap-4 text-[2.35rem] sm:text-5xl text-primary-blue-10 capitalize">
            One more friend
            <span className="text-[1.73rem] sm:text-4xl font-bold">
              Thousands more fun!
            </span>
          </h1>
          <p className="text-sm sm:text-base mt-5 sm:mt-7">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="mt-5 md:mt-7 flex gap-6">
            <Button outline={true}>
              View Intro
              <FaRegCirclePlay />
            </Button>
            <Button primary={true}>Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
