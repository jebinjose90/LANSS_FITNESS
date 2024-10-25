import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Signup from '../../common/authenticationComponents/Signup'

const UserSignup: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/SExGsnl.jpeg"
            heading="Sign Up"
            showUserSignin={true}
            userSiginText='Already User?'
            userSigninHref=''
            onSubmit={() => console.log('Submitted')}>
            <Signup
                showUplaodCertificate={false} />
        </AuthenticationUISkin>
    )
}

export default UserSignup