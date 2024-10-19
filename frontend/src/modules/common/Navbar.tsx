import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white  h-30">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          MyBrand
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/services" className="hover:text-gray-300">Services</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
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
          <a href="/" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="/services" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
          <a href="/signup" className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded m-4">
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
