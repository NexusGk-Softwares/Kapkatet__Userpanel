import React, { useState } from 'react';
import { HomeIcon, ShoppingBagIcon, InformationCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import ShoppingCartIcon
import { Link } from "react-router-dom";
import { IconButton, Badge } from '@mui/material';
import SignUpModal from './SignUpModal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-blue-600 text-white py-4">
      <div className="relative">
        <div className="flex justify-between items-center p-4">
          <div className="text-lg font-bold">Logo</div>

          <button className="md:hidden" onClick={toggleSidebar}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-black" /> : <Bars3Icon className="h-6 w-6 text-black" />}
          </button>

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
            <li className="flex items-center space-x-2 relative">
              <Link to="/cart">
                <IconButton>
                  <ShoppingCartIcon className="h-9 w-9 text-black" />
                  {cart.length > 0 && (
                    <Badge
                      badgeContent={cart.length}
                      color="secondary"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(50%, -50%)',
                        backgroundColor: 'black',
                        color: 'white',
                      }}
                    />
                  )}
                </IconButton>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
  <IconButton onClick={handleOpenModal} className="text-black">
    <PersonAddIcon />
    <span className="text-sm font-medium">Sign Up</span>
  </IconButton>
</li>

          </ul>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
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
            <li className="flex items-center space-x-2 relative">
              <Link to="/cart">
                <IconButton>
                  <ShoppingCartIcon className="h-9 w-9 text-black" />
                  {cart.length > 0 && (
                    <Badge
                      badgeContent={cart.length}
                      color="secondary"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        transform: 'translate(50%, -50%)',
                        backgroundColor: 'black',
                        color: 'white',
                      }}
                    />
                  )}
                </IconButton>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <IconButton onClick={handleOpenModal}>
                <PersonAddIcon />
                <span>Sign Up</span>
              </IconButton>
            </li>
          </ul>
        </div>
      </div>

      <SignUpModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;
