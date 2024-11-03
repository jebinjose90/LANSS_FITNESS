// frontend\src\modules\common\authenticationComponents\Signup.tsx

import { useState } from 'react';
import { useUserAuth } from '../../user/hooks/manageUserAuth';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon'

interface SignupModel {
    showUplaodCertificate?: boolean
}

interface InputFieldProps {
    svgName: string;
    svgWidth: string;
    svgHeight: string;
    placeholder: string;
    type?: string;
    name: string;
    inputValue: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

interface FormErrors {
    username?: string;
    email?: string;
    password?: string;
    phone?: string;
}

const InputField: React.FC<InputFieldProps> = ({ svgName, svgWidth, svgHeight, placeholder, type = "text", name, inputValue, onChange }) => (
    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
        <Icon svgName={svgName} width={svgWidth} height={svgHeight} className="custom-class" />
        <input type={type} name={name} id={name} className="bg-transparent placeholder-color3 font-sans h-10 w-full focus:outline-none" placeholder={placeholder} value={inputValue} onChange={onChange} />
    </div>
);

const Signup: React.FC<SignupModel> = ({ showUplaodCertificate = false }) => {
    const [formValues, setFormValues] = useState({ username: '', email: '', password: '', phone: '' });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const { loading, error, signup } = useUserAuth();
    const navigate = useNavigate(); // Set up navigation

    const validateInput = (name: string, value: string): string | undefined => {
        let message = '';
        switch (name) {
            case 'username':
                if (!value) message = 'Username is required';
                break;
            case 'email':
                if (!value) message = 'Email is required';
                else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) message = 'Invalid email format';
                break;
            case 'password':
                if (!value) message = 'Password is required';
                else if (value.length < 6) message = 'Password must be at least 6 characters';
                break;
            case 'phone':
                if (!value) message = 'Phone number is required';
                else if (!/^\d{10}$/.test(value)) message = 'Phone number must be 10 digits';
                break;
            default:
                break;
        }
        return message || undefined; // Return the message or undefined if no error
    };
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Initialize new error state
        const newFormErrors: FormErrors = {}; // This should match your error structure
    
        // Validate all fields
        Object.keys(formValues).forEach(key => {
            const error = validateInput(key, formValues[key as keyof typeof formValues]); // This will now return a string or undefined
            if (error) {
                newFormErrors[key as keyof FormErrors] = error; // Assign error message to the respective key
            }
        });
    
        setFormErrors(newFormErrors); // Update the state with new errors
    
        // Check if there are any errors
        const hasErrors = Object.values(newFormErrors).some(error => error !== undefined);
        if (!hasErrors) {
            try {
                // Attempt signup and navigate on success
                await signup(formValues.username, formValues.email, formValues.password, Number(formValues.phone));
                navigate('/userOtp'); // Navigate to OTP page
            } catch (signUpError) {
                console.error(signUpError);
            }
        }
    };
    
    
    
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const { signinWithGoogle } = useUserAuth();
    
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-7 bg-transparent py-10' method="POST">
                <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder="ENTER YOUR USERNAME" name="username" inputValue={formValues.username} onChange={handleInputChange} />
                {formErrors.username && <p className="text-red-500">{formErrors.username}</p>}

                <InputField svgName="login-email-icon" svgWidth="30" svgHeight="23" placeholder="ENTER YOUR EMAIL" name="email" inputValue={formValues.email} onChange={handleInputChange} />
                {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}

                <InputField svgName="login-phone-icon" svgWidth="30" svgHeight="30" placeholder="ENTER PHONE" name="phone" inputValue={formValues.phone} onChange={handleInputChange} type='tel' />
                {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
                
                <InputField svgName="login-password-icon" svgWidth="28" svgHeight="24" placeholder="ENTER PASSWORD" name="password" inputValue={formValues.password} onChange={handleInputChange} type='password' />
                {formErrors.password && <p className="text-red-500">{formErrors.password}</p>}

                {showUplaodCertificate &&
                    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
                        <Icon svgName="login-user-icon" width="23" height="23" className="custom-class" />
                        <input type="text" className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none w-full" name="certificate" id="certificate" placeholder='ATTACH YOUR CERTIFICATE' />
                    </div>
                }
                <p className="text-color3 text-left font-sans my-[10px]">By continuing I agree to the <a className='opacity-80' href="">Terms of Use</a> & <a className='opacity-80' href="">Privacy Policy</a></p>
                <div className='flex-row justify-center items-start'>
                    <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sanspy-2 h-10 w-full px-4 hover:opacity-45 transition duration-300">
                        {loading ? 'Signing in...' : 'SIGN UP'}
                    </button>
                </div>
                {error && <p>{error}</p>}
            </form>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
            <button onClick={signinWithGoogle} className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon svgName="google-sign-color-icon" width="30" height="30" className="custom-class" /> <span className="pl-3">Sign in with Google</span>
            </button>
        </>
    )
}

export default Signup