import React, { useState } from "react";
import { useTheme } from '../../core/usecases/useTheme';
import Logo from "./Logo";
import CompanyName from "./CompanyName";


const Navbar:React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <nav className="bg-color1 text-color3  h-30">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex flex-col justify-center items-center -space-y-2">
        <Logo logoUrl={theme.logoUrl}/>
        <CompanyName companyName={theme.companyName}/>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/" className="hover:text-gray-300">Trainers</a>
          <a href="/" className="hover:text-gray-300">Profile</a>
          <a href="/" className="hover:text-gray-300">Courses</a>
          <a href="/" className="hover:text-gray-300">DietPlans</a>
          <a href="/" className="hover:text-gray-300">Reports</a>
          <svg width="55" height="55" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg" >
<circle cx="42.5" cy="42.5" r="41" stroke="#A9CEC2" stroke-width="3"/>
<path d="M26.0863 20.4067L38.8227 43.6752L26.0059 62.5934H28.8904L40.1115 46.0302L49.1779 62.5934H58.9941L45.5411 38.0162L57.4709 20.4067H54.5864L44.2523 35.6611L35.9025 20.4067H26.0863ZM30.3282 23.3099H34.8378L54.7515 59.6898H50.2419L30.3282 23.3099Z" fill="#A9CEC2"/>
</svg>
          <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Sign Up
          </a>
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
        <div className="md:hidden bg-gray-800">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/" className="hover:text-gray-300">Trainers</a>
          <a href="/" className="hover:text-gray-300">Profile</a>
          <a href="/" className="hover:text-gray-300">Courses</a>
          <a href="/" className="hover:text-gray-300">DietPlans</a>
          <a href="/" className="hover:text-gray-300">Reports</a>
          <a href="/signup" className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded m-4">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
