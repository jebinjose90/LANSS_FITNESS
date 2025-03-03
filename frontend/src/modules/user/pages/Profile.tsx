import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import ProfileView from '../components/profilePage/ProfileView'


const Profile = () => {
    return (
        <div>
            <Navbar role={'user'} />
            <ProfileView />
            <Footer />
        </div>
    )
}

export default Profile