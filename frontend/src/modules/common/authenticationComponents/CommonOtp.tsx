// frontend\src\modules\common\authenticationComponents\Otp.tsx

interface OtpModel{
    handleResendOtp: () => Promise<void>,
    handleSubmit: (e: React.FormEvent) => Promise<void>,
    renderInput(): JSX.Element[],
    isButtonDisabled: boolean,
    timer: number
}

export const CommonOtp:React.FC<OtpModel> = ({handleResendOtp,handleSubmit,renderInput,isButtonDisabled,timer}) => {
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-color3 text-left font-sans my-[10px]">Send to Email</p>
            <div className="space-x-1">
                {renderInput()}
            </div>
            <button
                onClick={handleResendOtp}
                disabled={isButtonDisabled}
                className={`pt-4 font-semibold ${isButtonDisabled
                    ? "bg-transparent text-color3 opacity-35 cursor-not-allowed"
                    : "bg-transparent text-color3 hover:bg-transparent"
                    }`}
            >
                Resend OTP
            </button>
            <p className="mt-2 text-sm text-color3">
                {isButtonDisabled ? `Resend OTP in ${timer}s` : "You can resend the OTP now."}
            </p>
            <div className='flex flex-row justify-center items-start'>
                <button type='submit' className="text-color3 border-2 border-color3 bg-transparent font-sans py-2 h-10 w-1/4 px-4 hover:opacity-45 transition duration-300">
                    LOGIN
                </button>
            </div>
            <p className="text-color3 text-left font-sans my-[10px]">Having trouble logging in? <a className='opacity-80' href="">Get Help</a></p>
        </form>

    );
};
