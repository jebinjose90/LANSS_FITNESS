// frontend\src\router\AppRouter.tsx

import { Route, Routes } from 'react-router-dom'
import Home from '../modules/user/pages/Home'
import Trainers from '../modules/user/pages/Trainers'
import Landing from '../modules/user/pages/Landing'
import UserLogin from '../modules/user/pages/UserLogin'
import UserOTP from '../modules/user/pages/UserOTP'
import UserResetPassword from '../modules/user/pages/UserResetPassword'
import UserSignup from '../modules/user/pages/UserSignup'
import UserVerifyEmail from '../modules/user/pages/UserVerifyEmail'
import TrainerSignUp from '../modules/trainer/pages/TrainerSignUp'
import TrainerOTP from '../modules/trainer/pages/TrainerOTP'
import TrainerResetPassword from '../modules/trainer/pages/TrainerResetPassword'
import TrainerLogin from '../modules/trainer/pages/TrainerLogin'
import TrainerVerifyEmail from '../modules/trainer/pages/TrainerVerifyEmail'
import TrainerProfile from '../modules/trainer/pages/TrainerProfile'
import TrainerChats from '../modules/trainer/pages/TrainerChats'

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="home" element={<Home />} />
                <Route path="trainers" element={<Trainers />} />
                <Route path="userSignin" element={<UserLogin />} />
                <Route path="userOtp" element={<UserOTP />} />
                <Route path="userResetPassword" element={<UserResetPassword />} />
                <Route path="userSignup" element={<UserSignup />} />
                <Route path="userVerifyEmail" element={<UserVerifyEmail />} />

                <Route path="trainer/trainerSignin" element={<TrainerLogin />} />
                <Route path="trainer/profile" element={<TrainerProfile />} />
                <Route path="trainer/trainerChats" element={<TrainerChats />} />
                <Route path="trainer/trainerSignup" element={<TrainerSignUp />} />
                <Route path="trainer/trainerOtp" element={<TrainerOTP />} />
                <Route path="trainer/trainerResetPassword" element={<TrainerResetPassword />} />
                <Route path="trainer/trainerVerifyEmail" element={<TrainerVerifyEmail />} />
                
            </Routes>
    )
}

export default AppRouter