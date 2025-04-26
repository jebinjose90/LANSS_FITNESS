import { Navigate, useLocation } from 'react-router-dom';
import trainerCRM from '../../core/constants/route/trainerCRM';
import { ReactNode } from 'react';

interface TrainerProtectedRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const TrainerProtectedRoute = ({ isAuthenticated, children }: TrainerProtectedRouteProps) => {
  const location = useLocation();
  const isTrainerLoggedIn = localStorage.getItem('isTrainerLoggedIn') === 'true';

  return isAuthenticated && isTrainerLoggedIn ? (
    children
  ) : (
    <Navigate to={`/${trainerCRM.TrainerLogin}`} state={{ from: location }} replace />
  );
};

export default TrainerProtectedRoute;
