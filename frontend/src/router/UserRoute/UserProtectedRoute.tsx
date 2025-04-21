// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../modules/user/hooks/tokenAndAuth';
// import userCRM from '../../core/constants/route/userCRM';

// interface UserProtectedRouteProps {
//   children: React.ReactNode;
// }

// const UserProtectedRoute: React.FC<UserProtectedRouteProps> = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <>{children}</> : <Navigate to={`/${userCRM.UserLogin}`} />;
// };

// export default UserProtectedRoute;
