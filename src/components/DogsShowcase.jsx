import { useMemo } from "react";
import { dogs } from "../constants/data";
import Card from "./Card";
import { Button } from "./";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import classnames from "classnames";

const ViewMoreButton = ({ className }) => {
  const classes = classnames(className);

  return (
    <Link to={"filters"}>
      <Button className={classes} outline>
        View More
        <IoIosArrowForward />
      </Button>
    </Link>
  );
};

const DogsShowcase = () => {
  //calculate age by birthdate
  const cachedAge = useMemo(
    () => (birthdate) => {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();

      // Adjust age if the birthday hasn't occurred yet this year
      if (currentDate.getMonth() > birthDate.getMonth()) {
        const ageInMonths = currentDate.getMonth() - birthDate.getMonth();
        return `${ageInMonths} month${ageInMonths > 1 ? "s" : ""}`;
      }

      const age = currentDate.getFullYear() - birthDate.getFullYear();
      return `${age} years`;
    },
    []
  );

  return (
    <section className="dogs-showcase | font-roboto capitalize padding-x max-width-center mt-12 md:mt-[4.5rem] flex flex-col md:block">
      <p className="normal-case">Who's new?</p>
      <div className="flex items-center justify-between mb-5 md:mb-8">
        <h2 className="text-primary-blue-10 text-[1.2rem] sm:text-2xl font-bold">
          Take a look at some of our pets
        </h2>
        <ViewMoreButton className={"hidden sm:flex"} />
      </div>
      <div className="card__grid | grid gap-y-4 md:grid-y-6">
        {dogs.slice(0, 8).map((dog) => (
          <Card key={dog.id}>
            <div className="mb-4">
              <img
                className="max-w-full rounded-lg"
                src={dog.img}
                alt=""
                loading="lazy"
              />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
            <p className="text-slate-500 text-[13px] md:text-base flex flex-col sm:block">
              {`Gender: ${dog.gender} \u00B7 `}
              <span>{`Age: ${cachedAge(dog.birthdate)}`}</span>
            </p>
          </Card>
        ))}
      </div>
      <ViewMoreButton className={"more-btn-stretch mt-5 flex-1 sm:hidden"} />
    </section>
  );
};

export default DogsShowcase;
