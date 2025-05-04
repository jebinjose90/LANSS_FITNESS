import { useSelector } from 'react-redux'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Otp from '../../user/components/otp/Otp'
import { RootState } from '../../../interface-adapters/redux/store'
import IsLoading from '../../common/components/IsLoading'

const UserOTP = () => {
  const { loading } = useSelector((state: RootState) => state.user)
  if (loading) {
    <IsLoading/>
  }
  return (
    <AuthenticationUISkin
        imageUrl="https://i.imgur.com/678tyUR.jpeg"
        heading="Verify with OTP">
            <Otp />
        </AuthenticationUISkin>
  )
}

export default UserOTP