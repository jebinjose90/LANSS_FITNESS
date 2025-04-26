// frontend\src\router\AdminRoutes.tsx

import { Navigate, Route, Routes } from 'react-router-dom'
import adminCRM from '../../core/constants/route/adminCRM'

import AdminLoginPage from '../../modules/admin/pages/AdminLoginPage'
import AdminDashboardPage from '../../modules/admin/pages/AdminDashboardPage'
import AdminListTrainersPage from '../../modules/admin/pages/AdminListTrainersPage'
import AdminListUsersPage from '../../modules/admin/pages/AdminListUsersPage'
import AdminListMealPlansPage from '../../modules/admin/pages/AdminListMealPlansPage'
import AdminListUserReportsPage from '../../modules/admin/pages/AdminListUserReportsPage'
import AdminThemeCustomizationPage from '../../modules/admin/pages/AdminThemeCustomizationPage'
import AdminListTrainersRequestPage from '../../modules/admin/pages/AdminListTrainersRequestPage'
import AdminTrainerProfilePage from '../../modules/admin/pages/AdminTrainerProfilePage'
import AdminAddMealPage from '../../modules/admin/pages/AdminAddMealPage'
import NotFound from '../../modules/common/components/NotFound'
import { useSelector } from 'react-redux'
import { RootState } from '../../interface-adapters/redux/store'
import AdminProtectedRoute from '../ProtectedRoute/AdminProtectedRoute'

const AdminRoutes = () => {
    const { isAdminAuthenticated } = useSelector((state: RootState) => state.user);
    console.log('Admin Authenticated:', isAdminAuthenticated); // 👈 Log added here
    return (
        <Routes>
            <Route path={`/${adminCRM.AdminLogin}`} element={!isAdminAuthenticated ? (<AdminLoginPage />) : (<Navigate to={`/${adminCRM.AdminDashboard}`} replace />)} />
            {/* Protected Routes */}
            <Route path={`/${adminCRM.AdminDashboard}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminDashboardPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminListTrainers}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminListTrainersPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminListTrainersRequest}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminListTrainersRequestPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminTrainerProfile}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminTrainerProfilePage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminListUsers}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminListUsersPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminListMealPlans}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminListMealPlansPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminAddMealPlan}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminAddMealPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminListUserReports}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminListUserReportsPage />
            </AdminProtectedRoute>} />
            <Route path={`/${adminCRM.AdminCustomization}`} element={<AdminProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminThemeCustomizationPage />
            </AdminProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AdminRoutes