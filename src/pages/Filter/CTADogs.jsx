import OneMoreFriend from "../../components/OneMoreFriend";
import PuppyGroup from "../../images/CTADogs/PuppyGroup.png";

const CTADogs = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
      <div className="cta-dogs__container | bg-primary-beige-gradient pt-10 sm:pt-[2rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] rounded-2xl">
        <div className="order-last md:order-none">
          <img
            src={PuppyGroup}
            alt="a group of adorable puppies"
            loading="lazy"
          />
        </div>
        <OneMoreFriend
          className={"text-center md:text-right my-3 sm:mb-[2rem] md:mb-[4rem] text-white"}
        />
      </div>
    </section>
  );
};

export default CTADogs;
