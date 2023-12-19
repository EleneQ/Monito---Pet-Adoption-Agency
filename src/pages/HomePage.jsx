import {
  Navbar,
  Hero,
  DogsShowcase,
  CTABanner,
  ProductDisplay,
  CTAAdoption,
  PetKnowledgeCarousel,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar className={"primary-nav | absolute z-10"} />
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
