import Hero from "./Hero";
import ProductDisplay from "./ProductDisplay";
import CTAAdoption from "./CTAAdoption";
import DogsShowcase from "./DogsShowcase";
import CTABanner from "./CTABanner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PetKnowledgeCarousel from "./PetKnowledgeCarousel";

const HomePage = () => {
  return (
    <>
      <Navbar className={"primary-nav | absolute z-[10000]"} />

      <main>
        <Hero />
        <DogsShowcase />
        <CTABanner />
        <ProductDisplay />
        <CTAAdoption />
        <PetKnowledgeCarousel />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
