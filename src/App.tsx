import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import WelcomePart from "./components/WelcomePart";
function App() {
  return (
   <div className="bg-[#C0C0C0]">
    <section>
    <NavBar/>
    </section>
  <section>
    <WelcomePart/>
  </section>
  <section>
    <Services/>
  </section>
  <section >
    <AboutUs/>
  </section>
  <section>
    <Portifolio/>
  </section>
  <section>
    <Skills/>
  </section>
  <section>
    <Footer/>
  </section>
   </div>
  );
}

export default App;
