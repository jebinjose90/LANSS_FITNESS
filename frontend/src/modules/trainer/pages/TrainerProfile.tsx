import Navbar from "../../common/Navbar"
import Profile from "../components/profile/Profile"

const TrainerProfile = () => {
    return (
        <div className="h-screen flex flex-col">
            <Navbar role="trainer"/>
            <Profile/>
        </div>
    )
}

export default TrainerProfile