import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import ResetPassword from '../../common/authenticationComponents/ResetPassword'

const TrainerResetPassword = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Reset Trainer Password">
            <ResetPassword />
        </AuthenticationUISkin>
    )
}

export default TrainerResetPassword