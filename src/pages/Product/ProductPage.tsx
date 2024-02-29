import CustomerSlider from "../../components/CustomerSlider";
import ProductPictures from "./ProductPictures";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductInfo from "./ProductInfo";

const ProductPage = () => {
  return (
    <>
      <Navbar />

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
