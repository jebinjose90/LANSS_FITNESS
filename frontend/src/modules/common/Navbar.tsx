import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../core/usecases/useTheme";
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import Icon from "./Icon";
import { useUserAuth } from "../user/hooks/manageUserAuth";
import { useTrainerAuth } from "../trainer/hooks/manageTrainerAuth";

const Navbar: React.FC<{ role: 'user' | 'trainer' }> = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { userLogout } = useUserAuth();
  const { trainerLogout } = useTrainerAuth();
  const location = useLocation();

  const logout = () => {
    if (role === 'user') {
      userLogout()
    }else{
      trainerLogout()
    }
  }

  const [username, setUsername] = useState<string | null>(null);
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (role === "user") {
      if (!localStorage.getItem("token")) {
        logout()
      }

      // Fetch username, and image URL from localStorage
      const storedUsername = localStorage.getItem("username");
      const storedImageUrl = localStorage.getItem("userImageUrl");

      setUsername(storedUsername);
      setUserImageUrl(storedImageUrl);
    } else {
      if (!localStorage.getItem("token")) {
        logout()
      }

      // Fetch username, and image URL from localStorage
      const storedUsername = localStorage.getItem("trainername");
      const storedImageUrl = localStorage.getItem("trainerImageUrl");

      console.log("IMGSSS",storedImageUrl,storedUsername);
      
      setUsername(storedUsername);
      setUserImageUrl(storedImageUrl);
    }

  }, [localStorage.getItem("token")]);

  // Define dynamic navigation links based on roles
  const links = role === 'user'
    ? [
      { path: '/home', label: 'Home' },
      { path: '/trainers', label: 'Trainers' },
      { path: '/profile', label: 'Profile' },
      { path: '/courses', label: 'Courses' },
      { path: '/dietPlans', label: 'Diet Plans' },
      { path: '/reports', label: 'Reports' },
    ]
    : [
      { path: '/trainer/profile', label: 'Profile' },
      { path: '/trainer/trainerChats', label: 'Chats' },
      { path: '/trainer/trainerStatus', label: 'Status' },
      { path: '/trainer/trainerRevenue', label: 'Revenue' },
      { path: '/trainer/trainerCourses', label: 'Courses' }
    ];

  if (!theme) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="bg-color1 text-color3 h-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col justify-center items-center -space-y-2">
            <Logo logoUrl={theme.logoUrl} />
            <CompanyName companyName={theme.companyName} />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className={`hover:text-gray-300 ${location.pathname === link.path ? "font-bold text-gray-500 pointer-events-none" : ""}`}>
                {link.label}
              </Link>
            ))}
            <div className="w-10 h-10 bg-color3 rounded-md flex items-center justify-center hover:bg-gray-300 transition duration-200">
              <button onClick={logout}>
                <Icon svgName="logout-icon" width="30" height="34" className="custom-class text-color3" />
              </button>
            </div>
            {role === "user" ? (
              <div className="flex flex-col items-center justify-center text-color3 text-sm">
                {userImageUrl && userImageUrl.trim() ? (
                  <img className="rounded-full" src={userImageUrl} width="30" height="30" alt="User" />
                ) : (
                  <Icon svgName="user-icon" width="23" height="23" className="text-color3 m-0" />
                )}
                {username ? (
                  <p className="text-xs">{username}</p>
                ) : (
                  <p className="text-xs">USER</p>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-color3 text-sm">
                {userImageUrl && userImageUrl.trim() ? (
                  <img className="rounded-full" src={userImageUrl} width="30" height="30" alt="User" />
                ) : (
                  <Icon svgName="user-icon" width="23" height="23" className="text-color3 m-0" />
                )}
                {username ? (
                  <p className="text-xs">{username}</p>
                ) : (
                  <p className="text-xs">TRAINER</p>
                )}
              </div>
            )}

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
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-gray-300 mr-4" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <button className="hover:text-gray-300 mr-4" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </nav>
      <div className="w-full h-[0.5px] bg-gray-300"></div>
    </div>
  );
};

export default Navbar;
