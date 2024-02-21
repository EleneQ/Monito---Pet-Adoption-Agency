import resolveConfig from "tailwindcss/resolveConfig";
import OneMoreFriend from "../../components/OneMoreFriend";
import { useFilters } from "../../hooks/useFilters";
import useWindowWidth from "../../hooks/useWindowWidth";
import { PuppyGroup } from "../../images";
import tailwindConfig from "../../../tailwind.config";

const CTADogs = () => {
  const { filters } = useFilters();

  const windowWidth = useWindowWidth();
  const { theme: twTheme } = resolveConfig(tailwindConfig);

  const isSmallScreen = windowWidth < parseInt(twTheme.screens.md);

  const formatColors = (colors: string[]): string => {
    if (colors.length >= 3) {
      return colors.slice(0, 3).join(", ") + "...";
    }
    return colors.join(", ");
  };

  return (
    <section className="max-width-center padding-x">
      <p className="capitalize text-gray-500 mb-3">
        <span>Home &gt; </span>

        {filters.gender && <span>{filters.gender} </span>}

        {filters.colors && filters.colors.length > 0 && (
          <span>&gt; {formatColors(filters.colors)} </span>
        )}
        {filters.size && <span>&gt; {filters.size}</span>}
      </p>

      <div>
        <div className="cta-dogs__container | pt-10 sm:pt-[2rem] px-[1rem] md:px-[1.5rem] lg:px-[2rem] rounded-2xl">
          <div className="order-last md:order-none">
            <img src={PuppyGroup} alt="a group of cute puppies" />
          </div>

          <OneMoreFriend
            className={
              "text-center md:text-right my-3 sm:mb-[2rem] md:mb-[4rem] text-primary-blue-9 md:text-white mx-auto"
            }
            introBtnVariant={`${
              isSmallScreen ? "outline" : "outline-secondary"
            }`}
            exploreBtnVariant={`${isSmallScreen ? "primary" : "secondary"}`}
          />
        </div>
      </div>
    </section>
  );
};

export default CTADogs;
