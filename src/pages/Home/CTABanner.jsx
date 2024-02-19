import OneMoreFriend from "../../components/OneMoreFriend";
import { GirlHoldingDog } from "../../images";

const CTABanner = () => {
  return (
    <section className="max-width-center padding-x my-12">
      <div className="cta-banner__container | bg-primary-blue-9 pt-10 sm:pt-[4rem] px-[1rem] md:px-[1.5rem] lg:pl-2 lg:pr-[6rem] rounded-2xl">
        <OneMoreFriend
          className={
            "one-more-friend | relative text-primary-blue-9 sm:max-w-[27rem] text-center lg:text-right md:pb-[3rem] z-10 mx-0"
          }
          introBtnVariant="outline"
          exploreBtnVariant="primary"
        />
        <div className="relative">
          <img
            className="cta-banner__img | place-self-end"
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
