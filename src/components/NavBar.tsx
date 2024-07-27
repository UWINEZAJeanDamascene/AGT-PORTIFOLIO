import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  return (
    <div className="bg-[#123] box-border">
      <div className="w-full flex justify-between items-center">
        <div className="pl-10 flex top-0 max-sm:hidden text-gray-300 z-50 sticky">
          <h1><NavLink to="/">JAY-WINN</NavLink></h1>
        </div>

        <div>
          <nav className="flex justify-end items-end mr-3 p-3 text-white text-clip font-serif max-sm:hidden">
            <ul className="flex gap-4">
              <li>
                <NavLink to="/" className="hover:text-red-400">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-red-400">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:text-red-400">About-us</NavLink>
              </li>
              <li>
                <NavLink to="/portifolio" className="hover:text-red-400">Portifolio</NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-red-400">Skills</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="top-0 max-sm:block pl-10  text-gray-300  hidden z-50 sticky">
        <div className="pl-2 flex justify-between items-center">
          <h1>JAY-WINN</h1>
          <div className="">
            <button
              className="text-2xl"
              onClick={() => setMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faBars} className="text-white mr-4" />
            </button>
          </div>
        </div>
        {showMenu && (
          <nav className="max-sm:block bg-[#123] font-serif text-white">
            <ul className="flex flex-col p-2">
              <li>
                <NavLink to="/" className="hover:text-red-400">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-red-400">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" className="hover:text-red-400">About-us</NavLink>
              </li>
              <li>
                <NavLink to="/portifolio" className="hover:text-red-400">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/skills" className="hover:text-red-400">Skills</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default NavBar;

