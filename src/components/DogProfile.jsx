import DogPicturesCarousel from "./DogPicturesCarousel";
import DogInfoDetails from "./DogInfoDetails";

const DogProfile = () => {
  return (
    <section className="px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto mt-3">
      <div className="flex gap-[2.5rem] p-4 rounded-2xl border-[1.6px] border-[#EBEEEF]">
        <DogPicturesCarousel />
        <DogInfoDetails />
      </div>
    </section>
  );
};

export default DogProfile;
