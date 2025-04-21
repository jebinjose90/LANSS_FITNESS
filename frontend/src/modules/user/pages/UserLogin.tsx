import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../user/components/login/Login';
import LoginForm from '../components/login/LoginForm';
import userCRM from '../../../core/constants/route/userCRM';

const UserLogin: React.FC = () => {
    
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/9MJtr4G.jpeg"
            heading="Welcome Back!"
            showSubHeading={true}
            showUserSignup={true}
            userSigupText='New User?'
            userSignupHref={`/${userCRM.UserSignup}`}>
            <LoginForm />
        </AuthenticationUISkin>
    )
}

export default UserLogin