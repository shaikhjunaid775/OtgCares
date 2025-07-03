import { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "/logo.svg"
import { Outlet } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [designDropdown, setDesignDropdown] = useState(false);
  const [magazineDropdown, setMagazineDropdown] = useState(false);

  const magazineItems = [
    { title: "Room Ideas", link: "/in/magazine/type/rooms" },
    {
      title: "Decor & Inspiration",
      link: "/in/magazine/category/decor-and-inspiration",
    },
    { title: "Ceiling Design", link: "/in/magazine/category/ceiling-design" },
    { title: "Furniture Ideas", link: "/in/magazine/category/furniture" },
    { title: "Home Decor", link: "/in/magazine/category/home-decor" },
    { title: "Lighting Ideas", link: "/in/magazine/category/lighting" },
    { title: "Wall Design Ideas", link: "/in/magazine/category/wall-design" },
    { title: "Expert Advice", link: "/in/magazine/category/expert-advice" },
    { title: "Interior Advice", link: "/in/magazine/category/interior-design" },
    { title: "Vastu Tips", link: "/in/magazine/category/vastu" },
  ];

  const designIdeas = [
    { title: "Modular Kitchen Designs", link: "" },
    { title: "Wardrobe Designs", link: "" },
    { title: "Bathroom Designs", link: "" },
    { title: "Master Bedroom Designs", link: "" },
    { title: "Living Room Designs", link: "" },
    { title: "Pooja Room Designs", link: "" },
    { title: "TV Unit Designs", link: "" },
    { title: "False Ceiling Designs", link: "" },
    { title: "Kids Bedroom Designs", link: "" },
    { title: "Balcony Designs", link: "" },
    { title: "Dining Room Designs", link: "" },
    { title: "Foyer Designs", link: "" },
    { title: "Homes by Livspace", link: "" },
    { title: "Home Office Designs", link: "" },
    { title: "Guest Bedroom Designs", link: "" },
    { title: "Window Designs", link: "" },
    { title: "Flooring Designs", link: "" },
    { title: "Wall Decor Designs", link: "" },
    { title: "Wall Paint Designs", link: "" },
    { title: "Home Wallpaper Designs", link: "" },
    { title: "Tile Designs", link: "" },
    { title: "Study Room Designs", link: "" },
    { title: "Kitchen Sinks", link: "" },
    { title: "Space Saving Designs", link: "" },
    { title: "Door Designs", link: "" },
    { title: "Staircase Designs", link: "" },
    { title: "Crockery Units", link: "" },
    { title: "Home Bar Designs", link: "" },
  ];

  const navItems = [
    "How it works",
    "Offerings",
    "Price Calculators",
    "The Modular Journey",
    "Refer a Friend",
    "Own a franchise",
  ];
  return (
    <>
      <div className="w-full font-sans">
        {/* Top Navbar */}
        <header className="w-full shadow-md bg-white fixed top-0 z-50">
          <div className="px-4 sm:px-5 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} className="w-[200px] h-[40px]" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6 items-center text-md text-gray-700 relative font-semibold">
              <div className="flex items-center gap-1 cursor-pointer  ">
                Interiors <FaChevronDown className="text-xs" />
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer relative"
                onMouseEnter={() => setDesignDropdown(true)}
                onMouseLeave={() => setDesignDropdown(false)}
              >
                Design Ideas <FaChevronDown className="text-xs" />
                {/* Dropdown */}
                {designDropdown && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg  rounded-md grid grid-cols-3 gap-3 p-4 max-w-[800px] min-w-[300px] w-[600px] z-50">
                    {designIdeas.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <a
                          href={item.link}
                          className="text-sm text-gray-700 hover:text-red-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="flex items-center gap-1 cursor-pointer relative"
                onMouseEnter={() => setMagazineDropdown(true)}
                onMouseLeave={() => setMagazineDropdown(false)}
              >
                Magazine <FaChevronDown className="text-xs" />
                {magazineDropdown && (
                  <ul className="absolute top-10 left-0 bg-white shadow-lg  rounded-md grid grid-cols-3 gap-3 p-4 max-w-[800px] min-w-[300px] w-[600px] z-50">
                    {magazineItems.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <a
                          href={item.link}
                          className="text-sm text-gray-700 hover:text-red-500"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                Livspace TV
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                Livspace Portfolio
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                About us
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                Contact us
              </div>
              {/* <div className="flex items-center gap-1 cursor-pointer">
                More <FaChevronDown className="text-xs" />
              </div> */}
            </nav>
            <div className="hidden lg:flex items-center gap-1 cursor-pointer">
              <FaUserCircle className="text-xl" />
              <FaChevronDown className="text-xs" />
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenuAlt3 className="text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-white px-5 py-4 shadow-md">
              <ul className="space-y-3 text-gray-700 text-lg font-semibold">
                <li className=" pb-2 flex items-center justify-between cursor-pointer">
                  Interiors
                </li>
                <li className=" pb-2 flex flex-col">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setDesignDropdown(!designDropdown)}>
                    <span>Design Ideas</span>
                    <FaChevronDown className={`text-xs transition-transform ${designDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  {designDropdown && (
                    <ul className="pl-4 pt-2  max-h-[70vh] overflow-y-auto">
                      {designIdeas.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <a href={item.link} className=" text-gray-700 hover:text-red-500">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className=" pb-2 flex flex-col">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setMagazineDropdown(!magazineDropdown)}>
                    <span>Magazine</span>
                    <FaChevronDown className={`text-xs transition-transform ${magazineDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  {magazineDropdown && (
                    <ul className="pl-4 pt-2">
                      {magazineItems.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <a href={item.link} className="text-sm text-gray-700 hover:text-red-500">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className=" pb-2 flex items-center justify-between cursor-pointer">
                  Livspace TV
                </li>
                <li className=" pb-2 flex items-center justify-between cursor-pointer">
                  Livspace Portfolio
                </li>
                <li className=" pb-2 flex items-center justify-between cursor-pointer">
                  About us
                </li>
                <li className=" pb-2 flex items-center justify-between cursor-pointer">
                  Contact us
                </li>
                <li className="mt-2 flex items-center gap-2 text-gray-600">
                  <FaUserCircle /> Profile
                </li>
              </ul>
            </div>
          )}
        </header>

    
      </div>
      <Outlet />
    </>
  );
}

export default Header;
