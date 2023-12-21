import { Navbar, Footer, DogProfile } from "../components";
import CustomerCarousel from "../components/CustomerCarousel";

const DogPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <DogProfile />
        {/* <CustomerCarousel /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default DogPage;
