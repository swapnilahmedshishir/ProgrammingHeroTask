import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import HeroBannerImage from "./Component/Hero/HeroBannerImage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Players from "./Component/Players/Players";
import Footer from "./Component/Footer/Footer";

const App = () => {
  const [coin, setCoin] = useState(0);
  const handleCoinClick = () => {
    setCoin((prevBalance) => prevBalance + 5000000);
    toast.success("You’ve successfully claimed 5000000 coins!");
  };

  return (
    <>
      <header className="lg:px-24 container mx-auto">
        <Navbar coin={coin} />
      </header>
      <main className="lg:px-24 container mx-auto">
        <ToastContainer />
        <HeroBannerImage CoinClick={handleCoinClick} />
        <Players coin={coin} setCoin={setCoin} />
      </main>
      <footer className="bg-neutral mt-[17rem]">
        <Footer />
      </footer>
    </>
  );
};

export default App;
