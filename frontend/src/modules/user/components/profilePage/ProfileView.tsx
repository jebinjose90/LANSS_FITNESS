// \frontend\src\modules\user\components\profilePage\ProfileView.tsx
import { useEffect, useState } from 'react';
import Icon from '../../../common/Icon';
import { userProfile } from '../../hooks/userProfile';
import EditProfileModal from './EditProfileModal'
import EditImageModal from './EditImageModal';
import IsLoading from '../../../common/components/IsLoading';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../interface-adapters/redux/store';
import { useSelector } from 'react-redux';
import { fetchProfileThunk } from '../../../../usecases/thunks/user/userThunks';

const ProfileView = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { profile, loading } = useSelector((state: RootState) => state.user)
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showEditImageModal, setShowEditImageModal] = useState<boolean>(false);
  function editProfile() {
    setShowEditModal(true)
  }
  function closeEdit() {
    setShowEditModal(false)
  }

  function editImage() {
    setShowEditImageModal(true)
  }
  function closeEditImage() {
    setShowEditImageModal(false)
  }
  // Disable scrolling when modal is open
  useEffect(() => {
    if (showEditModal || showEditImageModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showEditModal, showEditImageModal]);

  useEffect(() => {
    dispatch(fetchProfileThunk())
  },[])

  
  if (loading) return <IsLoading/>
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-color2 text-color3 w-full py-8 px-5'>
        <div className='flex justify-center items-center mx-4 '>
          <div className="flex flex-col mx-1">
            <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>GENDER</h1>
            <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              {profile?.gender ?? "-"}
            </p>
          </div>
          <div className="flex flex-col mx-1">
            <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>HEIGHT</h1>
            <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              {profile?.height ?? "-"}
            </p>
          </div>
          <div className="flex flex-col mx-1">
            <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>WEIGHT</h1>
            <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              {profile?.weight ?? "-"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mx-6 space-y-4">
            <div className='flex flex-row items-baseline mb-8'>
              <img className="rounded-full" src={profile?.imageUrl} width="300" height="300" alt="User" />
              <button onClick={editImage} className="text-color3 text-center font-sans xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                <Icon svgName="edit-icon" width="20" height="20" className="custom-class" />
              </button>
              {showEditImageModal && <EditImageModal onClose={closeEditImage} />}
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className='text-color3 text-center font-oswald xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>{profile?.username ?? "-"}, {profile?.age ?? "-"}</h1>
              <p className="text-color3 text-center font-sans mt-5 xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                {profile?.place ?? "-"}
              </p>
            </div>
          </div>
          {/* EDIT BUTTON */}
          <div className="flex space-x-2 space-y-2 items-baseline">
            <h1 className='text-color3 text-center font-oswald xs:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>EDIT PROFILE</h1>
            <button onClick={editProfile} className="text-color3 text-center font-sans xs:text-xs sm:text-sm md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              <Icon svgName="edit-icon-two" width="35" height="35" className="custom-class" />
            </button>
            {showEditModal && <EditProfileModal onClose={closeEdit} />}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
    </>
  )
}

export default ProfileView