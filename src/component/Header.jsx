import { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "/logo.svg"
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [designDropdown, setDesignDropdown] = useState(false);
  const [magazineDropdown, setMagazineDropdown] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [mobileDesignDropdown, setMobileDesignDropdown] = useState(false);
  const [mobileMagazineDropdown, setMobileMagazineDropdown] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;

  const handleMenu = (e) => {
    setProfileMenu((prev) => !prev)
    console.log(profileMenu)
  }

  const loggedinUser = true

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

  const handleSignup = () => {
    navigate('/register')
  }

  // For dropdown highlight
  const isPortfolioActive = currentPath === "/portfolio";
  const isAboutActive = currentPath === "/about";
  const isContactActive = currentPath === "/contact";
  const isOTGTvActive = currentPath === "/OTGTv";
  const isDesignIdeasActive = designIdeas.some(item => item.link && currentPath.startsWith(item.link));
  const isMagazineActive = magazineItems.some(item => item.link && currentPath.startsWith(item.link));

  return (
    <>
      <motion.div

        className="w-full font-sans">
        {/* Top Navbar */}
        <header className="w-full shadow-md bg-white fixed top-0 z-50">
          <div className="relative px-4 sm:px-5 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center space-x-2">
              <img src={logo} className="w-[200px] h-[40px]" />
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="hidden lg:flex space-x-6 items-center text-md text-gray-700 relative font-semibold">

              <motion.div
                className="flex items-center gap-1 cursor-pointer"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Interiors 
              </motion.div>

              <motion.div
                className={`flex items-center gap-1 cursor-pointer relative ${isDesignIdeasActive ? "text-red-700 font-bold" : ""}`}
                onMouseEnter={() => setDesignDropdown(true)}
                onMouseLeave={() => setDesignDropdown(false)}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
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
              </motion.div>

              <motion.div
                className={`flex items-center gap-1 cursor-pointer relative ${isMagazineActive ? "text-red-700 font-bold" : ""}`}
                onMouseEnter={() => setMagazineDropdown(true)}
                onMouseLeave={() => setMagazineDropdown(false)}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
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
              </motion.div>

              <motion.div
                className={`flex items-center gap-1 cursor-pointer ${isOTGTvActive ? "text-red-700 font-bold" : "" }`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Livspace TV
              </motion.div>

              <motion.div
                className={`flex items-center gap-1 cursor-pointer ${isPortfolioActive ? "text-red-700 font-bold" : ""}`}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <Link to="/portfolio" className="flex items-center gap-1 cursor-pointer">
                  Livspace Portfolio
                </Link>
              </motion.div>

              <motion.div
                
                className="flex items-center gap-1 cursor-pointer"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <Link to="/about" className={`flex items-center gap-1 cursor-pointer ${isAboutActive ? "text-red-700 font-bold" : ""}`}>
                About us
                </Link>
              </motion.div>

              <motion.div 
                className="flex items-center gap-1 cursor-pointer"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <Link to="/contact" className={`flex items-center gap-1 cursor-pointer ${isContactActive ? "text-red-700 font-bold" : ""}`}>
                Contact us
                </Link>
              </motion.div>
              {/* <div className="flex items-center gap-1 cursor-pointer">
                More <FaChevronDown className="text-xs" />
              </div> */}
            </motion.nav>
            {!loggedinUser ? (
              <motion.div
                className="hidden lg:flex items-center gap-1 cursor-pointer"
                onClick={handleMenu}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <FaUserCircle className="text-2xl" />
                <FaChevronDown className="text-xs" />

                {profileMenu && (
                  <div className="absolute top-14 right-5 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" >Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" >Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-red-700" >Sign out</a>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                className="hidden lg:flex items-center gap-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.div
                  className="hidden lg:flex items-center gap-1"
                  onClick={handleMenu}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <FaUserCircle className="text-2xl" />
                  <FaChevronDown className="text-xs" />

                  {profileMenu && (
                    <div className="absolute top-14 right-5 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" >
                      <div className="flex flex-col p-2  ">
                        <h2
                          className="text-xs font-bold mb-2"

                        >
                          Sign up for OTG Cares. It's free.
                        </h2>
                        <button onClick={handleSignup} type="button" className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 cursor-pointer">Sign Up</button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}

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
            <motion.div
              className="lg:hidden bg-white px-5 py-4 shadow-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3 text-gray-700 text-lg font-semibold">
                {/* Interiors */}
                <motion.li
                  className="flex items-center gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Interiors 
                </motion.li>
                {/* Design Ideas with mobile dropdown */}
                <motion.li
                  className="flex flex-col gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-1" onClick={() => setMobileDesignDropdown((prev) => !prev)}>
                    Design Ideas <FaChevronDown className="text-xs" />
                  </div>
                  {mobileDesignDropdown && (
                    <ul className="pl-4 py-2 max-h-[220px] overflow-auto">
                      {designIdeas.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <a href={item.link} className="text-sm text-gray-700 hover:text-red-500">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
                {/* Magazine with mobile dropdown */}
                <motion.li
                  className="flex flex-col gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex items-center gap-1" onClick={() => setMobileMagazineDropdown((prev) => !prev)}>
                    Magazine <FaChevronDown className="text-xs" />
                  </div>
                  {mobileMagazineDropdown && (
                    <ul className="pl-4 py-2 max-h-[220px] overflow-auto">
                      {magazineItems.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <a href={item.link} className="text-sm text-gray-700 hover:text-red-500">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
                {/* Livspace TV */}
                <motion.li
                  className="flex items-center gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Livspace TV
                </motion.li>
                {/* Livspace Portfolio */}
                <motion.li
                  className="flex items-center gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Livspace Portfolio
                </motion.li>
                {/* About us */}
                <motion.li
                 as={Link}
                to="/about"
                  className="flex items-center gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}  
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Link to="/about" className={`flex items-center gap-1 cursor-pointer ${isAboutActive ? "text-red-700 font-bold" : ""}`}>
                  About us
                  </Link>
                </motion.li>
                {/* Contact us */}
                <motion.li
                  className="flex items-center gap-1 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <Link to="/contact" className={`flex items-center gap-1 cursor-pointer ${isContactActive ? "text-red-700 font-bold" : ""}`}>Contact us</Link>
                </motion.li>
                {/* User/Profile logic as before */}
                {loggedinUser ? (
                  <motion.li
                    className="mt-2 flex items-center gap-2 text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <FaUserCircle className="text-2xl" />
                  <FaChevronDown className="text-xs" />

                  {profileMenu && (
                    <div className="absolute top-14 right-5 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" >
                      <div className="flex flex-col p-2  ">
                        <h2
                          className="text-xs font-bold mb-2"

                        >
                          Sign up for OTG Cares. It's free.
                        </h2>
                        <button onClick={handleSignup} type="button" className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 cursor-pointer">Sign Up</button>
                      </div>
                    </div>
                  )}
                  </motion.li>
                ) : (
                  <>
                    <motion.li
                      className="mt-2 flex items-center gap-2 text-gray-600 border-b pb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <a href="/login" className="flex items-center gap-2">
                        <FaUserCircle /> Login
                      </a>
                    </motion.li>
                    <motion.li
                      className="mt-2 flex items-center gap-2 text-gray-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <a href="/register" className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md">
                        Register
                      </a>
                    </motion.li>
                  </>
                )}
              </ul>
            </motion.div>
          )}
        </header>
      </motion.div>
    </>
  );
}

export default Header;