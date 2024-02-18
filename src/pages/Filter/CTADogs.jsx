import OneMoreFriend from "../../components/OneMoreFriend";
import { useFilters } from "../../context/FiltersContext";
import { PuppyGroup } from "../../images";

const CTADogs = () => {
  const { filterValues } = useFilters();

  return (
    <section>
      <p className="capitalize px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto text-gray-500 mb-3">{`Home > ${filterValues.join(
        " > "
      )}`}</p>

      <div className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto">
        <div className="cta-dogs__container | pt-10 sm:pt-[2rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] rounded-2xl">
          <div className="order-last md:order-none">
            <img
              src={PuppyGroup}
              alt="a group of adorable puppies"
              loading="lazy"
            />
          </div>
          {/* small screen */}
          <OneMoreFriend
            className={
              "md:hidden text-center md:text-right my-3 sm:mb-[2rem] md:mb-[4rem] text-primary-blue-9"
            }
            introBtnVariant={"outline"}
            exploreBtnVariant={"primary"}
          />

          {/* big screen */}
          <OneMoreFriend
            className={
              "hidden md:block text-center md:text-right my-3 sm:mb-[2rem] md:mb-[4rem] text-white"
            }
            introBtnVariant={"outline-secondary"}
            exploreBtnVariant={"secondary"}
          />
        </div>
      </div>
    </section>
  );
};

export default CTADogs;
