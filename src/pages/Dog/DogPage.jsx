import CustomerSlider from "../../components/CustomerSlider";
import DogPictures from "./DogPictures";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DogInfo from "./DogInfo";

const DogPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="md:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto md:mt-3">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-[2.5rem] justify-center md:justify-normal md:p-4 md:rounded-2xl md:border-[1.6px] md:border-[#EBEEEF]">
            <DogPictures />
            <DogInfo />
          </div>
        </section>

        <CustomerSlider />
      </main>
      
      <Footer />
    </>
  );
};

export default DogPage;
