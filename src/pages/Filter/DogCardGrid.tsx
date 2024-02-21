import { Link } from "react-router-dom";
import { useMemo } from "react";
import Card from "../../components/Card";
import { calcAge } from "../../utils/calcAge";
import { DogInfo } from "../../types/entities/Dogs";

interface CardGridProps {
  dogs: DogInfo[];
}

const CardGrid = ({ dogs }: CardGridProps) => {
  const cachedAge = useMemo(() => calcAge, []);

  return (
    <div className="dog-list__card-grid | grid gap-y-4 md:grid-y-6 mb-[3rem]">
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <Card
            className={"cursor-pointer h-full"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="mb-4">
              <img
                className="w-full object-cover max-h-[250px]"
                src={dog.img}
                alt=""
              />
            </div>
            <h3 className="font-bold mb-2 text-[17px]">{`${dog.name} - ${dog.breed}`}</h3>
            <p className="text-slate-500 text-[15px] md:text-base flex flex-col sm:block">
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
