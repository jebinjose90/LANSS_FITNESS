import React, { useState } from 'react';
import Icon from '../Icon';
import { useUserAuth } from '../../user/hooks/manageUserAuth';

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

const InputField: React.FC<InputFieldProps> = ({ svgName, svgWidth, svgHeight, placeholder, type = "text", name, inputValue, onChange }) => (
    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
        <Icon svgName={svgName} width={svgWidth} height={svgHeight} className="custom-class" />
        <input type={type} name={name} id={name} className="bg-transparent placeholder-color3 font-sans h-10 focus:outline-none" placeholder={placeholder} value={inputValue} onChange={onChange} />
    </div>
);

const Login: React.FC = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const { loading, error, login } = useUserAuth();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(formValues.email, formValues.password);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };
    return (
        <>
            <form onSubmit={handleSubmit} className='space-y-7 bg-transparent py-10' method="POST">
                <InputField svgName="login-user-icon" svgWidth="23" svgHeight="23" placeholder="ENTER EMAIL" name="email" inputValue={formValues.email} onChange={handleInputChange} />
                <InputField svgName="login-password-icon" svgWidth="28" svgHeight="24" placeholder="ENTER PASSWORD" name="password" type="password" inputValue={formValues.password} onChange={handleInputChange} />

                <p className="text-color3 text-left font-sans my-2.5">
                    By continuing I agree to the <a className="opacity-80" href="">Terms of Use</a> & <a className="opacity-80" href="">Privacy Policy</a>
                </p>

                <div className="flex items-center justify-start space-x-5">
                    <button
                        type="submit"
                        className="text-color3 border-2 border-color3 bg-transparent font-sans py-2 h-10 w-1/4 px-4 hover:opacity-45 transition duration-300"
                       
                    >
                        {loading ? 'Logging in...' : 'LOGIN'}
                    </button>
                    <a className="text-color3 font-sans py-2" href="">FORGOT PASSWORD?</a>
                </div>

                <p className="text-color3 text-left font-sans my-2.5">
                    Having trouble logging in? <a className="opacity-80" href="">Get Help</a>
                </p>
                {error && <p>{error}</p>}
            </form>
            <button className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon svgName="google-sign-color-icon" width="30" height="30" className="custom-class" />
                <span className="pl-3">Sign in with Google</span>
            </button>
        </>


    );
};

export default Login;
