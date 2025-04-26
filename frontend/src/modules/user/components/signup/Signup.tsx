import { useCallback, useEffect, useRef, useState } from "react";
import CommonSignup from "../../../common/authenticationComponents/CommonSignup"
import { useUserAuth } from "../../hooks/manageUserAuth";
import { useNavigate } from "react-router-dom";
import useValidation from "../../../../usecases/validation/useValidation";
import { uploadImage } from "../../../../infrastructure/api/fileApi";
import userCRM from "../../../../core/constants/route/userCRM";
import { userSignupThunk } from "../../../../usecases/thunks/user/userThunks";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../interface-adapters/redux/store";

interface FormValues { trainername: string; username: string; email: string; password: string; phone: string; imageUrl: string; pdfUrl: string; description: string; }

const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { userSigninWithGoogle } = useUserAuth();
    const [formValues, setFormValues] = useState<FormValues>({ trainername: '', username: '', email: '', password: '', phone: '', imageUrl: '', pdfUrl: "*", description: "*" });
    const [modalOpen, setModalOpen] = useState(false);
    const { validateAll } = useValidation();

    // Get all errors as an array
    const allErrors = validateAll({ username: formValues.username, email: formValues.email, password: formValues.password, phone: formValues.phone, certificateUrl: formValues.pdfUrl });

    const debouncedSubmit = useCallback(
        debounce(async (data: typeof formValues & { allErrors: string[] }) => {
            try {
                const result = await dispatch(userSignupThunk(data)).unwrap();
                if (result) {
                    console.log("RESULT",result);
                    navigate(`/${userCRM.UserOTP}?email=${encodeURIComponent(formValues.email)}`, { replace: true }); 
                }
            } catch (err) {
                console.error('Signup failed:', err);
                // Toast already handled inside thunk
            }
        }, 800),
        [dispatch, navigate]
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
            if (!formValues.imageUrl) {
                setFormValues((prevState) => ({
                    ...prevState,
                    imageUrl: avatarUrl.current
                }));
            }
            // Attempt signup and navigate on success
            debouncedSubmit({ ...formValues, allErrors })
    };

    const avatarUrl = useRef(
        "https://i.imgur.com/egehKZ5.png"
    );

    const updateAvatar = async (imgSrc: any) => {
        try {
            const result = await uploadImage(imgSrc);
            avatarUrl.current = imgSrc;
            setFormValues((prevState) => ({
                ...prevState,
                imageUrl: result.imageUrl, // Set the imageUrl in the state
            }));
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    useEffect(() => {
        console.log("Updated form image URL:", formValues.imageUrl);
    }, [formValues.imageUrl]);

    return (
        <>
            <CommonSignup
                trainerFormNeeds={false}
                avatarUrl={avatarUrl.current}
                formValues={formValues}
                setFormValues={setFormValues}
                handleSubmit={handleSubmit}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                signinWithGoogle={userSigninWithGoogle}
                updateAvatar={updateAvatar}
                namePlaceholder="ENTER USERNAME" />
        </>
    )
}

export default Signup