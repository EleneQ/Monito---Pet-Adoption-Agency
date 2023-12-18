import {
  Navbar,
  Hero,
  DogsShowcase,
  CTABanner,
  ProductDisplay,
  CTAAdoption,
  PetKnowledgeCarousel,
  Footer,
  CTADogs,
  Filter,
} from "./components";

const App = () => {
  return (
    <>
      {/* <Navbar className={"primary-nav | absolute z-10"} />
      <Hero />
      <DogsShowcase />
      <CTABanner />
      <ProductDisplay />
      <CTAAdoption />
      <PetKnowledgeCarousel />
      <Footer /> */}
      <Navbar />
      <CTADogs />
      <Filter />
      <Footer />
    </>
  );
};
export default App;
