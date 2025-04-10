// frontend\src\router\TrainerRoutes.tsx

import { Route, Routes } from 'react-router-dom'
import TrainerSignUp from '../../modules/trainer/pages/TrainerSignUp'
import TrainerOTP from '../../modules/trainer/pages/TrainerOTP'
import TrainerResetPassword from '../../modules/trainer/pages/TrainerResetPassword'
import TrainerLogin from '../../modules/trainer/pages/TrainerLogin'
import TrainerVerifyEmail from '../../modules/trainer/pages/TrainerVerifyEmail'
import TrainerProfile from '../../modules/trainer/pages/TrainerProfile'
import TrainerChats from '../../modules/trainer/pages/TrainerChats'
import trainerCRM from '../../core/constants/route/trainerCRM'



const TrainerRoutes = () => {
    return (
            <Routes>
                <Route path={trainerCRM.TrainerLogin} element={<TrainerLogin />} />
                <Route path={trainerCRM.TrainerProfile} element={<TrainerProfile />} />
                <Route path={trainerCRM.TrainerChats} element={<TrainerChats />} />
                <Route path={trainerCRM.TrainerSignUp} element={<TrainerSignUp />} />
                <Route path={trainerCRM.TrainerOTP} element={<TrainerOTP />} />
                <Route path={trainerCRM.TrainerResetPassword} element={<TrainerResetPassword />} />
                <Route path={trainerCRM.TrainerVerifyEmail} element={<TrainerVerifyEmail />} />
            </Routes>
    )
}

export default TrainerRoutes