import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../trainer/components/login/Login';
import trainerCRM from '../../../core/constants/route/trainerCRM';


const TrainerLogin: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/lYC6eMo.jpeg"
            heading="Trainer!"
            showUserSignup={true}
            userSigupText='New Trainer?'
            userSignupHref={`/${trainerCRM.TrainerSignUp}`}>
            <Login />
        </AuthenticationUISkin>
    )
}

export default TrainerLogin