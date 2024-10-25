import VerifyEmail from "../../common/authenticationComponents/VerifyEmail"
import AuthenticationUISkin from "../../common/AuthenticationUISkin"

const UserVerifyEmail = () => {
  return (
    <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Verify Email"
            onSubmit={() => console.log('Submitted')}>
            <VerifyEmail/>
        </AuthenticationUISkin>
  )
}

export default UserVerifyEmail