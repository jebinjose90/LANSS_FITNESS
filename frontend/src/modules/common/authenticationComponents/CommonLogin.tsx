import Icon from '../Icon';
import InputField from '../InputField';


interface FormValues {
    email: string;
    password: string;
}

interface LoginModel {
    handleSubmit: (e: React.FormEvent) => void,
    gioLoc: () => void,
    formValues: FormValues,
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>,
}

const CommonLogin: React.FC<LoginModel> = ({handleSubmit,gioLoc,formValues,setFormValues}) => {

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
                    <button type="submit" className="text-color3 border-2 border-color3 bg-transparent font-sans py-2 h-10 w-1/4 px-4 hover:opacity-45 transition duration-300">
                        LOGIN
                    </button>
                    <a className="text-color3 font-sans py-2" href="">FORGOT PASSWORD?</a>
                </div>
                <p className="text-color3 text-left font-sans my-2.5">
                    Having trouble logging in? <a className="opacity-80" href="">Get Help</a>
                </p>
            </form>
            <button onClick={gioLoc} className="flex items-center text-color3 border-2 border-color3 bg-transparent font-sans py-3 px-5 hover:opacity-45 transition duration-300">
                <Icon svgName="google-sign-color-icon" width="30" height="30" className="custom-class" />
                <span className="pl-3">Sign in with Google</span>
            </button>
        </>
    );
};

export default CommonLogin;
