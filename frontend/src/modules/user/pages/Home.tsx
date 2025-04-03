import Navbar from '../../common/Navbar'
import MainView from '../components/homePage/MainView'
import FeaturesView from '../components/homePage/FeaturesView'
import ImageSlider from '../components/homePage/ImageSlider'
import SubscriptionPlans from '../components/homePage/SubscriptionPlans'
import BodyMassIndex from '../components/homePage/BodyMassIndex'
import Footer from '../../common/Footer'

const Home = () => {
    return (
        <div>
            <Navbar role={'user'} />
            <MainView />
            <FeaturesView />
            <ImageSlider />
            <SubscriptionPlans />
            <BodyMassIndex />
            <Footer />
        </div>
    )
}

export default Home