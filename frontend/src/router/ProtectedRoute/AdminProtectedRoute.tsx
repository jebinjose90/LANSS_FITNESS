import { Navigate, useLocation } from 'react-router-dom';
import adminCRM from '../../core/constants/route/adminCRM';
import { ReactNode } from 'react';

interface AdminProtectedRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const AdminProtectedRoute = ({ isAuthenticated, children }: AdminProtectedRouteProps) => {
  const location = useLocation();
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  return isAuthenticated && isAdminLoggedIn ? (
    children
  ) : (
    <Navigate to={`/${adminCRM.AdminLogin}`} state={{ from: location }} replace />
  );
};

export default AdminProtectedRoute;
