const applyFilters = (filters, setDogList, allDogs) => {
  let filteredDogs = [...allDogs];

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

const GenderOptions = ({ setFilters, setDogList, allDogs, setCurrentPage }) => {
  const handleGenderFilter = (e) => {
    const selectedGender = e.target.value;

    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        gender: selectedGender === prevFilters.gender ? null : selectedGender,
      };

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });

    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   gender: selectedGender === prevFilters.gender ? null : selectedGender,
    // }));
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

const ColorOptions = ({ setFilters, setDogList, allDogs, setCurrentPage }) => {
  const handleColorFilter = (e) => {
    const selectedColor = e.target.value;

    setFilters((prevFilters) => {
      const updatedColors = prevFilters.colors.includes(selectedColor)
        ? prevFilters.colors.filter((color) => color !== selectedColor)
        : [...prevFilters.colors, selectedColor];

      const newFilters = {
        ...prevFilters,
        colors: updatedColors,
      };

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });

    setCurrentPage(1);
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

const SizeOptions = ({ setFilters, setDogList, allDogs, setCurrentPage }) => {
  const handleSizeFilter = (e) => {
    const selectedSize = e.target.value;

    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        size: selectedSize === prevFilters.size ? null : selectedSize,
      };

      applyFilters(newFilters, setDogList, allDogs);
      return newFilters;
    });

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
  setFilters,
  setDogList,
  allDogs,
  setCurrentPage,
}) => {
  // useEffect(() => {
  //   applyFilters(filters, setDogList, allDogs);
  //   setCurrentPage(1);
  // }, [filters]);

  return (
    <section>
      <h2>Filter</h2>
      <GenderOptions
        setFilters={setFilters}
        setDogList={setDogList}
        allDogs={allDogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
      <ColorOptions
        setFilters={setFilters}
        setDogList={setDogList}
        allDogs={allDogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
      <SizeOptions
        setFilters={setFilters}
        setDogList={setDogList}
        allDogs={allDogs}
        setCurrentPage={setCurrentPage}
      />
      <hr />
    </section>
  );
};

export default FilterOptions;
