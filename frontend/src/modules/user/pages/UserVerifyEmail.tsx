import VerifyEmail from "../../common/authenticationComponents/VerifyEmail"
import AuthenticationUISkin from "../../common/AuthenticationUISkin"

const UserVerifyEmail = () => {
  return (
    <AuthenticationUISkin
      imageUrl="https://i.imgur.com/678tyUR.jpeg"
      heading="Verify User Email">
      
      <VerifyEmail />
    </AuthenticationUISkin>
  )
}

export default UserVerifyEmail