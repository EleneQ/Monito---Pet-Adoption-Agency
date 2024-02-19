import CustomerSlider from "../../components/CustomerSlider";
import ProductPictures from "./ProductPictures";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductInfo from "./ProductInfo";
import { IoIosArrowBack } from "react-icons/io";

const ProductPage = () => {
  return (
    <>
      <div>
        <div className="relative">
          <IoIosArrowBack className="absolute md:hidden top-[2rem] left-[1.3rem] text-[1.6rem] p-1 bg-white sm:bg-black sm:opacity-20 sm:text-white bg-opacity-40 rounded-full z-50" />
        </div>
        <Navbar className={"hidden md:flex"} />
      </div>

      <main>
        <section className="max-width-center padding-x md:mt-3">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-[2.5rem] justify-center md:justify-normal md:p-4 md:rounded-2xl md:border-[1.6px] md:border-[#EBEEEF]">
            <ProductPictures />
            <ProductInfo />
          </div>
        </section>

        <CustomerSlider />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
