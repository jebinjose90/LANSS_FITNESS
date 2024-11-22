import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../common/authenticationComponents/Login';


const TrainerLogin: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/lYC6eMo.jpeg"
            heading="Trainer!"
            showUserSignup={true}
            userSigupText='New Trainer?'
            userSignupHref='/trainer/trainerSignup'>
            <Login />
        </AuthenticationUISkin>
    )
}

export default TrainerLogin