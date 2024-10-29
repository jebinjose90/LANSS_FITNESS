import ResetPassword from '../../common/authenticationComponents/ResetPassword'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'

const UserResetPassword = () => {
  return (
    <AuthenticationUISkin
      imageUrl="https://i.imgur.com/678tyUR.jpeg"
      heading="Reset User Password">
      <ResetPassword />
    </AuthenticationUISkin>
  )
}

export default UserResetPassword