import Navbar from "../Navbar/Navbar";
import Hero from "./HeroSection/Hero";
import ProductSection from "./ProductSection/ProductSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Gadget Heaven </title>
      </Helmet>
      <Hero />
      <ProductSection />
    </div>
  );
};

export default Home;
