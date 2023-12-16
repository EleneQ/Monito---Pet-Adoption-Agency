import { OneMoreFriend } from "./";
import GirlHoldingDog from "../images/CTABanner/GirlHoldingDog.png";

const CTABanner = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-12 mb-12">
      <div className="cta-banner__container | bg-slate-500 pt-6 sm:pt-[2.5rem] px-[1rem] md:px-[3rem] rounded-2xl z-10 grid items-center justify-center grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-0">
        <OneMoreFriend className={"text-center lg:text-right md:pb-[3rem]"} />
        <img
          className="aspect-[1/0.75] place-self-center lg:place-self-end lg:order-first absolute"
          src={GirlHoldingDog}
          alt="a woman holding up a cute dog"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CTABanner;
