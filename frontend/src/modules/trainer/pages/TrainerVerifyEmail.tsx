import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import VerifyEmail from '../../common/authenticationComponents/VerifyEmail'

const TrainerVerifyEmail = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Verify Trainer Email"
            onSubmit={() => console.log('Submitted')}>
            <VerifyEmail />
        </AuthenticationUISkin>
    )
}

export default TrainerVerifyEmail