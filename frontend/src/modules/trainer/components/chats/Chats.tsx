import { useEffect, useState } from "react";
import Icon from "../../../common/Icon";
import { useTrainerAuth } from "../../hooks/manageTrainerAuth";

interface UserDetails {
    id: string;
    image: string;
    email: string;
    name: string;
    subscriptionPlan: string;
}

const Chats = () => {
    const { trainerUserChats, loading, error, trainerLogout } = useTrainerAuth();
    const [userDetails, setUserDetails] = useState<UserDetails[]>([]); // Initialize as an empty array

    // Fetch trainer profile data on component mount
    useEffect(() => {
        const fetchUsersToChat = async () => {
            const data = await trainerUserChats();
            if (data) setUserDetails(data);
        };
        fetchUsersToChat();
    }, []);

    if (loading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    if (error) {
        if (error === "Invalid Token") {
            trainerLogout()
        } else {
            return <div className="text-center text-red-500 p-4">{error}</div>;
        }
    }

    return (
        <div className="flex items-center justify-center bg-color2">
            <div className="flex-1 w-full">
                <div className="px-20 py-5 space-y-6">
                    {userDetails.map((user: UserDetails) => (
                        <div
                            key={user.id}
                            className="border-2 border-color3 p-4 flex items-center shadow-md"
                        >
                            {/* Profile Image */}
                            <img
                                src={user.image}
                                alt="Customer"
                                className="xs:w-20 xs:h-20 sm:w-20 sm:h-20 md:w-52 md:h-52 lg:w-52 lg:h-52 xl:w-52 xl:h-52 object-cover"
                            />

                            {/* Content */}
                            <div className="ml-4 flex-1 space-y-2 inline-block min-w-0 text-color3">
                                {/* Email */}
                                <p className=" text-sm truncate block" title={user.email}>
                                    {user.email}
                                </p>

                                {/* Name and Subscription Plan */}
                                <h3 className=" text-xl font-semibold truncate block">
                                    {user.name}
                                </h3>
                                <h3 className=" text-sm font-semibold truncate block">
                                    PLAN: {user.subscriptionPlan}
                                </h3>
                                <div className='grid grid-cols-2 w-28'>
                                    <div className="relative group">
                                        {/* Button */}
                                        <button className='hover:opacity-45 transition duration-300' >
                                            <Icon svgName="video-icon" width="40" height="27" />
                                        </button>
                                        {/* Tooltip */}
                                        <div className="absolute top-full mt-2 px-3 py-1 bg-color1 text-color3 text-xs rounded shadow-lg opacity-0 group-hover:opacity-90 transition-opacity">
                                            Video Call
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        {/* Button */}
                                        <button className="hover:opacity-45 transition duration-300">
                                            <Icon svgName="chat-icon" />
                                        </button>

                                        {/* Tooltip */}
                                        <div className="absolute top-full mt-2 px-3 py-1 bg-color1 text-color3 text-xs rounded shadow-lg opacity-0 group-hover:opacity-90 transition-opacity">
                                            Chat
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chats