import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Otp from '../../trainer/components/otp/Otp'

const TrainerOTP = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Verify with OTP">
            <Otp />
        </AuthenticationUISkin>
    )
}

export default TrainerOTP