import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../ASsets/download.png";
import { FaRegMoon } from "react-icons/fa6";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav className="flex items-center justify-between ">
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>
        <div className='flex'>
          <ul className="flex items-center gap-10 mr-10">
            {['Home', 'About', 'Services', 'Contacts'].map((item) => (
              <motion.li
                key={item}
                className="relative"
                initial={{ y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 700 }}
              >
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-800">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
          <FaRegMoon  onClick={toggleTheme}  />
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;