

import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useTrainerAuth } from "../../hooks/manageTrainerAuth";
import { CommonOtp } from "../../../common/authenticationComponents/CommonOtp"

interface OtpState {
    digitOne: string;
    digitTwo: string;
    digitThree: string;
    digitFour: string;
}

const Otp = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const email = params.get('email')
    const { verifyOtp , resendOtp} = useTrainerAuth();
    const inputRef = useRef<(HTMLInputElement | null)[]>([]);
    const [otp, setOtp] = useState<OtpState>({
        digitOne: "",
        digitTwo: "",
        digitThree: "",
        digitFour: ""
    });

    const [timer, setTimer] = useState<number>(59); // Countdown starts at 59 seconds
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

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
            await verifyOtp(email!, otpValue);
        } catch (error) {
            console.error("OTP verification failed", error);
        }
    }

    // Effect to handle the countdown
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isButtonDisabled && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsButtonDisabled(false); // Enable button when timer reaches 0
            if (interval) clearInterval(interval); // Clear interval when timer ends
        }

        return () => {
            if (interval) clearInterval(interval); // Clean up on unmount
        };
    }, [timer, isButtonDisabled]);

    const handleResendOtp = async() => {
        if (email) {
            setTimer(59); // Reset the timer
            setIsButtonDisabled(true); // Disable the button again
            await resendOtp(email);
            return;
        }
    };
  return (
    <>
        <CommonOtp handleResendOtp={handleResendOtp} handleSubmit={handleSubmit} isButtonDisabled={isButtonDisabled} renderInput={renderInput} timer={timer}/>
    </>
  )
}

export default Otp