// frontend\src\router\AppRouter.tsx

import { Route, Routes } from 'react-router-dom'
import Home from '../modules/user/pages/Home'
import Landing from '../modules/user/pages/Landing'
import UserLogin from '../modules/user/pages/UserLogin'
import UserOTP from '../modules/user/pages/UserOTP'
import UserResetPassword from '../modules/user/pages/UserResetPassword'
import UserSignup from '../modules/user/pages/UserSignup'
import UserVerifyEmail from '../modules/user/pages/UserVerifyEmail'

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="home" element={<Home />} />
                <Route path="userSignin" element={<UserLogin />} />
                <Route path="userOtp" element={<UserOTP />} />
                <Route path="userResetPassword" element={<UserResetPassword />} />
                <Route path="userSignup" element={<UserSignup />} />
                <Route path="userVerifyEmail" element={<UserVerifyEmail />} />
            </Routes>
    )
}

export default AppRouter