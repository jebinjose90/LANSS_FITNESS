import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { useTheme } from './hooks/useTheme';
import IsLoading from './components/IsLoading';

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  if (!theme) {
    return (
      <IsLoading/>
    );
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'overlay') {
      setIsOpen(false);
    }
  };

  const links = [
    { path: "divide", label: 'divide' },
    { path: "/admin/dashboard", label: 'Dashboard' },
    { path: "/admin/trainers", label: 'Trainers' },
    { path: "/admin/users", label: 'Users' },
    { path: "/admin/mealPlans", label: 'Meal Plans' },
    { path: "/admin/reports", label: 'Reports' },
    { path: "/admin/themeCustomization", label: 'Customization' },
    { path: "divide", label: 'divide' },
    { path: "/admin/logout", label: 'Logout' }
  ];

  return (
    <div>
      {/* Button to open sidebar */}
      <button
        onClick={toggleSidebar}
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-color3 rounded-lg sm:hidden hover:bg-color2 focus:outline-none focus:bg-color3"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Overlay (closes sidebar on click) */}
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-color1">
          <span className="ml-8 self-center text-color3 font-oswald text-3xl">ADMIN</span>
          <ul className="space-y-1 font-medium mt-4">
            {links.map((link, index) =>
              link.path === "divide" ? (
                <li key={index}>
                  <div className="bg-color2 h-[1.5px] w-full"></div>
                </li>
              ) : (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={`flex items-center p-2 text-color3 hover:bg-color2 group ${
                      location.pathname === link.path ? 'pointer-events-none opacity-50' : ''
                    }`}
                  >
                    <span className="ms-3">{link.label}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
