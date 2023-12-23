import { OneMoreFriend } from "./";
import GirlHoldingDog from "../images/CTABanner/GirlHoldingDog.png";

const CTABanner = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto my-12">
      <div className="cta-banner__container | bg-primary-blue-9 pt-10 sm:pt-[4rem] px-[1rem] md:px-[1.5rem] lg:pl-2 lg:pr-[6rem] rounded-2xl">
        <OneMoreFriend
          className={
            "txt | text-primary-blue-9 sm:max-w-[27rem] text-center lg:text-right md:pb-[3rem] z-10 mx-0"
          }
        />
        <div className="img">
          <img
            className="place-self-end"
            src={GirlHoldingDog}
            alt="a woman holding up a cute dog"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
