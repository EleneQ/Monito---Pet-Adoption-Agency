import DogPicturesCarousel from "./DogPicturesCarousel";
import DogInfoDetails from "./DogInfoDetails";

const DogProfile = () => {
  return (
    <section className="md:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto md:mt-3">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[2.5rem] justify-center md:justify-normal md:p-4 md:rounded-2xl md:border-[1.6px] md:border-[#EBEEEF]">
        <DogPicturesCarousel />
        <DogInfoDetails />
      </div>
    </section>
  );
};

export default DogProfile;
