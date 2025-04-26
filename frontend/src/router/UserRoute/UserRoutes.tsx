// frontend\src\router\UserRoutes.tsx

import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../modules/user/pages/Home'
import Trainers from '../../modules/user/pages/Trainers'
import Landing from '../../modules/user/pages/Landing'
import UserLogin from '../../modules/user/pages/UserLogin'
import UserOTP from '../../modules/user/pages/UserOTP'
import UserResetPassword from '../../modules/user/pages/UserResetPassword'
import UserSignup from '../../modules/user/pages/UserSignup'
import UserVerifyEmail from '../../modules/user/pages/UserVerifyEmail'
import Profile from '../../modules/user/pages/Profile'
import Courses from '../../modules/user/pages/Courses'
import DietPlans from '../../modules/user/pages/DietPlans'
import Reports from '../../modules/user/pages/Reports'
import userCRM from '../../core/constants/route/userCRM'
import UserProtectedRoute from '../ProtectedRoute/UserProtectedRoute'
import { useSelector } from 'react-redux'
import { RootState } from '../../interface-adapters/redux/store'
import NotFound from '../../modules/common/components/NotFound'


const UserRoutes = () => {
    const { isUserAuthenticated } = useSelector((state: RootState) => state.user);
    console.log('User Authenticated:', isUserAuthenticated); // 👈 Log added here
    return (
        <Routes>
            <Route path={userCRM.UserLogin} element={!isUserAuthenticated ? (<UserLogin />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />
            <Route path={userCRM.UserOTP} element={!isUserAuthenticated ? (<UserOTP />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />
            <Route path={userCRM.UserResetPassword} element={!isUserAuthenticated ? (<UserResetPassword />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />
            <Route path={userCRM.UserSignup} element={!isUserAuthenticated ? (<UserSignup />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />
            <Route path={userCRM.UserVerifyEmail} element={!isUserAuthenticated ? (<UserVerifyEmail />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />
            <Route path={userCRM.Landing} element={!isUserAuthenticated ? (<Landing />) : (<Navigate to={`/${userCRM.Home}`} replace />)} />

            {/* Protected Routes */}
            <Route path={`/${userCRM.Home}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <Home />
            </UserProtectedRoute>} />
            <Route path={`/${userCRM.Trainers}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <Trainers />
            </UserProtectedRoute>} />
            <Route path={`/${userCRM.Profile}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <Profile />
            </UserProtectedRoute>} />
            <Route path={`/${userCRM.Courses}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <Courses />
            </UserProtectedRoute>} />
            <Route path={`/${userCRM.DietPlans}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <DietPlans />
            </UserProtectedRoute>} />
            <Route path={`/${userCRM.Reports}`} element={<UserProtectedRoute isAuthenticated={isUserAuthenticated}>
                <Reports />
            </UserProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default UserRoutes