import trainerCRM from '../../../core/constants/route/trainerCRM'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Signup from '../../trainer/components/signup/Signup'

const TrainerSignUp: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/678tyUR.jpeg"
            heading="Trainer Sign Up"
            showUserSignin= {true}
            userSiginText='Already a Trainer?'
            userSigninHref={`/${trainerCRM.TrainerLogin}`}>
            <Signup/>
        </AuthenticationUISkin>
    )
}

export default TrainerSignUp