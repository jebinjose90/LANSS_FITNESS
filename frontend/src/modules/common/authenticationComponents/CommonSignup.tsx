// frontend\src\modules\common\authenticationComponents\Signup.tsx

import Icon from '../Icon'
import Modal from '../components/imageCrop/Modal';
import InputField from '../InputField';
import UploadPdfModal from '../components/pdfUpload/UploadPdfModal'; // Path to your modal component
import InputParagraph from '../InputParagraph';


interface FormValues {
    trainername: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    imageUrl: string;
    pdfUrl: string;
    description: string;
}

interface SignupModel {
    trainerFormNeeds?: boolean,
    avatarUrl: string,
    formValues: FormValues,
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
    signinWithGoogle: () => Promise<void>,
    handleSubmit: (e: React.FormEvent) => Promise<void>,
    updateAvatar: (imgSrc: any) => Promise<void>,
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    namePlaceholder: string;
    isPdfModalOpen?: boolean;
    setPdfModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    handlePdfUploadSuccess?: (uploadedPdfUrl: string) => void;
}

const CommonSignup: React.FC<SignupModel> = ({ trainerFormNeeds = false, avatarUrl = "", formValues, namePlaceholder, setFormValues, handleSubmit, signinWithGoogle, updateAvatar, modalOpen, setModalOpen, isPdfModalOpen, setPdfModalOpen, handlePdfUploadSuccess }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                {trainerFormNeeds &&
                    <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder={namePlaceholder} name="trainer" inputValue={formValues.trainername} onChange={handleInputChange} />}

                {!trainerFormNeeds &&
                    <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder={namePlaceholder} name="username" inputValue={formValues.username} onChange={handleInputChange} />}

                <InputField svgName="login-email-icon" svgWidth="30" svgHeight="23" placeholder="ENTER YOUR EMAIL" name="email" inputValue={formValues.email} onChange={handleInputChange} />
                <InputField svgName="login-phone-icon" svgWidth="30" svgHeight="30" placeholder="ENTER PHONE" name="phone" inputValue={formValues.phone} onChange={handleInputChange} type='tel' />
                <InputField svgName="login-password-icon" svgWidth="28" svgHeight="24" placeholder="ENTER PASSWORD" name="password" inputValue={formValues.password} onChange={handleInputChange} type='password' />
                {trainerFormNeeds &&
                    <InputParagraph svgName="description-icon" svgWidth="20" svgHeight="24" placeholder='ENTER DESIGNATION' name='dwscription' inputValue={formValues.description} onChange={handleInputChange} />}
                {trainerFormNeeds &&
                    <>
                        <button type="button" onClick={() => setPdfModalOpen && setPdfModalOpen(true)} className="px-4 py-2 bg-color3 text-color2">
                            {formValues.pdfUrl ? 'Change PDF' : 'Upload PDF'}
                        </button>
                        {formValues.pdfUrl && <p className="mt-2 text-green-600">PDF Uploaded Successfully!</p>}
                    </>
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

            {/* Modal for PDF Upload */}
            {isPdfModalOpen !== undefined && setPdfModalOpen !== undefined && handlePdfUploadSuccess !== undefined && (
                <UploadPdfModal
                    isOpen={isPdfModalOpen}
                    onClose={() => setPdfModalOpen(false)}
                    onUploadSuccess={handlePdfUploadSuccess}
                />
            )}
        </>
    )
}

export default CommonSignup