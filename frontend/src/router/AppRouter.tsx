// frontend/src/router/AppRouter.tsx

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoutes from './UserRoute/UserRoutes'
import TrainerRoutes from './TrainerRoute/TrainerRoutes'
import AdminRoutes from './AdminRoute/AdminRoutes'
import NotFound from '../modules/common/components/NotFound'



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="/trainer/*" element={<TrainerRoutes />} />
                <Route path="/*" element={<UserRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppRouter