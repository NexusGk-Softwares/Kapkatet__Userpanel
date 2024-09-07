import React, { useState } from 'react';
import { HomeIcon, ShoppingBagIcon, InformationCircleIcon, ShoppingCartIcon, UserPlusIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-600 text-white py-4">
     
      
     <div className="relative">
      <div className="flex justify-between items-center p-4">
        {/* Logo or Left Content */}
        <div className="text-lg font-bold">Logo</div>

        {/* Toggle Icon for Mobile */}
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? <XMarkIcon className="h-6 w-6 text-black" /> : <Bars3Icon className="h-6 w-6 text-black" />}
        </button>

        {/* Navbar for Desktop (Right Aligned) */}
        <ul className="hidden md:flex md:space-x-8 md:ml-auto text-black">
          <li className="flex items-center space-x-2">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Products</span>
          </li>
          <li className="flex items-center space-x-2">
            <InformationCircleIcon className="h-5 w-5" />
            <span>About</span>
          </li>
          <li className="flex items-center space-x-2">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </li>
          <li className="flex items-center space-x-2">
          <Link to="/signup">
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <span>Sign Up</span>
          </Link>

          </li>
        </ul>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Icon at the top right of the sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
        </div>

        <ul className="flex flex-col space-y-8 p-4 text-black">
          <li className="flex items-center space-x-2">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Products</span>
          </li>
          <li className="flex items-center space-x-2">
            <InformationCircleIcon className="h-5 w-5" />
            <span>About</span>
          </li>
          <li className="flex items-center space-x-2">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </li>
          <li className="flex items-center space-x-2">
          <Link to="/signup">
            <IconButton>
              <PersonAddIcon />
            </IconButton>
            <span>Sign Up</span>
          </Link>

          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
