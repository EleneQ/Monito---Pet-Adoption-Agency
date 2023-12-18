const applyFilters = (filters, setDogList, dogs) => {
  let filteredDogs = [...dogs];

  // Apply gender filter
  if (filters.gender) {
    filteredDogs = filteredDogs.filter(
      (dog) => dog.gender.toLowerCase() === filters.gender.toLowerCase()
    );
  }

  //Apply color filters
  if (filters.colors && filters.colors.length > 0) {
    filteredDogs = filteredDogs.filter((dog) =>
      filters.colors.every((color) => dog.colors.includes(color.toLowerCase()))
    );
  }

  // Apply size filter
  if (filters.size) {
    filteredDogs = filteredDogs.filter(
      (dog) => dog.size.toLowerCase() === filters.size.toLowerCase()
    );
  }

  setDogList(filteredDogs);
};

const GenderOptions = ({
  setGenderFilter,
  setDogList,
  dogs,
  setCurrentPage,
}) => {
  const handleGenderFilter = (e) => {
    const selectedGender = e.target.value;
    setGenderFilter(selectedGender);

    // Apply filtering based on all selected options
    applyFilters({ gender: selectedGender }, setDogList, dogs);
    setCurrentPage(1);
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
              onClick={handleGenderFilter}
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
              onClick={handleGenderFilter}
            />
            Female
          </label>
        </li>
      </ul>
    </div>
  );
};

const CheckboxCircle = ({ style }) => (
  <span className="checkbox-circle" style={style}></span>
);

const ColorOptions = ({
  setColorFilters,
  setDogList,
  dogs,
  setCurrentPage,
}) => {
  const handleColorFilter = (e) => {
    const selectedColor = e.target.value;

    setColorFilters((prevFilters) => {
      let colorFilters = [];

      if (prevFilters.includes(selectedColor)) {
        colorFilters = prevFilters.filter((color) => color !== selectedColor);
      } else {
        colorFilters = [...prevFilters, selectedColor];
      }

      // Apply filtering based on all selected options
      applyFilters({ colors: colorFilters }, setDogList, dogs);
      setCurrentPage(1);
      return colorFilters;
    });
  };

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
              onClick={handleColorFilter}
            />
            <CheckboxCircle style={{ backgroundColor: "#FFB672" }} />
            Apricot
          </label>
        </li>
        <li>
          <label htmlFor="black">
            <input
              id="black"
              type="checkbox"
              name="black"
              value="Black"
              onClick={handleColorFilter}
            />
            <CheckboxCircle style={{ backgroundColor: "#242B33" }} />
            Black
          </label>
        </li>
        <li>
          <label htmlFor="tricolor">
            <input
              id="tricolor"
              type="checkbox"
              name="tricolor"
              value="Tricolor"
              onClick={handleColorFilter}
            />
            <CheckboxCircle
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #242B33 0%, #242B33 52.59%, #D7D7D7 52.6%, #D2D2D2 100%)",
              }}
            />
            Tricolor
          </label>
        </li>
        <li>
          <label htmlFor="silver">
            <input
              id="silver"
              type="checkbox"
              name="silver"
              value="Silver"
              onClick={handleColorFilter}
            />
            <CheckboxCircle style={{ backgroundColor: "#CECECE" }} />
            Silver
          </label>
        </li>
        <li>
          <label htmlFor="tan">
            <input
              id="tan"
              type="checkbox"
              name="tan"
              value="Tan"
              onClick={handleColorFilter}
            />
            <CheckboxCircle style={{ backgroundColor: "#FFF7CE" }} />
            Tan
          </label>
        </li>
      </ul>
    </div>
  );
};

const SizeOptions = ({ setSizeFilter, setDogList, dogs, setCurrentPage }) => {
  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value;
    setSizeFilter(selectedSize);

    // Apply filtering based on all selected options
    applyFilters({ size: selectedSize }, setDogList, dogs);
    setCurrentPage(1);
  };

  return (
    <div>
      <h3>Size</h3>
      <ul>
        <li>
          <label htmlFor="small">
            <input
              id="small"
              type="radio"
              name="size"
              value="Small"
              onClick={handleSizeFilter}
            />
            Small
          </label>
        </li>
        <li>
          <label htmlFor="medium">
            <input
              id="medium"
              type="radio"
              name="size"
              value="Medium"
              onClick={handleSizeFilter}
            />
            Medium
          </label>
        </li>
        <li>
          <label htmlFor="large">
            <input
              id="large"
              type="radio"
              name="size"
              value="Large"
              onClick={handleSizeFilter}
            />
            Large
          </label>
        </li>
      </ul>
    </div>
  );
};

const FilterOptions = ({
  setGenderFilter,
  setColorFilters,
  setSizeFilter,
  setDogList,
  dogs,
  setCurrentPage,
}) => {
  return (
    <section>
      <h2>Filter</h2>
      <GenderOptions
        setGenderFilter={setGenderFilter}
        setDogList={setDogList}
        dogs={dogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
      <ColorOptions
        setColorFilters={setColorFilters}
        setDogList={setDogList}
        dogs={dogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
      <SizeOptions
        setSizeFilter={setSizeFilter}
        setDogList={setDogList}
        dogs={dogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
    </section>
  );
};

export default FilterOptions;
