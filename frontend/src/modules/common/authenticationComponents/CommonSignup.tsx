// frontend\src\modules\common\authenticationComponents\Signup.tsx

import { useEffect, useRef, useState } from 'react';
import { useUserAuth } from '../../user/hooks/manageUserAuth';
import { uploadImage } from "../../../infrastructure/api/fileApi";
import { useNavigate } from 'react-router-dom';
import useCustomAlert from '../../../core/usecases/useCustomAlert';
import useValidation from '../../../core/usecases/useValidation';
import Icon from '../Icon'
import Modal from '../../../core/usecases/imageCrop/Modal';
import InputField from '../InputField';


interface FormValues {
    username: string;
    email: string;
    password: string;
    phone: string;
    imageUrl: string;
}

interface SignupModel {
    showUplaodCertificate?: boolean,
    avatarUrl: string,
    formValues: FormValues,
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
    signinWithGoogle: () => Promise<void>,
    handleSubmit: (e: React.FormEvent) => Promise<void>,
    updateAvatar: (imgSrc: any) => Promise<void>,
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    namePlaceholder: string;
}

const CommonSignup: React.FC<SignupModel> = ({ showUplaodCertificate = false, avatarUrl = "", formValues, namePlaceholder, setFormValues, handleSubmit,signinWithGoogle, updateAvatar ,modalOpen, setModalOpen}) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };
    return (
        <>
            <div className='relative top-8'>
                <img src={avatarUrl} alt="Avatar" className="w-[70px] h-[70px] rounded-full border-2 border-color3 mt-2" />
                <button className="absolute -bottom-2 left-9 p-1.5 rounded-full bg-color1 hover:bg-color2 border border-color3" title="Change photo" onClick={() => setModalOpen(true)}>
                    <Icon svgName="pencil-icon" className="w-4 h-4 stroke-color3" />
                </button>

                {modalOpen && (
                    <Modal updateAvatar={updateAvatar} closeModal={() => setModalOpen(false)} />
                )}
            </div>
            <form onSubmit={handleSubmit} className='space-y-7 bg-transparent py-10' method="POST">
                <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder= {namePlaceholder} name="username" inputValue={formValues.username} onChange={handleInputChange} />
                <InputField svgName="login-email-icon" svgWidth="30" svgHeight="23" placeholder="ENTER YOUR EMAIL" name="email" inputValue={formValues.email} onChange={handleInputChange} />
                <InputField svgName="login-phone-icon" svgWidth="30" svgHeight="30" placeholder="ENTER PHONE" name="phone" inputValue={formValues.phone} onChange={handleInputChange} type='tel' />
                <InputField svgName="login-password-icon" svgWidth="28" svgHeight="24" placeholder="ENTER PASSWORD" name="password" inputValue={formValues.password} onChange={handleInputChange} type='password' />
                {showUplaodCertificate &&
                    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 pt-2 px-4 w-full">
                        <input type="file" accept='application/pdf' className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="certificate" id="certificate" placeholder='ATTACH YOUR CERTIFICATE' />
                    </div>
                }
                <p className="text-color3 text-left font-sans my-[10px]">By continuing I agree to the <a className='opacity-80' href="">Terms of Use</a> & <a className='opacity-80' href="">Privacy Policy</a></p>
                <div className='flex-row justify-center items-start'>
                    <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sanspy-2 h-10 w-full px-4 hover:opacity-45 transition duration-300">
                        SIGN UP
                    </button>
                </div>
            </form>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
            <button onClick={signinWithGoogle} className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon svgName="google-sign-color-icon" width="30" height="30" className="custom-class" /> <span className="pl-3">Sign in with Google</span>
            </button>
        </>
    )
}

export default CommonSignup