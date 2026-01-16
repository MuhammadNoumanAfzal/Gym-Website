import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavbarMenu } from "../mockData/data";
import { Link } from "react-scroll";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-black py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <FaDumbbell className="text-primary" />
          <p>
            Coders <span className="text-secondary">Gym</span>
          </p>
        </div>

        <ul className="hidden md:flex items-center gap-6 text-gray-400">
          {NavbarMenu.map(({ id, link, title }) => (
            <li key={id}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                className="py-1 px-3 hover:text-primary font-semibold transition-all duration-300 cursor-pointer"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {[CiSearch, IoCartOutline].map((Icon, index) => (
            <button
              key={index}
              className="text-2xl p-2 hover:bg-primary hover:text-white rounded-full transition-all duration-300"
            >
              <Icon />
            </button>
          ))}
          <button
            className="md:hidden text-2xl p-2 hover:text-primary transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-center py-4 absolute w-full left-0 top-16 z-50 shadow-lg">
          <ul>
            {NavbarMenu.map(({ id, link, title }) => (
              <li key={id} className="py-3 border-b border-gray-700">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-primary transition-all duration-300 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
