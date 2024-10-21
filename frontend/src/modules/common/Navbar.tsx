import React, { useState } from "react";
import { useTheme } from '../../core/usecases/useTheme';
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import Icon from './Icon';


const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <nav className="bg-color1 text-color3 h-30 px-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col justify-center items-center -space-y-2">
          <Logo logoUrl={theme.logoUrl} />
          <CompanyName companyName={theme.companyName} />
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/" className="hover:text-gray-300">Trainers</a>
          <a href="/" className="hover:text-gray-300">Profile</a>
          <a href="/" className="hover:text-gray-300">Courses</a>
          <a href="/" className="hover:text-gray-300">DietPlans</a>
          <a href="/" className="hover:text-gray-300">Reports</a>
          <div className="w-10 h-10 bg-color3 rounded-md flex items-center justify-center hover:bg-gray-300 transition duration-200">
            <Icon name="logout-icon" width="30" height="34" className="custom-class text-color3" />
          </div>
          <Icon name="user-icon" width="40" height="39" className="custom-class text-color3" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="flex flex-col items-end md:hidden bg-color1">
          <a href="/" className="hover:text-gray-300 mr-4">Home</a>
          <a href="/" className="hover:text-gray-300 mr-4">Profile</a>
          <a href="/" className="hover:text-gray-300 mr-4">Trainers</a>
          <a href="/" className="hover:text-gray-300 mr-4">Courses</a>
          <a href="/" className="hover:text-gray-300 mr-4">DietPlans</a>
          <a href="/" className="hover:text-gray-300 mr-4">Reports</a>
          <a href="/" className="hover:text-gray-300 mr-4">Profile</a>
          <a href="/" className="hover:text-gray-300 mr-4">Logout</a>
        </div>
      )}
      <div className="w-screen h-[0.5px] bg-gray-300"></div>
    </nav>
  );
};

export default Navbar;
