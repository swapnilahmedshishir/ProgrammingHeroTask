import "./App.css";
import AboutMe from "./Component/AboutMe/AboutMe";
import ContactUs from "./Component/ContactUs/ContactUs";
import Experience from "./Component/Experience/Experience";
import Header from "./Component/Header/Header";
import Resume from "./Component/Resume/Resume";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Experience />
      <Resume />
      <ContactUs />
    </>
  );
}

export default App;
