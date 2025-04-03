import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Otp from '../../user/components/otp/Otp'

const UserOTP = () => {
  return (
    <AuthenticationUISkin
        imageUrl="https://i.imgur.com/678tyUR.jpeg"
        heading="Verify with OTP">
            <Otp />
        </AuthenticationUISkin>
  )
}

export default UserOTP