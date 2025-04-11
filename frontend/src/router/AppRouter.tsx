// frontend\src\router\AppRouter.tsx

import { BrowserRouter as Router} from 'react-router-dom'
import UserRoutes from './UserRoute/UserRoutes'
import TrainerRoutes from './TrainerRoute/TrainerRoutes'
import AdminRoutes from './AdminRoute/AdminRoutes'



const AppRouter = () => {
    return (
            <Router>
                <UserRoutes/>
                <TrainerRoutes/>
                <AdminRoutes/>
            </Router>
            
    )
}

export default AppRouter