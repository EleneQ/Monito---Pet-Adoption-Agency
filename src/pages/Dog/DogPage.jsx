import CustomerCarousel from "../../components/CustomerCarousel";
import DogProfile from "./DogProfile";
import Navbar from "../../components/Nav/Navbar";
import Footer from "../../components/Footer";
import { IoIosArrowBack } from "react-icons/io";

const DogPage = () => {
  return (
    <>
      <header>
        <nav className="relative">
          <IoIosArrowBack className="absolute md:hidden top-[2rem] left-[1.3rem] text-[1.6rem] p-1 bg-white sm:bg-black sm:opacity-20 sm:text-white bg-opacity-40 rounded-full z-50" />
        </nav>
      </header>
      <Navbar className={"hidden md:flex"} />

      <main>
        <DogProfile />
        <CustomerCarousel />
      </main>
      <Footer />
    </>
  );
};

export default DogPage;
