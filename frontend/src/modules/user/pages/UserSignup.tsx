import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Signup from '../../user/components/signup/Signup'
import userCRM from '../../../core/constants/route/userCRM'

const UserSignup: React.FC = () => {
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/678tyUR.jpeg"
            heading="Sign Up"
            showUserSignin={true}
            userSiginText='Already User?'
            userSigninHref={`/${userCRM.UserLogin}`}>
            <Signup/>
        </AuthenticationUISkin>
    )
}

export default UserSignup