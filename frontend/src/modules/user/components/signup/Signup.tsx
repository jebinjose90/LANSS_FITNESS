import { useEffect, useRef, useState } from "react";
import CommonSignup from "../../../common/authenticationComponents/CommonSignup"
import { useUserAuth } from "../../hooks/manageUserAuth";
import { useNavigate } from "react-router-dom";
import useValidation from "../../../../core/usecases/useValidation";
import useCustomAlert from "../../../../core/usecases/useCustomAlert";
import { uploadImage } from "../../../../infrastructure/api/fileApi";

interface FormValues { username: string; email: string; password: string; phone: string; imageUrl: string; pdfUrl: string}

const Signup = () => {
    const [formValues, setFormValues] = useState<FormValues>({ username: '', email: '', password: '', phone: '', imageUrl: '' ,pdfUrl: "*"});
    const [modalOpen, setModalOpen] = useState(false);
    const { loading, error, signup, signinWithGoogle } = useUserAuth();
    const navigate = useNavigate(); // Set up navigation
    const { validateAll } = useValidation();
    const { showAlert } = useCustomAlert();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Get all errors as an array
        const allErrors = validateAll({ username: formValues.username, email: formValues.email, password: formValues.password, phone: formValues.phone, height: "*", weight: "*", age: "*", gender: "*", certificateUrl: formValues.pdfUrl});

        console.log("ERR", allErrors);
        let imageUrl = ''
        if (formValues.imageUrl) {
            imageUrl = formValues.imageUrl
        } else {
            imageUrl = avatarUrl.current
        }
        if (allErrors.length > 0) {
            // Pass the array of errors directly to showAlert
            showAlert({ title: "Login Failed", listItems: allErrors });
        } else {
            try {
                // Attempt signup and navigate on success
                await signup(formValues.username, formValues.email, formValues.password, Number(formValues.phone), imageUrl);
                navigate(`/userOtp?email=${encodeURIComponent(formValues.email)}`); // Pass email as a URL parameter;
            } catch (signUpError) {
                console.error(signUpError);
            }
        }
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
            showUplaodCertificate={false} 
            avatarUrl= {avatarUrl.current} 
            formValues={formValues} 
            setFormValues={setFormValues} 
            handleSubmit={handleSubmit} 
            modalOpen={modalOpen} 
            setModalOpen={setModalOpen} 
            signinWithGoogle={signinWithGoogle} 
            updateAvatar={updateAvatar}
            namePlaceholder="ENTER USERNAME"/>
        </>
    )
}

export default Signup