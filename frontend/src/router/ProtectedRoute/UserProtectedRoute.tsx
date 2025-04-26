import { Navigate, useLocation } from 'react-router-dom';
import userCRM from '../../core/constants/route/userCRM';
import { ReactNode } from 'react';

interface UserProtectedRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const UserProtectedRoute = ({ isAuthenticated, children }: UserProtectedRouteProps) => {
  const location = useLocation();
  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';

  return isAuthenticated && isUserLoggedIn ? (
    children
  ) : (
    <Navigate to={`/${userCRM.UserLogin}`} state={{ from: location }} replace />
  );
};

export default UserProtectedRoute;
