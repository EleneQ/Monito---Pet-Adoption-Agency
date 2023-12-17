const GenderOptions = () => {
  return (
    <div>
      <h3>Gender</h3>
      <ul>
        <li>
          <label htmlFor="male">
            <input id="male" type="radio" name="gender" value="Male" />
            Male
          </label>
        </li>
        <li>
          <label htmlFor="female">
            <input id="female" type="radio" name="gender" value="Female" />
            Female
          </label>
        </li>
      </ul>
    </div>
  );
};

const ColorOptions = () => {
  return (
    <div>
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
            <span className="checkbox-circle"></span>
            Apricot
          </label>
        </li>
        <li>
          <label htmlFor="black">
            <input id="black" type="checkbox" name="black" value="Black" />
            <span className="checkbox-circle" style={{backgroundColor: "#242B33"}}></span>
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
            <span className="checkbox-circle"></span>
            Black And White
          </label>
        </li>
        <li>
          <label htmlFor="silver">
            <input id="silver" type="checkbox" name="silver" value="Silver" />
            <span className="checkbox-circle"></span>
            Silver
          </label>
        </li>
        <li>
          <label htmlFor="tan">
            <input id="tan" type="checkbox" name="tan" value="Black" />
            <span className="checkbox-circle"></span>
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

const FilterOptions = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-[3rem]">
      <h2>Filter</h2>
      <GenderOptions />
      <hr />
      <ColorOptions />
      <hr />
      <SizeOptions />
      <hr />
    </section>
  );
};

export default FilterOptions;
