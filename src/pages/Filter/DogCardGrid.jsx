import { Link } from "react-router-dom";
import { useMemo } from "react";
import Card from "../../components/Card";
import { calcAge } from "../../utils/calcAge";

const CardGrid = ({ dogs }) => {
  const cachedAge = useMemo(() => calcAge, []);

  return (
    <div className="dog-list__card-grid | grid gap-y-4 md:grid-y-6 mb-[3rem]">
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
