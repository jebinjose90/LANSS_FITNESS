import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import ProfileView from '../components/profilePage/ProfileView'
import SubscriptionPlans from '../components/homePage/SubscriptionPlans'


const Profile = () => {
    return (
        <div>
            <Navbar role={'user'} />
            <ProfileView />
            <SubscriptionPlans />
            <Footer />
        </div>
    )
}

export default Profile