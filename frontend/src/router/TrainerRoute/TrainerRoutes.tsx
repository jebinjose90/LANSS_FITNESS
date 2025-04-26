// frontend\src\router\TrainerRoutes.tsx

import { Navigate, Route, Routes } from 'react-router-dom'
import TrainerSignUp from '../../modules/trainer/pages/TrainerSignUp'
import TrainerOTP from '../../modules/trainer/pages/TrainerOTP'
import TrainerResetPassword from '../../modules/trainer/pages/TrainerResetPassword'
import TrainerLogin from '../../modules/trainer/pages/TrainerLogin'
import TrainerVerifyEmail from '../../modules/trainer/pages/TrainerVerifyEmail'
import TrainerProfile from '../../modules/trainer/pages/TrainerProfile'
import TrainerChats from '../../modules/trainer/pages/TrainerChats'
import trainerCRM from '../../core/constants/route/trainerCRM'
import TrainerProtectedRoute from '../ProtectedRoute/TrainerProtectedRoute'
import NotFound from '../../modules/common/components/NotFound'
import { useSelector } from 'react-redux'
import { RootState } from '../../interface-adapters/redux/store'



const TrainerRoutes = () => {
    const { isTrainerAuthenticated } = useSelector((state: RootState) => state.user);
    console.log('Trainer Authenticated:', isTrainerAuthenticated); // 👈 Log added here
    return (
        <Routes>
            <Route path={`/${trainerCRM.TrainerLogin}`} element={!isTrainerAuthenticated ? (<TrainerLogin />) : (<Navigate to={`/${trainerCRM.TrainerProfile}`} replace />)} />
            <Route path={`/${trainerCRM.TrainerSignUp}`} element={!isTrainerAuthenticated ? (<TrainerSignUp />) : (<Navigate to={`/${trainerCRM.TrainerProfile}`} replace />)} />
            <Route path={`/${trainerCRM.TrainerOTP}`} element={!isTrainerAuthenticated ? (<TrainerOTP />) : (<Navigate to={`/${trainerCRM.TrainerProfile}`} replace />)} />
            <Route path={`/${trainerCRM.TrainerResetPassword}`} element={!isTrainerAuthenticated ? (<TrainerResetPassword />) : (<Navigate to={`/${trainerCRM.TrainerProfile}`} replace />)} />
            <Route path={`/${trainerCRM.TrainerVerifyEmail}`} element={!isTrainerAuthenticated ? (<TrainerVerifyEmail />) : (<Navigate to={`/${trainerCRM.TrainerProfile}`} replace />)} />
            {/* Protected Routes */}
            <Route path={`/${trainerCRM.TrainerProfile}`} element={<TrainerProtectedRoute isAuthenticated={isTrainerAuthenticated}>
                <TrainerProfile />
            </TrainerProtectedRoute>} />
            <Route path={`/${trainerCRM.TrainerChats}`} element={<TrainerProtectedRoute isAuthenticated={isTrainerAuthenticated}>
                <TrainerChats />
            </TrainerProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default TrainerRoutes