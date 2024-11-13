import React, { useState } from "react";
import { useTheme } from '../../core/usecases/useTheme';
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import Icon from './Icon';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from "../user/hooks/manageUserAuth";



const Navbar: React.FC = () => {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { logout } = useUserAuth();
  // Retrieve values from localStorage to use in the component
  const [username, setUsername] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch from localStorage and set state variables
    const storedUsername = localStorage.getItem('username');
    const storedImageUrl = localStorage.getItem('imageUrl');
    setUsername(storedUsername);
    setImageUrl(storedImageUrl);
  }, []);


  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <nav className="bg-color1 text-color3 h-30 px-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col justify-center items-center -space-y-2">
            <Logo logoUrl={theme.logoUrl} />
            <CompanyName companyName={theme.companyName} />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 ">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/" className="hover:text-gray-300">Trainers</a>
            <a href="/" className="hover:text-gray-300">Profile</a>
            <a href="/" className="hover:text-gray-300">Courses</a>
            <a href="/" className="hover:text-gray-300">DietPlans</a>
            <a href="/" className="hover:text-gray-300">Reports</a>
            <div className="w-10 h-10 bg-color3 rounded-md flex items-center justify-center hover:bg-gray-300 transition duration-200">
              <button onClick={logout}>
                <Icon svgName="logout-icon" width="30" height="34" className="custom-class text-color3" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center text-color3 text-sm">
              {(imageUrl && imageUrl.trim()) ? (<img className="rounded-full" src={imageUrl} width="30" height="30" />) : (<Icon svgName="user-icon" width="23" height="23" className="text-color3 m-0" />)}
              {(username) ? (<p className="text-xs">{username}</p>) : (<p className="text-xs" >USER</p>)}
            </div>
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
            <a href="/" className="hover:text-gray-300 mr-4">Logout</a>
          </div>
        )}
      </nav>
      <div className="w-full h-[0.5px] bg-gray-300"></div>
    </div>

  );
};

export default Navbar;
