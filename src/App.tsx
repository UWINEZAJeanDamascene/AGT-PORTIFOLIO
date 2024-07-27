import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
  <>
 <div className="bg-[#162b40]">
 <NavBar/>
 <Routes>
    <Route path="/" element={<Layout/>}>
  <Route path="" element={<Home/>}/>
    <Route path="About-us" element={<AboutUs/>}/>
    <Route path="portifolio" element={<Portifolio/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="skills" element={<Skills/>}/>
    </Route>
  </Routes>
 </div>
  </>
  );
}

export default App;
