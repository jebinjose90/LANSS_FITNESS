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

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={adminCRM.AdminLogin} element={<AdminLoginPage />} />
            <Route path={adminCRM.AdminDashboard} element={<AdminDashboardPage />} />
            <Route path={adminCRM.AdminListTrainers} element={<AdminListTrainersPage />} />
            <Route path={adminCRM.AdminListUsers} element={<AdminListUsersPage />} />
            <Route path={adminCRM.AdminListMealPlans} element={<AdminListMealPlansPage />} />
            <Route path={adminCRM.AdminListUserReports} element={<AdminListUserReportsPage />} />
            <Route path={adminCRM.AdminCustomization} element={<AdminThemeCustomizationPage />} />
        </Routes>
    )
}

export default AdminRoutes