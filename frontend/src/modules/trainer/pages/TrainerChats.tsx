import Navbar from "../../common/Navbar"
import Chats from "../components/chats/Chats"

const TrainerChats = () => {
  return (
    <div className="h-screen flex flex-col overflow-auto bg-color2">
            <Navbar role="trainer"/>
            <Chats/>
        </div>
  )
}

export default TrainerChats