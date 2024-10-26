import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import { Otp } from '../../common/authenticationComponents/Otp'

const TrainerOTP = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Verify with OTP"
            onSubmit={() => console.log('Submitted')}>
            <Otp />
        </AuthenticationUISkin>
    )
}

export default TrainerOTP