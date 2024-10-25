import ResetPassword from '../../common/authenticationComponents/ResetPassword'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'

const UserResetPassword = () => {
  return (
    <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Reset Password"
            onSubmit={() => console.log('Submitted')}>
            <ResetPassword/>
        </AuthenticationUISkin>
  )
}

export default UserResetPassword