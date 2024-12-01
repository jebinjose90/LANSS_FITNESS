import { useEffect, useState } from "react"
import { useTrainerAuth } from '../../hooks/manageTrainerAuth'
import Icon from "../../../common/Icon";

const Profile = () => {
  const { trainerProfile, loading, error, trainerLogout } = useTrainerAuth();
  const [profileData, setProfileData] = useState<{
    trainername: string;
    imageUrl: string;
    phone: string;
    email: string;
  } | null>(null);

  // Fetch trainer profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await trainerProfile();
      if (data) { setProfileData(data); }
      else {
        trainerLogout()
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    if (error === "Invalid Token") {
      trainerLogout()
    }else{
      return <div className="text-center text-red-500 p-4">{error}</div>;
    }
  }


  return (
    <div className="flex items-center justify-center h-full bg-color2">
      <div className="flex-1 overflow-auto space-y-6 max-w-md w-full">
        {profileData ? (
          <>
            <img
              src={profileData.imageUrl}
              alt="Trainer Profile"
              className="w-52 h-52 mx-auto rounded-full mb-4"
            />
            <h2 className="text-center text-3xl text-color3 font-bold capitalize">
              {profileData.trainername}
            </h2>
            <h1 className="text-center text-2xl text-color3 font-medium capitalize">
              DESIGNATION
            </h1>
            <button className="rounded-xl bg-color1 text-color3 text-xl px-4 mx-auto block">Edit Profile</button>
            { profileData.email && <div className="flex items-center justify-center text-center text-color3 mt-2 space-x-2">
              <Icon svgName="mail-icon" className="custom-class" />
              <p className="mb-3">{profileData.email}</p>
            </div>}
            { profileData.phone && <div className="flex items-center justify-center text-center text-color3 mt-2 space-x-2 -pb-10">
              <Icon svgName="phone-icon" className="custom-class" />
              <p className="mb-3">{profileData.phone}</p>
            </div>}
          </>
        ) : (
          <div className="text-center text-color3">No profile data available</div>
        )}
      </div>
    </div>

  )
}

export default Profile