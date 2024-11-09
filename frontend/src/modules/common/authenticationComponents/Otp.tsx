// frontend\src\modules\common\authenticationComponents\Otp.tsx

import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth } from "../../user/hooks/manageUserAuth";

interface OtpState {
    digitOne: string;
    digitTwo: string;
    digitThree: string;
    digitFour: string;
}

export const Otp: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email')
    const navigate = useNavigate();
    const {verifyOtp } = useUserAuth();
    const inputRef = useRef<(HTMLInputElement | null)[]>([]);
    const [otp, setOtp] = useState<OtpState>({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: ""
    });

    const pasteText = (event: ClipboardEvent) => {
        const pastedText = event.clipboardData?.getData("text") || "";
        if (/[a-zA-Z]/.test(pastedText)) return;
        const fieldValues: Partial<OtpState> = {};
        Object.keys(otp).forEach((key, index) => {
            fieldValues[key as keyof OtpState] = pastedText[index] || "";
        });

        setOtp((prev) => ({ ...prev, ...fieldValues }));
        inputRef.current[3]?.focus();
    };

    useEffect(() => {
        inputRef.current[0]?.focus();
        inputRef.current[0]?.addEventListener("paste", pasteText as EventListener);

        return () => inputRef.current[0]?.removeEventListener("paste", pasteText as EventListener);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value } = event.target;

        if (/[a-zA-Z]/.test(value)) return;

        setOtp((prev) => ({
            ...prev,
            [name]: value.slice(-1),
        }));

        if (value && index < 3) {
            inputRef.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === "Backspace" && index > 0 && !otp[`digit${index + 1}` as keyof OtpState]) {
            inputRef.current[index - 1]?.focus();
        }
    };

    function renderInput() {
        return Object.keys(otp).map((key, index) => (
            <input
                type="tel"
                key={index}
                ref={(element) => (inputRef.current[index] = element)}
                className="border-2 border-color3 text-color3 text-center h-10 w-8 bg-transparent focus:outline-none focus:border-color2"
                value={otp[key as keyof OtpState]}
                name={key}
                onChange={(event) => handleChange(event, index)}
                onKeyUp={(event) => handleBackspace(event, index)}
            />
        ));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            console.error("Email is missing");
            return;
        }
        // Concatenate the OTP digits into a single string
        const otpValue = `${otp.digitOne}${otp.digitTwo}${otp.digitThree}${otp.digitFour}`;
        try {
            const data = await verifyOtp(email!, otpValue);
            if (data) {
                console.log("DTATA",data);
                
              const { username, imageUrl } = data; // Destructure only if data is not null
              // After successful OTP verification, navigate to the home page with user details
              navigate('/home', { state: { username, imageUrl } });
            }
          } catch (error) {
            console.error("OTP verification failed", error);
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-color3 text-left font-sans my-[10px]">Send to Email</p>
            <div className="space-x-1">
                {renderInput()}
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">Resend OTP <a className='opacity-80' href="">59:00</a></p>
            <div className='flex flex-row justify-center items-start'>
                <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sans py-2 h-10 w-1/4 px-4 hover:opacity-45 transition duration-300">
                    LOGIN
                </button>
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
        </form>

    );
};
