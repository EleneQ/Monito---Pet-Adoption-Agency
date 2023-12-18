import { dogs } from "../../constants/data";

const GenderOptions = ({ setFilter, setDogList }) => {
  const handleFilter = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);

    setDogList(
      dogs.filter(
        (dog) => dog.gender.toLowerCase() === e.target.value.toLowerCase()
      )
    );
  };

  return (
    <div>
      <h3>Gender</h3>
      <ul>
        <li>
          <label htmlFor="male">
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onClick={handleFilter}
            />
            Male
          </label>
        </li>
        <li>
          <label htmlFor="female">
            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
              onClick={handleFilter}
            />
            Female
          </label>
        </li>
      </ul>
    </div>
  );
};

// const CheckboxCircle = ({ color }) => {
//   const style = {
//     "--color": color || "#ffb672",
//   };
//   return <span className="checkbox-circle" style={style}></span>;
// };

const CheckboxCircle = ({ style }) => (
  <span className="checkbox-circle" style={style}></span>
);

const ColorOptions = () => {
  return (
    <div className="color-options">
      <h3>Color</h3>
      <ul>
        <li>
          <label htmlFor="apricot">
            <input
              id="apricot"
              type="checkbox"
              name="apricot"
              value="Apricot"
            />
            <CheckboxCircle style={{ backgroundColor: "#FFB672" }} />
            Apricot
          </label>
        </li>
        <li>
          <label htmlFor="black">
            <input id="black" type="checkbox" name="black" value="Black" />
            <CheckboxCircle
              style={{
                backgroundColor: "#242B33",
              }}
            />
            Black
          </label>
        </li>
        <li>
          <label htmlFor="black-and-white">
            <input
              id="black-and-white"
              type="checkbox"
              name="black-and-white"
              value="Black And White"
            />
            <CheckboxCircle
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #242B33 0%, #242B33 52.59%, #D7D7D7 52.6%, #D2D2D2 100%)",
              }}
            />
            Black And White
          </label>
        </li>
        <li>
          <label htmlFor="silver">
            <input id="silver" type="checkbox" name="silver" value="Silver" />
            <CheckboxCircle
              style={{
                backgroundColor: "#CECECE",
              }}
            />
            Silver
          </label>
        </li>
        <li>
          <label htmlFor="tan">
            <input id="tan" type="checkbox" name="tan" value="Black" />
            <CheckboxCircle
              style={{
                backgroundColor: "#FFF7CE",
              }}
            />
            Tan
          </label>
        </li>
      </ul>
    </div>
  );
};

const SizeOptions = () => {
  return (
    <div>
      <h3>Size</h3>
      <ul>
        <li>
          <label htmlFor="small">
            <input id="small" type="radio" name="size" value="Small" />
            Small
          </label>
        </li>
        <li>
          <label htmlFor="medium">
            <input id="medium" type="radio" name="size" value="Medium" />
            Medium
          </label>
        </li>
        <li>
          <label htmlFor="large">
            <input id="large" type="radio" name="size" value="Large" />
            Large
          </label>
        </li>
      </ul>
    </div>
  );
};

const FilterOptions = ({ setFilter, setDogList }) => {
  return (
    <section>
      <h2>Filter</h2>
      <GenderOptions setFilter={setFilter} setDogList={setDogList} />
      <hr />
      <ColorOptions />
      <hr />
      <SizeOptions />
      <hr />
    </section>
  );
};

export default FilterOptions;
