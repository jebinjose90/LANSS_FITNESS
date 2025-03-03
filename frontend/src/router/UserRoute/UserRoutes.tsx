// frontend\src\router\UserRoutes.tsx

import { Route, Routes } from 'react-router-dom'
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
import userCRM from './userCRM'


const UserRoutes = () => {
    return (
            <Routes>
                <Route path={userCRM.Landing} element={<Landing />} />
                <Route path={userCRM.Home} element={<Home />} />
                <Route path={userCRM.Trainers} element={<Trainers />} />
                <Route path={userCRM.Profile} element={<Profile />} />
                <Route path={userCRM.Courses} element={<Courses />} />
                <Route path={userCRM.DietPlans} element={<DietPlans />} />
                <Route path={userCRM.Reports} element={<Reports />} />
                <Route path={userCRM.UserLogin} element={<UserLogin />} />
                <Route path={userCRM.UserOTP} element={<UserOTP />} />
                <Route path={userCRM.UserResetPassword} element={<UserResetPassword />} />
                <Route path={userCRM.UserSignup} element={<UserSignup />} />
                <Route path={userCRM.UserVerifyEmail} element={<UserVerifyEmail />} />
            </Routes>
    )
}

export default UserRoutes