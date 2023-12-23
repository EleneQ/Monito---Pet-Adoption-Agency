import { useMemo } from "react";
import classnames from "classnames";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardGrid = ({ dogs, className }) => {
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

  const classes = classnames(className, "grid gap-y-4 md:grid-y-6");

  return (
    <div className={classes}>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <Card
            className={"cursor-pointer"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="mb-4">
              <img className="max-w-full" src={dog.img} alt="" loading="lazy" />
            </div>
            <h3 className="font-bold mb-2 text-sm md:text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
            <p className="text-slate-500 text-[13px] md:text-base flex flex-col sm:block">
              {`Gender: ${dog.gender} \u00B7 `}
              <span>{`Age: ${cachedAge(dog.birthdate)}`}</span>
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardGrid;
