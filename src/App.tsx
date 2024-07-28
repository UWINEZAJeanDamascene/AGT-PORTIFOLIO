import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
  <>
  
 <div className="bg-[#0C252BDE]">
 <NavBar/>
 <Routes>
    <Route path="/" element={<Layout/>}>
  <Route path="" element={<Home/>}/>
    <Route path="About-us" element={<AboutMe/>}/>
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
