import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import Icon from "./Icon";
import { useUserAuth } from "../user/hooks/manageUserAuth";
import { useTrainerAuth } from "../trainer/hooks/manageTrainerAuth";

import { fetchHomeDataThunk, userLogoutThunk } from "../../usecases/thunks/user/userThunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../interface-adapters/redux/store";
import userCRM from "../../core/constants/route/userCRM";
import trainerCRM from "../../core/constants/route/trainerCRM";
import { trainerLogoutThunk } from "../../usecases/thunks/trainer/trainerThunks";
import IsLoading from "./components/IsLoading";


const Navbar: React.FC<{ role: 'user' | 'trainer' }> = ({ role }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const { trainerLogout } = useTrainerAuth();
  const location = useLocation();

  const logout = async () => {
    if (role === 'user') {
      localStorage.removeItem("isUserLoggedIn");
      const result = await dispatch(userLogoutThunk());
      if (userLogoutThunk.fulfilled.match(result)) {
        navigate(`/${userCRM.UserLogin}`);
      } else {
        console.error("Logout failed");
      }
    } else {
      localStorage.removeItem("isTrainerLoggedIn");
      const result = await dispatch(trainerLogoutThunk());
      if (trainerLogoutThunk.fulfilled.match(result)) {
        navigate(`/${userCRM.UserLogin}`);
      } else {
        console.error("Logout failed");
      }
    }
  }

  const [username, setUsername] = useState<string | null>(null);
  const [userImageUrl, setUserImageUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log("NAVE ROLE", role)
    if (role === "user") {
      // if (!localStorage.getItem("token")) {
      //   logout()
      // }

      dispatch(fetchHomeDataThunk()).unwrap()
    } else {
      // if (!localStorage.getItem("token")) {
      //   logout()
      // }

      // Fetch username, and image URL from localStorage
    }

  }, [dispatch]);
  // localStorage.getItem("token")

  // Define dynamic navigation links based on roles
  const links = role === 'user'
    ? [
      { path: `/${userCRM.Home}`, label: 'Home' },
      { path: `/${userCRM.Trainers}`, label: 'Trainers' },
      { path: `/${userCRM.Profile}`, label: 'Profile' },
      { path: `/${userCRM.Courses}`, label: 'Courses' },
      { path: `/${userCRM.DietPlans}`, label: 'Diet Plans' },
      { path: `/${userCRM.Reports}`, label: 'Reports' },
    ]
    : [
      { path: `/${trainerCRM.TrainerProfile}`, label: 'Profile' },
      { path: `/${trainerCRM.TrainerChats}`, label: 'Chats' },
      { path: `/${trainerCRM.TrainerStatus}`, label: 'Status' },
      { path: `/${trainerCRM.TrainerRevenue}`, label: 'Revenue' },
      { path: `/${trainerCRM.TrainerCourses}`, label: 'Courses' }
    ];

  if (!theme) {
    return (
      <IsLoading/>
    );
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
                {userData?.imageUrl && userData?.imageUrl.trim() ? (
                  <img className="rounded-full" src={userData?.imageUrl} width="30" height="30" alt="User" />
                ) : (
                  <Icon svgName="user-icon" width="23" height="23" className="text-color3 m-0" />
                )}
                {userData?.username ? (
                  <p className="text-xs">{userData?.username}</p>
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
