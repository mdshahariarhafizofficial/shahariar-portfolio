import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../../assets/ShahariarHafiz.png';
import { MdWbSunny } from 'react-icons/md';

const Navbar = () => {
  const navLinks = ['home', 'about', 'skills', 'education', 'portfolio', 'contact'];
  const [active, setActive] = useState('home'); // default active section

  const handleSetActive = (to) => {
    setActive(to); // keep as-is since section IDs are lowercase
  };

  return (
    <div className="max-w-[1320px] mx-auto navbar px-0 shadow-sm bg-[#000000d2] py-5">
      {/* Left Logo + Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="#20938a">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-lg z-1 mt-4 w-52 p-4 shadow flex gap-4 mb-10"
          >
            {navLinks.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={handleSetActive}
                className={`relative group inline-block text-[15px] font-medium uppercase leading-none cursor-pointer`}
              >
                <span className="block text-white mb-[10px]">{section}</span>
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[100%] rounded-full 
                    bg-gradient-to-r from-[#151618] to-[#20938a] transition-all duration-300
                    ${active === section ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                  `}
                ></span>
              </Link>
            ))}
          </ul>
        </div>
        <a href="/">
          <img src={logo} alt="Shahariar Hafiz" />
        </a>
      </div>

      {/* Center Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1 flex gap-10">
          {navLinks.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onSetActive={handleSetActive}
              className={`relative group inline-block text-[15px] font-medium uppercase leading-none cursor-pointer`}
            >
              <span className="block text-white mb-[10px]">{section}</span>
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[160%] rounded-full 
                  bg-gradient-to-r from-[#151618] to-[#20938a] transition-all duration-300
                  ${active === section ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}
              ></span>
            </Link>
          ))}
          <div>
            <button>
              <MdWbSunny size={25} color="#2dd4bf" />
            </button>
          </div>
        </ul>
      </div>

      {/* Optional Right Resume Button */}
      {/* <div className="navbar-end">
        <button type="button"
          className="text-white bg-gradient-to-r from-primary via-teal-600 to-teal-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2 flex items-center gap-2">
          <FaDownload size={22} />
          Resume
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
