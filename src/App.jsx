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
  FilterOptions,
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
      <FilterOptions />
      {/* <Footer /> */}
    </>
  );
};
export default App;
