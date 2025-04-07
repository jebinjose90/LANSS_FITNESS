// frontend\src\router\AdminRoutes.tsx

import { Route, Routes } from 'react-router-dom'
import adminCRM from './adminCRM'

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

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={adminCRM.AdminLogin} element={<AdminLoginPage />} />
            <Route path={adminCRM.AdminDashboard} element={<AdminDashboardPage />} />
            <Route path={adminCRM.AdminListTrainers} element={<AdminListTrainersPage />} />
            <Route path={adminCRM.AdminListTrainersRequest} element={<AdminListTrainersRequestPage />} />
            <Route path={adminCRM.AdminTrainerProfile} element={<AdminTrainerProfilePage />} />
            <Route path={adminCRM.AdminListUsers} element={<AdminListUsersPage />} />
            <Route path={adminCRM.AdminListMealPlans} element={<AdminListMealPlansPage />} />
            <Route path={adminCRM.AdminAddMealPlan} element={<AdminAddMealPage />} />
            <Route path={adminCRM.AdminListUserReports} element={<AdminListUserReportsPage />} />
            <Route path={adminCRM.AdminCustomization} element={<AdminThemeCustomizationPage />} />
        </Routes>
    )
}

export default AdminRoutes