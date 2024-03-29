import OneMoreFriend from "../../components/OneMoreFriend";
import { HeroImg } from "../../images";

const Hero = () => {
  return (
    <section className="bg-primary-beige-gradient pt-[6rem] h-[650px] overflow-hidden rounded-ee-[40px] rounded-es-[40px]">
      <div className="hero-section__container | h-full padding-x max-width-center">
        <OneMoreFriend
          className={
            "hero-section_content | text-primary-blue-10 mt-3 sm:mt-[2rem] md:mt-[4rem]"
          }
          introBtnVariant="outline"
          exploreBtnVariant="primary"
        />
        <div className="h-full relative">
          <img
            className="hero-img | h-full"
            src={HeroImg}
            alt="a woman holding a cute dog and smiling"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
