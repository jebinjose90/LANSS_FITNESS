import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../user/components/login/Login';
import LoginForm from '../components/login/LoginForm';

const UserLogin: React.FC = () => {
    
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/9MJtr4G.jpeg"
            heading="Welcome Back!"
            showSubHeading={true}
            showUserSignup={true}
            userSigupText='New User?'
            userSignupHref='/userSignup'>
            <LoginForm />
        </AuthenticationUISkin>
    )
}

export default UserLogin