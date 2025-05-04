import { useEffect, useState } from "react";
import Icon from "../../../common/Icon";
import InputFieldWithoutIcon from "../../../common/InputFieldWithoutIcon";
import Dropdown from "../../../common/Dropdown";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../interface-adapters/redux/store";
import { useSelector } from "react-redux";
import IsLoading from "../../../common/components/IsLoading";
import { updateUserProfileThunk } from "../../../../usecases/thunks/user/userThunks";
import useValidation from "../../../../usecases/validation/useValidation";
import { resetProfileUpdateSuccess } from "../../../../interface-adapters/redux/slice/userSlice";

interface EditProfileComponentProps {
    onClose: () => void; // Callback to close the child
}

const EditProfileModal: React.FC<EditProfileComponentProps> = ({ onClose }) => {
    const [editProfileData, setEditProfileData] = useState({ email: '', username: '', age: '', gender: '', height: '', weight: '', place: '' });
    const dispatch = useDispatch<AppDispatch>();
    const { profile, loading, profileUpdateSuccess} = useSelector((state: RootState) => state.user)

    const { validateAll } = useValidation();
    // Get all errors as an array
    const allErrors = validateAll({ username: editProfileData.email, age: editProfileData.age, gender: editProfileData.gender, height: editProfileData.height, weight: editProfileData.weight, place: editProfileData.place });


    useEffect(() => {
        if (profile) {
            setEditProfileData({
                email: profile.email || '',
                username: profile.username || '',
                age: profile.age || '',
                gender: profile.gender || '',
                height: profile.height || '',
                weight: profile.weight || '',
                place: profile.place || ''
            });
        }
    }, []); // Runs when profile changes

    useEffect(() => {
        if (profileUpdateSuccess) {
            onClose(); // Close the modal
            dispatch(resetProfileUpdateSuccess()); // Reset success flag for future updates
        }
    }, [profileUpdateSuccess]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Callback function to handle the selection from Dropdown
    const handleGenderSelection = (option: string) => {
        setEditProfileData((prevData) => ({
            ...prevData,
            gender: option,
        }));  // Update state with selected option
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateUserProfileThunk({ editProfileData, allErrors }))
    }


    if (loading) {
        return <IsLoading />
    }
    return (
        <>
            <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
                <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px] sm:w-[920px] md:w-[920px] lg:w-[1024px] xl:w-[1280px]">
                    {/* content */}
                    <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none p-6">
                        <div className="flex sm:items-center justify-between py-3 border-b-2 border-color3">
                            <h2 className="text-lg font-semibold text-color3">EDIT PROFILE</h2>
                            <button onClick={onClose} type="button" className="inline-flex items-center justify-center rounded-lg border border-color3 h-10 w-10 transition duration-500 ease-in-out text-color3 hover:bg-color2 focus:outline-none">
                                <Icon svgName="close-icon" className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-3 bg-transparent py-10">
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Username</label>
                                    <InputFieldWithoutIcon inputValue={editProfileData.username} onChange={handleInputChange} placeholder="Username" name="username" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Age</label>
                                    <InputFieldWithoutIcon inputValue={editProfileData.age} onChange={handleInputChange} name="age" placeholder="Age" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Place</label>
                                    <InputFieldWithoutIcon inputValue={editProfileData.place} onChange={handleInputChange} name="place" placeholder="Place" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Height</label>
                                    <InputFieldWithoutIcon inputValue={editProfileData.height} onChange={handleInputChange} name="height" placeholder="Height" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Weight</label>
                                    <InputFieldWithoutIcon inputValue={editProfileData.weight} onChange={handleInputChange} name="weight" placeholder="Weight" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Gender</label>
                                    <Dropdown options={["Male", "Female"]} onSelect={handleGenderSelection} />
                                </div>
                            </div>
                            <button type="submit" className="text-color1 bg-color3 font-sanspy-2 h-10 w-full px-4 hover:opacity-45 transition duration-300">
                                UPDATE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfileModal;
