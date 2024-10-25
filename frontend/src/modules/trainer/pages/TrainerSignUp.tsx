import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Signup from '../../common/authenticationComponents/Signup'

const TrainerSignUp: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Sign Up"
            showUserSignin= {true}
            userSiginText='Already a Trainer?'
            userSigninHref=''
            onSubmit={() => console.log('Submitted')}>
            <Signup/>
        </AuthenticationUISkin>
    )
}

export default TrainerSignUp