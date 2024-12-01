import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import TrainersList from '../components/trainersPage/TrainersList'

const Home = () => {
    return (
        <div>
            <Navbar role={'user'} />
            <TrainersList />
            <Footer />
        </div>
    )
}

export default Home