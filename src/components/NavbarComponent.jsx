import React, { useEffect, useState } from "react";
import burgerMenuOpen from "../assets/burger_menu.svg";
import burgerMenuClose from "../assets/burger_menu_close.svg";
import logoTHT from "../assets/LOGO_THT_3.svg";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [dropDown, setDropdown] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  //   console.log(scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`shadow-md ${
        scrollY >= 22 ? "bg-orange-500" : "bg-white/10 backdrop-blur-md"
      } fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY >= 22 ? "h-15" : "h-[80px]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
        <div className="relative flex h-full items-center justify-between ">
          {/* Burger menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setDropdown(!dropDown)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={dropDown}
            >
              <span className="sr-only">Toggle menu</span>

              <img
                className="w-9 text-white "
                src={dropDown ? burgerMenuClose : burgerMenuOpen}
                alt="Menu"
              />
            </button>
          </div>

          {/* Logo + Navigation (desktop) */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center">
              <img
                className="h-10 w-24 md:h-13 md:w-30 "
                src={logoTHT}
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex h-full items-center space-x-4">
                <Link
                  to="/"
                  className={`rounded-md px-3 py-2 text-sm md:text-[16px] font-medium text-white ${
                    scrollY >= 22
                      ? "hover:bg-orange-600"
                      : "hover:bg-white/10 hover:backdrop-blur-md"
                  } hover:text-white`}
                >
                  Contact
                </Link>
                <Link
                  to="/team"
                  className="rounded-md px-3 py-2 text-sm md:text-[16px] font-medium text-white hover:bg-orange-600 hover:text-white"
                >
                  Team
                </Link>
                <Link
                  to="/projects"
                  className="rounded-md px-3 py-2 text-sm md:text-[16px] font-medium text-white hover:bg-orange-600 hover:text-white"
                >
                  Projects
                </Link>
                <Link
                  to="/calendar"
                  className="rounded-md px-3 py-2 text-sm md:text-[16px] font-medium text-white hover:bg-orange-600 hover:text-white"
                >
                  Calendar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {dropDown && (
        <div>
          <div
            className={`sm:hidden h-auto shadow-xl ${
              scrollY >= 22 ? "bg-orange-500" : "bg-white "
            }`}
            id="mobile-menu"
          >
            <div className="space-y-1 px-2 pt-2 pb-3 ">
              <Link
                to="/Contact"
                className={`block rounded-md ${
                  scrollY >= 22
                    ? "hover:bg-orange-600"
                    : "hover:bg-white/10 hover:backdrop-blur-md"
                } px-3 py-2 text-base font-medium text-white`}
              >
                <p className={`${
              scrollY >= 22 ? "bg-orange-500" : "bg-white text-black"}`}>Contact</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
